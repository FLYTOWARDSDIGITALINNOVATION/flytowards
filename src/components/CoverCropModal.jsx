import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { RotateCcw, X } from 'lucide-react';
import './CoverCropModal.css';

const MIN_CROP_SIZE = 20;

export const clamp = (value, lo, hi) => {
    if (hi < lo) return lo;
    return Math.min(hi, Math.max(lo, value));
};

export const getXY = (event, viewportElement) => {
    const rect = viewportElement?.getBoundingClientRect?.();
    if (!rect) return { x: 0, y: 0 };

    const point = event?.touches?.[0] ?? event?.changedTouches?.[0] ?? event;
    return {
        x: point.clientX - rect.left,
        y: point.clientY - rect.top,
    };
};

export const normalizeRect = (x1, y1, x2, y2, bounds = { x: 0, y: 0, width: 0, height: 0 }) => {
    const minX = Math.max(0, bounds?.x || 0);
    const minY = Math.max(0, bounds?.y || 0);
    const maxX = minX + Math.max(0, bounds?.width || 0);
    const maxY = minY + Math.max(0, bounds?.height || 0);

    const left = clamp(Math.min(x1, x2), minX, maxX);
    const top = clamp(Math.min(y1, y2), minY, maxY);
    const right = clamp(Math.max(x1, x2), minX, maxX);
    const bottom = clamp(Math.max(y1, y2), minY, maxY);

    return {
        x: left,
        y: top,
        w: Math.max(0, right - left),
        h: Math.max(0, bottom - top),
    };
};

const clampRectToBounds = (rect, bounds = { x: 0, y: 0, width: 0, height: 0 }) => {
    const minX = Math.max(0, bounds?.x || 0);
    const minY = Math.max(0, bounds?.y || 0);
    const width = Math.max(0, bounds?.width || 0);
    const height = Math.max(0, bounds?.height || 0);
    const maxX = minX + width;
    const maxY = minY + height;

    const w = clamp(rect.w, 0, width);
    const h = clamp(rect.h, 0, height);

    const x = width > w ? clamp(rect.x, minX, maxX - w) : minX;
    const y = height > h ? clamp(rect.y, minY, maxY - h) : minY;

    return { x, y, w, h };
};

const roundAndClampRect = (rect, bounds) => {
    const rounded = {
        x: Math.round(rect.x),
        y: Math.round(rect.y),
        w: Math.round(rect.w),
        h: Math.round(rect.h),
    };

    return clampRectToBounds(rounded, bounds);
};

const buildDrawRect = (startPoint, currentPoint, bounds) => {
    const normalized = normalizeRect(startPoint.x, startPoint.y, currentPoint.x, currentPoint.y, bounds);
    const widthLimit = Math.max(0, bounds?.width || 0);
    const heightLimit = Math.max(0, bounds?.height || 0);
    const minWidth = Math.min(MIN_CROP_SIZE, widthLimit);
    const minHeight = Math.min(MIN_CROP_SIZE, heightLimit);

    const width = clamp(Math.max(normalized.w, minWidth), 0, widthLimit);
    const height = clamp(Math.max(normalized.h, minHeight), 0, heightLimit);

    const x = currentPoint.x >= startPoint.x ? startPoint.x : startPoint.x - width;
    const y = currentPoint.y >= startPoint.y ? startPoint.y : startPoint.y - height;

    return clampRectToBounds({ x, y, w: width, h: height }, bounds);
};

const moveRect = (rect, delta, bounds) => {
    return clampRectToBounds(
        {
            x: rect.x + delta.x,
            y: rect.y + delta.y,
            w: rect.w,
            h: rect.h,
        },
        bounds,
    );
};

