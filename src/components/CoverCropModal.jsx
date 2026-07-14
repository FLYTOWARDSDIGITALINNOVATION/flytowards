import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const HS       = 11;  // handle size (px)
const HIT      = 14;  // hit-test radius (px) – slightly bigger for easy grabbing
const MIN_DIM  = 40;  // minimum crop box dimension (stage px)

// 8 handles: corner + mid-edge
const HANDLES = [
    { id: 'nw', fx: 0,   fy: 0   },
    { id: 'n',  fx: 0.5, fy: 0   },
    { id: 'ne', fx: 1,   fy: 0   },
    { id: 'e',  fx: 1,   fy: 0.5 },
    { id: 'se', fx: 1,   fy: 1   },
    { id: 's',  fx: 0.5, fy: 1   },
    { id: 'sw', fx: 0,   fy: 1   },
    { id: 'w',  fx: 0,   fy: 0.5 },
];
const CURSOR_MAP = {
    nw: 'nw-resize', n: 'n-resize', ne: 'ne-resize',
    e:  'e-resize',  se: 'se-resize', s: 's-resize',
    sw: 'sw-resize', w: 'w-resize',
};

/**
 * CoverCropModal
 * Props:
 *   imageSrc   – object/data URL of the uploaded image
 *   onApply    – async fn({ x, y, w, h }) natural-image pixels
 *   onCancel   – close without saving
 *   isApplying – external busy flag
 *   onSkip     – use original without cropping
 */