const resizeRect = (startRect, handle, currentPoint, bounds) => {
    const widthLimit = Math.max(0, bounds?.width || 0);
    const heightLimit = Math.max(0, bounds?.height || 0);
    const minWidth = Math.min(MIN_CROP_SIZE, widthLimit);
    const minHeight = Math.min(MIN_CROP_SIZE, heightLimit);

    let left = startRect.x;
    let top = startRect.y;
    let right = startRect.x + startRect.w;
    let bottom = startRect.y + startRect.h;

    if (handle.includes('w')) {
        left = clamp(currentPoint.x, bounds.x, Math.max(bounds.x, right - minWidth));
    }

    if (handle.includes('e')) {
        right = clamp(currentPoint.x, left + minWidth, bounds.x + widthLimit);
    }

    if (handle.includes('n')) {
        top = clamp(currentPoint.y, bounds.y, Math.max(bounds.y, bottom - minHeight));
    }

    if (handle.includes('s')) {
        bottom = clamp(currentPoint.y, top + minHeight, bounds.y + heightLimit);
    }

    left = clamp(left, bounds.x, Math.max(bounds.x, bounds.x + widthLimit - minWidth));
    top = clamp(top, bounds.y, Math.max(bounds.y, bounds.y + heightLimit - minHeight));
    right = clamp(right, left + minWidth, bounds.x + widthLimit);
    bottom = clamp(bottom, top + minHeight, bounds.y + heightLimit);

    return clampRectToBounds(
        {
            x: left,
            y: top,
            w: Math.max(minWidth, right - left),
            h: Math.max(minHeight, bottom - top),
        },
        bounds,
    );
};

const getContainedImageRect = (viewportSize, naturalSize) => {
    const viewportWidth = Math.max(0, viewportSize?.width || 0);
    const viewportHeight = Math.max(0, viewportSize?.height || 0);
    const naturalWidth = Math.max(0, naturalSize?.width || 0);
    const naturalHeight = Math.max(0, naturalSize?.height || 0);

    if (!viewportWidth || !viewportHeight || !naturalWidth || !naturalHeight) {
        return {
            x: 0,
            y: 0,
            width: viewportWidth,
            height: viewportHeight,
            scale: 1,
        };
    }

    const scale = Math.min(viewportWidth / naturalWidth, viewportHeight / naturalHeight);
    const width = naturalWidth * scale;
    const height = naturalHeight * scale;

    return {
        x: (viewportWidth - width) / 2,
        y: (viewportHeight - height) / 2,
        width,
        height,
        scale,
    };
};

const mapCropRectToSourceRect = (selectionRect, imageRect, naturalSize) => {
    const sourceWidth = Math.max(0, naturalSize?.width || 0);
    const sourceHeight = Math.max(0, naturalSize?.height || 0);

    if (!selectionRect || !imageRect || !imageRect.scale || !sourceWidth || !sourceHeight) {
        return null;
    }

    const clampedSelection = clampRectToBounds(selectionRect, imageRect);
    const sourceX = (clampedSelection.x - imageRect.x) / imageRect.scale;
    const sourceY = (clampedSelection.y - imageRect.y) / imageRect.scale;
    const sourceW = clampedSelection.w / imageRect.scale;
    const sourceH = clampedSelection.h / imageRect.scale;

    return clampRectToBounds(
        {
            x: sourceX,
            y: sourceY,
            w: sourceW,
            h: sourceH,
        },
        {
            x: 0,
            y: 0,
            width: sourceWidth,
            height: sourceHeight,
        },
    );
};

const HANDLE_LABELS = {
    nw: 'Resize crop from top left',
    n: 'Resize crop from top edge',
    ne: 'Resize crop from top right',
    e: 'Resize crop from right edge',
    se: 'Resize crop from bottom right',
    s: 'Resize crop from bottom edge',
    sw: 'Resize crop from bottom left',
    w: 'Resize crop from left edge',
};

const DEFAULT_VIEWPORT = { width: 0, height: 300 };

export default function CoverCropModal({ imageSrc, onApply, onCancel, isApplying = false }) {
    const titleId = useId();
    const infoId = useId();
    const viewportRef = useRef(null);
    const closeButtonRef = useRef(null);
    const cropRectRef = useRef(null);
    const interactionRef = useRef(null);
    const statusTimerRef = useRef(null);
    const previousFocusRef = useRef(null);

    const [viewportSize, setViewportSize] = useState(DEFAULT_VIEWPORT);
    const [imageNaturalSize, setImageNaturalSize] = useState({ width: 0, height: 0 });
    const [cropRect, setCropRect] = useState(null);
    const [interactionMode, setInteractionMode] = useState('idle');
    const [hasDrawnOnce, setHasDrawnOnce] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [imageError, setImageError] = useState('');

    const imageBounds = useMemo(() => getContainedImageRect(viewportSize, imageNaturalSize), [viewportSize, imageNaturalSize]);

    const clearStatusTimer = () => {
        if (statusTimerRef.current) {
            window.clearTimeout(statusTimerRef.current);
            statusTimerRef.current = null;
        }
    };

    const showTransientStatus = (message) => {
        clearStatusTimer();
        setStatusMessage(message);

        if (!message) return;

        statusTimerRef.current = window.setTimeout(() => {
            setStatusMessage('');
            statusTimerRef.current = null;
        }, 1800);
    };

    useEffect(() => {
        cropRectRef.current = cropRect;
    }, [cropRect]);

    useEffect(() => {
        if (typeof document === 'undefined') return undefined;

        previousFocusRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const focusTimer = window.requestAnimationFrame(() => {
            closeButtonRef.current?.focus();
        });

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onCancel?.();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.cancelAnimationFrame(focusTimer);
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
            previousFocusRef.current?.focus?.();
        };
    }, [onCancel]);

    useEffect(() => {
        const node = viewportRef.current;
        if (!node) return undefined;

        const measure = () => {
            const rect = node.getBoundingClientRect();
            if (!rect.width || !rect.height) return;

            setViewportSize({
                width: Math.round(rect.width),
                height: Math.round(rect.height),
            });
        };

        measure();

        if (typeof ResizeObserver !== 'undefined') {
            const observer = new ResizeObserver(measure);
            observer.observe(node);
            return () => observer.disconnect();
        }

        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    useEffect(() => {
        clearStatusTimer();
        setStatusMessage('');
        setCropRect(null);
        cropRectRef.current = null;
        setInteractionMode('idle');
        interactionRef.current = null;
        setHasDrawnOnce(false);
        setIsImageLoaded(false);
        setImageError('');
        setImageNaturalSize({ width: 0, height: 0 });
    }, [imageSrc]);

    useEffect(() => {
        if (!cropRect) return;

        setCropRect((current) => {
            if (!current) return current;
            const next = clampRectToBounds(current, imageBounds);
            if (
                next.x === current.x &&
                next.y === current.y &&
                next.w === current.w &&
                next.h === current.h
            ) {
                return current;
            }
            return next;
        });
    }, [imageBounds]);

    useEffect(() => {
        return () => {
            clearStatusTimer();
        };
    }, []);

    const infoText = useMemo(() => {
        const rect = cropRect || { x: 0, y: 0, w: 0, h: 0 };
        const base = `Crop: ${rect.w} × ${rect.h} px | Position: (${rect.x}, ${rect.y})`;
        return statusMessage ? `${base}\n${statusMessage}` : base;
    }, [cropRect, statusMessage]);

    const beginInteraction = (mode, pointerEvent, extras = {}) => {
        const viewport = viewportRef.current;
        if (!viewport) return;

        clearStatusTimer();
        setStatusMessage('');

        pointerEvent.preventDefault();
        pointerEvent.currentTarget.setPointerCapture?.(pointerEvent.pointerId);

        interactionRef.current = {
            mode,
            pointerId: pointerEvent.pointerId,
            captureTarget: pointerEvent.currentTarget,
            startPoint: getXY(pointerEvent, viewport),
            startRect: cropRectRef.current ? { ...cropRectRef.current } : null,
            bounds: { ...imageBounds },
            hasMoved: false,
            ...extras,
        };

        setInteractionMode(mode);
    };

    const handleViewportPointerDown = (event) => {
        if (!imageSrc || !isImageLoaded || imageError || event.button !== 0) return;
        if (!imageBounds.width || !imageBounds.height) return;

        const viewport = viewportRef.current;
        if (!viewport) return;

        const point = getXY(event, viewport);
        const insideImage =
            point.x >= imageBounds.x &&
            point.x <= imageBounds.x + imageBounds.width &&
            point.y >= imageBounds.y &&
            point.y <= imageBounds.y + imageBounds.height;

        if (!insideImage) return;

        beginInteraction('drawing', event);
    };

    const handleCropPointerDown = (event) => {
        if (!imageSrc || !isImageLoaded || imageError || event.button !== 0 || !cropRectRef.current) return;

        event.stopPropagation();
        const handle = event.target.closest?.('[data-handle]')?.dataset?.handle;
        const mode = handle ? 'resizing' : 'moving';

        beginInteraction(mode, event, handle ? { handle } : {});
    };

    const handlePointerMove = (event) => {
        const interaction = interactionRef.current;
        if (!interaction || interaction.pointerId !== event.pointerId) return;

        event.preventDefault();

        const viewport = viewportRef.current;
        if (!viewport) return;

        const point = getXY(event, viewport);
        const dx = point.x - interaction.startPoint.x;
        const dy = point.y - interaction.startPoint.y;
        const hasMoved = Math.abs(dx) >= 1 || Math.abs(dy) >= 1;

        if (!hasMoved) return;

        interaction.hasMoved = true;

        let nextRect = null;
        const bounds = interaction.bounds || imageBounds;

        if (interaction.mode === 'drawing') {
            nextRect = buildDrawRect(interaction.startPoint, point, bounds);
            if (!hasDrawnOnce) setHasDrawnOnce(true);
        } else if (interaction.mode === 'moving' && interaction.startRect) {
            nextRect = moveRect(interaction.startRect, { x: dx, y: dy }, bounds);
        } else if (interaction.mode === 'resizing' && interaction.startRect && interaction.handle) {
            nextRect = resizeRect(interaction.startRect, interaction.handle, point, bounds);
        }

        if (!nextRect) return;

        setCropRect(roundAndClampRect(nextRect, bounds));
    };

    const endInteraction = (event) => {
        const interaction = interactionRef.current;
        if (!interaction || interaction.pointerId !== event.pointerId) return;

        interaction.captureTarget?.releasePointerCapture?.(event.pointerId);
        interactionRef.current = null;
        setInteractionMode('idle');
    };

    const handleReset = () => {
        clearStatusTimer();
        setStatusMessage('');
        setCropRect(null);
        cropRectRef.current = null;
        setHasDrawnOnce(false);
        setInteractionMode('idle');
        interactionRef.current = null;
    };

    const handleApply = async () => {
        if (!cropRect || !imageNaturalSize.width || !imageNaturalSize.height) return;

        const selection = roundAndClampRect(cropRect, imageBounds);
        const finalRect = mapCropRectToSourceRect(selection, imageBounds, imageNaturalSize);

        if (!finalRect) {
            showTransientStatus('Could not apply the crop. Please try again.');
            return;
        }

        if (finalRect.w < 10 || finalRect.h < 10) {
            showTransientStatus('Crop area is too small.');
            return;
        }

        try {
            await Promise.resolve(onApply?.(finalRect));
            showTransientStatus(`✓ Crop applied: ${Math.round(finalRect.w)} × ${Math.round(finalRect.h)} at (${Math.round(finalRect.x)}, ${Math.round(finalRect.y)})`);
        } catch (error) {
            console.error('Cover crop apply failed:', error);
            showTransientStatus(error instanceof Error && error.message ? error.message : 'Could not apply the crop. Please try again.');
        }
    };

    const handleCancel = () => {
        clearStatusTimer();
        onCancel?.();
    };

    const handleImageLoad = (event) => {
        const image = event.currentTarget;
        setIsImageLoaded(true);
        setImageError('');
        setImageNaturalSize({
            width: image.naturalWidth || 0,
            height: image.naturalHeight || 0,
        });
    };

    const handleImageError = () => {
        setIsImageLoaded(false);
        setImageError('Unable to load image preview.');
        setImageNaturalSize({ width: 0, height: 0 });
    };

    if (typeof document === 'undefined') return null;

    return createPortal(
        <div className="ft-cover-crop" role="presentation" onClick={handleCancel}>
            <div className="ft-cover-crop__backdrop" aria-hidden="true" />

            <div
                className="ft-cover-crop__panel"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={infoId}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="ft-cover-crop__header">
                    <div className="ft-cover-crop__headerText">
                        <span className="ft-cover-crop__eyebrow">COVER CROP</span>
                        <h2 id={titleId} className="ft-cover-crop__title">
                            Adjust your image before publishing
                        </h2>
                    </div>

                    <button
                        ref={closeButtonRef}
                        type="button"
                        className="ft-cover-crop__closeButton"
                        onClick={handleCancel}
                        aria-label="Close crop modal"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div
                    className="ft-cover-crop__viewport"
                    ref={viewportRef}
                    data-mode={interactionMode}
                    onPointerDown={handleViewportPointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={endInteraction}
                    onPointerCancel={endInteraction}
                >
                    {imageSrc ? (
                        <img
                            className="ft-cover-crop__image"
                            src={imageSrc}
                            alt="Crop source preview"
                            draggable="false"
                            onLoad={handleImageLoad}
                            onError={handleImageError}
                        />
                    ) : (
                        <div className="ft-cover-crop__emptyState">No image provided.</div>
                    )}

                    {!isImageLoaded && imageSrc && !imageError && (
                        <div className="ft-cover-crop__statusChip" aria-hidden="true">
                            Loading image...
                        </div>
                    )}

                    {imageError && (
                        <div className="ft-cover-crop__statusChip ft-cover-crop__statusChip--error" aria-hidden="true">
                            {imageError}
                        </div>
                    )}

                    <div className="ft-cover-crop__sizeBadge" aria-hidden="true">
                        {cropRect ? `${cropRect.w} × ${cropRect.h}` : '0 × 0'}
                    </div>

                    {!hasDrawnOnce && (
                        <div className="ft-cover-crop__hint" aria-hidden="true">
                            Click and drag to select crop area
                        </div>
                    )}

                    <div
                        className={`ft-cover-crop__selection ${cropRect ? 'is-visible' : ''}`}
                        onPointerDown={handleCropPointerDown}
                        style={
                            cropRect
                                ? {
                                      left: `${cropRect.x}px`,
                                      top: `${cropRect.y}px`,
                                      width: `${cropRect.w}px`,
                                      height: `${cropRect.h}px`,
                                  }
                                : undefined
                        }
                    >
                        {cropRect && (
                            <>
                                <div className="ft-cover-crop__grid" aria-hidden="true">
                                    <span className="ft-cover-crop__gridLine ft-cover-crop__gridLine--v1" />
                                    <span className="ft-cover-crop__gridLine ft-cover-crop__gridLine--v2" />
                                    <span className="ft-cover-crop__gridLine ft-cover-crop__gridLine--h1" />
                                    <span className="ft-cover-crop__gridLine ft-cover-crop__gridLine--h2" />
                                </div>

                                {['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'].map((handle) => (
                                    <button
                                        key={handle}
                                        type="button"
                                        className={`ft-cover-crop__handle ft-cover-crop__handle--${handle}`}
                                        data-handle={handle}
                                        aria-label={HANDLE_LABELS[handle]}
                                        tabIndex={-1}
                                    />
                                ))}
                            </>
                        )}
                    </div>
                </div>

                <div className="ft-cover-crop__footer">
                    <textarea
                        id={infoId}
                        className="ft-cover-crop__infoBox"
                        readOnly
                        value={infoText}
                        aria-label="Crop information"
                        rows={3}
                        spellCheck={false}
                    />

                    <div className="ft-cover-crop__actions">
                        <button type="button" className="ft-cover-crop__button ft-cover-crop__button--reset" onClick={handleReset}>
                            <RotateCcw size={16} />
                            Reset
                        </button>

                        <button type="button" className="ft-cover-crop__button ft-cover-crop__button--cancel" onClick={handleCancel}>
                            Cancel
                        </button>

                        <button
                            type="button"
                            className="ft-cover-crop__button ft-cover-crop__button--apply"
                            onClick={handleApply}
                            disabled={!cropRect || Boolean(imageError) || isApplying}
                        >
                            {isApplying ? 'Applying...' : 'Apply Crop'}
                        </button>
                    </div>
                </div>
            </div>
        </div>,
        document.body,
    );
}