const CoverCropModal = ({ imageSrc, onApply, onCancel, isApplying, onSkip }) => {
    const stageRef = useRef(null);
    const dragRef  = useRef(null); // { type, handle?, startX, startY, box }

    const [imgNatural, setImgNatural] = useState({ w: 0, h: 0 });
    const [stageSize,  setStageSize]  = useState({ w: 0, h: 0 });
    const [cropBox,    setCropBox]    = useState(null);  // stage-px coords
    const [cursor,     setCursor]     = useState('default');
    const [applying,   setApplying]   = useState(false);

    // ── Where the image actually paints inside the stage (object-fit:contain) ──
    const displayRect = useMemo(() => {
        const { w: sw, h: sh } = stageSize;
        const { w: iw, h: ih } = imgNatural;
        if (!sw || !iw) return null;
        const sa = sw / sh, ia = iw / ih;
        let dw, dh;
        if (ia >= sa) { dw = sw; dh = sw / ia; }
        else          { dh = sh; dw = sh * ia; }
        return { x: (sw - dw) / 2, y: (sh - dh) / 2, w: dw, h: dh };
    }, [stageSize, imgNatural]);

    // Initialise crop box to the full image display rect
    useEffect(() => {
        if (!displayRect) return;
        setCropBox({ x: displayRect.x, y: displayRect.y, w: displayRect.w, h: displayRect.h });
    }, [displayRect?.x, displayRect?.y, displayRect?.w, displayRect?.h]); // eslint-disable-line

    // Measure stage, bind Escape
    useEffect(() => {
        const el = stageRef.current;
        if (!el) return;
        const measure = () => {
            const r = el.getBoundingClientRect();
            if (r.width) setStageSize({ w: r.width, h: r.height });
        };
        measure();
        const ro = new ResizeObserver(measure);
        ro.observe(el);
        const onKey = (e) => { if (e.key === 'Escape') onCancel(); };
        window.addEventListener('keydown', onKey);
        return () => { ro.disconnect(); window.removeEventListener('keydown', onKey); };
    }, [onCancel]);

    // Keep box inside image display rect
    const constrain = useCallback((b, ir) => {
        if (!ir) return b;
        let { x, y, w, h } = b;
        w = Math.max(MIN_DIM, w);
        h = Math.max(MIN_DIM, h);
        x = clamp(x, ir.x, ir.x + ir.w - w);
        y = clamp(y, ir.y, ir.y + ir.h - h);
        w = Math.min(w, ir.x + ir.w - x);
        h = Math.min(h, ir.y + ir.h - y);
        return { x, y, w, h };
    }, []);

    // Convert stage-px crop box → natural image pixels
    const getCropInfo = useCallback(() => {
        if (!cropBox || !displayRect || !imgNatural.w) {
            return { x: 0, y: 0, w: imgNatural.w || 0, h: imgNatural.h || 0 };
        }
        const sx = imgNatural.w / displayRect.w;
        const sy = imgNatural.h / displayRect.h;
        return {
            x: Math.max(0, Math.round((cropBox.x - displayRect.x) * sx)),
            y: Math.max(0, Math.round((cropBox.y - displayRect.y) * sy)),
            w: Math.max(1, Math.round(cropBox.w * sx)),
            h: Math.max(1, Math.round(cropBox.h * sy)),
        };
    }, [cropBox, displayRect, imgNatural]);

    // ── Pointer helpers ──────────────────────────────────────────────────────
    const stageXY = (e) => {
        const r = stageRef.current.getBoundingClientRect();
        return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const onPointerDown = (e) => {
        if (!cropBox || !displayRect) return;
        e.preventDefault();
        stageRef.current.setPointerCapture(e.pointerId);
        const { x: px, y: py } = stageXY(e);

        // Check handles first (larger hit target)
        for (const { id, fx, fy } of HANDLES) {
            const hx = cropBox.x + fx * cropBox.w;
            const hy = cropBox.y + fy * cropBox.h;
            if (Math.abs(px - hx) <= HIT && Math.abs(py - hy) <= HIT) {
                dragRef.current = { type: 'resize', handle: id, startX: e.clientX, startY: e.clientY, box: { ...cropBox } };
                setCursor(CURSOR_MAP[id]);
                return;
            }
        }

        // Inside crop box → move
        if (px >= cropBox.x && px <= cropBox.x + cropBox.w &&
            py >= cropBox.y && py <= cropBox.y + cropBox.h) {
            dragRef.current = { type: 'move', startX: e.clientX, startY: e.clientY, box: { ...cropBox } };
            setCursor('move');
        }
    };

    const onPointerMove = (e) => {
        const d = dragRef.current;

        // Update cursor even while not dragging
        if (!d && cropBox) {
            const { x: px, y: py } = stageXY(e);
            for (const { id, fx, fy } of HANDLES) {
                const hx = cropBox.x + fx * cropBox.w;
                const hy = cropBox.y + fy * cropBox.h;
                if (Math.abs(px - hx) <= HIT && Math.abs(py - hy) <= HIT) {
                    setCursor(CURSOR_MAP[id]); return;
                }
            }
            if (px >= cropBox.x && px <= cropBox.x + cropBox.w &&
                py >= cropBox.y && py <= cropBox.y + cropBox.h) {
                setCursor('move'); return;
            }
            setCursor('default');
            return;
        }

        if (!d) return;
        const dx = e.clientX - d.startX;
        const dy = e.clientY - d.startY;

        if (d.type === 'move') {
            setCropBox(constrain({ ...d.box, x: d.box.x + dx, y: d.box.y + dy }, displayRect));
        } else {
            // resize
            let { x, y, w, h } = { ...d.box };
            const hid = d.handle;
            if (hid.includes('n')) { y += dy; h -= dy; }
            if (hid.includes('s')) { h += dy; }
            if (hid.includes('w')) { x += dx; w -= dx; }
            if (hid.includes('e')) { w += dx; }
            // prevent inverting
            if (w < MIN_DIM) { if (hid.includes('w')) x = d.box.x + d.box.w - MIN_DIM; w = MIN_DIM; }
            if (h < MIN_DIM) { if (hid.includes('n')) y = d.box.y + d.box.h - MIN_DIM; h = MIN_DIM; }
            setCropBox(constrain({ x, y, w, h }, displayRect));
        }
    };

    const onPointerUp = (e) => {
        dragRef.current = null;
        setCursor('default');
        stageRef.current?.releasePointerCapture(e.pointerId);
    };

    // ── Apply / Reset ───────────────────────────────────────────────────────
    const handleApply = async () => {
        if (applying || isApplying) return;
        setApplying(true);
        try {
            await onApply(getCropInfo());
            onCancel();
        } catch (err) {
            console.error('Crop failed', err);
        } finally {
            setApplying(false);
        }
    };

    const handleReset = () => {
        if (displayRect) {
            setCropBox({ x: displayRect.x, y: displayRect.y, w: displayRect.w, h: displayRect.h });
        }
    };

    const busy     = applying || isApplying;
    const cropInfo = getCropInfo();
    const cb       = cropBox;

    // ── Render ──────────────────────────────────────────────────────────────
    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Inter, sans-serif',
        }}>
            {/* Backdrop */}
            <div
                style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.78)', backdropFilter: 'blur(8px)' }}
                onClick={onCancel}
            />

            {/* Panel */}
            <div style={{
                position: 'relative', zIndex: 1, background: '#fff',
                borderRadius: '24px', width: 'min(94vw, 720px)',
                padding: '28px 28px 24px',
                boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
            }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                    <div>
                        <span style={{
                            fontSize: '0.63rem', fontWeight: 800, letterSpacing: '0.16em',
                            color: '#06b6d4', textTransform: 'uppercase', display: 'block', marginBottom: '6px',
                        }}>Cover Crop</span>
                        <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.25 }}>
                            Adjust your image before publishing
                        </h3>
                    </div>
                    <button
                        onClick={onCancel}
                        aria-label="Close"
                        style={{
                            background: '#f1f5f9', border: 'none', borderRadius: '50%',
                            width: 40, height: 40,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            cursor: 'pointer', fontSize: '1.25rem', color: '#64748b',
                            flexShrink: 0, marginLeft: 14,
                        }}
                    >×</button>
                </div>

                {/* ── Crop Stage ── */}
                <div
                    ref={stageRef}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUp}
                    onPointerCancel={onPointerUp}
                    style={{
                        width: '100%',
                        aspectRatio: '16 / 9',
                        borderRadius: 16,
                        overflow: 'hidden',
                        position: 'relative',
                        background: '#0a0f1a',
                        cursor,
                        touchAction: 'none',
                        userSelect: 'none',
                    }}
                >
                    {/* Full image – object-fit: contain (letterboxed) */}
                    {imageSrc && (
                        <img
                            src={imageSrc}
                            alt="Crop source"
                            draggable={false}
                            onLoad={e => setImgNatural({
                                w: e.currentTarget.naturalWidth,
                                h: e.currentTarget.naturalHeight,
                            })}
                            style={{
                                position: 'absolute', inset: 0,
                                width: '100%', height: '100%',
                                objectFit: 'contain',
                                pointerEvents: 'none',
                                userSelect: 'none',
                            }}
                        />
                    )}

                    {/* ── Crop overlay ── */}
                    {cb && (
                        <>
                            {/* 4 dark shadow regions outside crop box */}
                            <div style={{ position: 'absolute', inset: `0 0 auto 0`,    height: cb.y,             background: 'rgba(0,0,0,0.52)', pointerEvents: 'none' }} />
                            <div style={{ position: 'absolute', inset: `auto 0 0 0`,    top: cb.y + cb.h,         background: 'rgba(0,0,0,0.52)', pointerEvents: 'none' }} />
                            <div style={{ position: 'absolute', top: cb.y, left: 0,     width: cb.x, height: cb.h, background: 'rgba(0,0,0,0.52)', pointerEvents: 'none' }} />
                            <div style={{ position: 'absolute', top: cb.y, left: cb.x + cb.w, right: 0, height: cb.h, background: 'rgba(0,0,0,0.52)', pointerEvents: 'none' }} />

                            {/* Crop box border */}
                            <div style={{
                                position: 'absolute',
                                left: cb.x, top: cb.y, width: cb.w, height: cb.h,
                                border: '2px solid #06b6d4',
                                boxSizing: 'border-box',
                                pointerEvents: 'none',
                            }}>
                                {/* Rule-of-thirds grid */}
                                <div style={{
                                    position: 'absolute', inset: 0, pointerEvents: 'none',
                                    backgroundImage:
                                        'linear-gradient(rgba(6,182,212,0.35) 1px, transparent 1px),' +
                                        'linear-gradient(90deg, rgba(6,182,212,0.35) 1px, transparent 1px)',
                                    backgroundSize: '33.33% 33.33%',
                                }} />
                            </div>

                            {/* Dimension badge */}
                            <span style={{
                                position: 'absolute',
                                left: cb.x + 7, top: cb.y + 7,
                                background: 'rgba(0,0,0,0.68)',
                                color: '#fff',
                                fontSize: '0.68rem', fontWeight: 700,
                                padding: '2px 8px', borderRadius: 4,
                                pointerEvents: 'none', zIndex: 10,
                                letterSpacing: '0.03em',
                            }}>
                                {cropInfo.w} × {cropInfo.h}
                            </span>

                            {/* 8 resize handles */}
                            {HANDLES.map(({ id, fx, fy }) => (
                                <div
                                    key={id}
                                    style={{
                                        position: 'absolute',
                                        left:   cb.x + fx * cb.w - HS / 2,
                                        top:    cb.y + fy * cb.h - HS / 2,
                                        width:  HS,
                                        height: HS,
                                        background: '#06b6d4',
                                        border: '2px solid #ffffff',
                                        borderRadius: 2,
                                        cursor: CURSOR_MAP[id],
                                        zIndex: 11,
                                        boxShadow: '0 0 0 1px rgba(0,0,0,0.25)',
                                        pointerEvents: 'none', // handled by stage's onPointerDown
                                    }}
                                />
                            ))}
                        </>
                    )}
                </div>

                {/* Info bar */}
                <div style={{
                    marginTop: 14, padding: '10px 16px',
                    background: '#f8fafc', borderRadius: 10,
                    fontSize: '0.78rem', color: '#64748b',
                    border: '1px solid #e2e8f0',
                }}>
                    {imgNatural.w > 0
                        ? `Crop: ${cropInfo.w} × ${cropInfo.h} px | Position: (${cropInfo.x}, ${cropInfo.y})`
                        : 'Drag handles to resize · Drag inside the box to move'}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10, marginTop: 20 }}>
                    {onSkip && (
                        <button onClick={onSkip} style={{
                            padding: '9px 16px', borderRadius: 10, border: '1.5px solid #e2e8f0',
                            background: 'transparent', cursor: 'pointer', fontWeight: 600,
                            fontSize: '0.82rem', color: '#94a3b8', fontFamily: 'Inter, sans-serif',
                        }}>Skip</button>
                    )}
                    <button onClick={handleReset} style={{
                        padding: '9px 20px', borderRadius: 10, border: '1.5px solid #e2e8f0',
                        background: 'transparent', cursor: 'pointer', fontWeight: 600,
                        fontSize: '0.82rem', color: '#475569', fontFamily: 'Inter, sans-serif',
                        display: 'flex', alignItems: 'center', gap: 6,
                    }}>↺ Reset</button>
                    <button onClick={onCancel} style={{
                        padding: '9px 20px', borderRadius: 10, border: '1.5px solid #fee2e2',
                        background: '#fef2f2', cursor: 'pointer', fontWeight: 600,
                        fontSize: '0.82rem', color: '#ef4444', fontFamily: 'Inter, sans-serif',
                    }}>Cancel</button>
                    <button
                        onClick={handleApply}
                        disabled={busy}
                        style={{
                            padding: '9px 28px', borderRadius: 10, border: 'none',
                            background: busy
                                ? '#94a3b8'
                                : 'linear-gradient(135deg, #06b6d4 0%, #a855f7 100%)',
                            color: '#fff', cursor: busy ? 'not-allowed' : 'pointer',
                            fontWeight: 700, fontSize: '0.82rem',
                            fontFamily: 'Inter, sans-serif',
                            boxShadow: busy ? 'none' : '0 4px 16px rgba(6,182,212,0.4)',
                        }}
                    >
                        {busy ? 'Applying…' : 'Apply Crop'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoverCropModal;
