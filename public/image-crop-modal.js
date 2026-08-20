(function () {
    const MIN_CROP_SIZE = 20;
    const DEFAULT_IMAGE_SRC = './Student.webp';

    const modal = document.getElementById('cropModal');
    const openButton = document.getElementById('openCropModal');
    const closeButton = document.getElementById('closeCropModal');
    const cancelButton = document.getElementById('cancelCrop');
    const resetButton = document.getElementById('resetCrop');
    const applyButton = document.getElementById('applyCrop');
    const viewport = document.getElementById('cropViewport');
    const image = document.getElementById('cropImage');
    const cropBox = document.getElementById('cropBox');
    const sizeBadge = document.getElementById('sizeBadge');
    const hint = document.getElementById('hintText');
    const infoBox = document.getElementById('cropInfo');
    const backdrop = modal.querySelector('.crop-modal__backdrop');

    const state = {
        mode: 'idle',
        cropRect: null,
        dragStart: null,
        moveOffset: null,
        resizeSnapshot: null,
        resizeStart: null,
        resizeHandle: null,
        hasDrawn: false,
        viewport: { width: 0, height: 300 },
        isOpen: true,
    };

    let previousBodyOverflow = '';

    function clamp(value, lo, hi) {
        if (hi < lo) return lo;
        return Math.min(hi, Math.max(lo, value));
    }

    function getXY(e) {
        const rect = viewport.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }

    function normalizeRect(x1, y1, x2, y2) {
        const width = state.viewport.width;
        const height = state.viewport.height;
        const left = clamp(Math.min(x1, x2), 0, width);
        const top = clamp(Math.min(y1, y2), 0, height);
        const right = clamp(Math.max(x1, x2), 0, width);
        const bottom = clamp(Math.max(y1, y2), 0, height);

        return {
            x: left,
            y: top,
            w: Math.max(0, right - left),
            h: Math.max(0, bottom - top),
        };
    }

    function clampRect(rect) {
        const width = state.viewport.width;
        const height = state.viewport.height;
        const w = clamp(rect.w, 0, width);
        const h = clamp(rect.h, 0, height);

        return {
            x: clamp(rect.x, 0, Math.max(0, width - w)),
            y: clamp(rect.y, 0, Math.max(0, height - h)),
            w,
            h,
        };
    }

    function measureViewport() {
        const rect = viewport.getBoundingClientRect();
        state.viewport = {
            width: Math.round(rect.width),
            height: Math.round(rect.height),
        };
    }

    function setInfo(message, variant = 'normal') {
        infoBox.classList.remove('is-error', 'is-success');
        if (variant === 'error') infoBox.classList.add('is-error');
        if (variant === 'success') infoBox.classList.add('is-success');
        infoBox.value = message;
    }

    function applyBox() {
        if (!state.cropRect || state.cropRect.w <= 0 || state.cropRect.h <= 0) {
            cropBox.hidden = true;
            sizeBadge.hidden = true;
            hint.hidden = state.hasDrawn;
            setInfo('Crop: 0 × 0 px | Position: (0, 0)');
            return;
        }

        state.cropRect = clampRect(state.cropRect);

        cropBox.hidden = false;
        cropBox.style.left = state.cropRect.x + 'px';
        cropBox.style.top = state.cropRect.y + 'px';
        cropBox.style.width = state.cropRect.w + 'px';
        cropBox.style.height = state.cropRect.h + 'px';

        sizeBadge.hidden = false;
        sizeBadge.textContent = state.cropRect.w + ' × ' + state.cropRect.h;

        hint.hidden = true;
        setInfo(
            'Crop: ' + state.cropRect.w + ' × ' + state.cropRect.h + ' px | Position: (' + state.cropRect.x + ', ' + state.cropRect.y + ')',
        );
    }

    function resetCrop() {
        state.mode = 'idle';
        state.cropRect = null;
        state.dragStart = null;
        state.moveOffset = null;
        state.resizeSnapshot = null;
        state.resizeStart = null;
        state.resizeHandle = null;
        state.hasDrawn = false;
        applyBox();
    }

    function openCropModal(imageSrc) {
        if (imageSrc) {
            image.src = imageSrc;
        }

        state.isOpen = true;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        previousBodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        measureViewport();
        resetCrop();
        window.requestAnimationFrame(() => closeButton.focus());
    }

    function closeCropModal() {
        state.isOpen = false;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = previousBodyOverflow;
        resetCrop();
    }

    function startDrawing(e) {
        e.preventDefault();
        state.mode = 'drawing';
        state.dragStart = getXY(e);
        state.cropRect = null;
        applyBox();
    }

    function startMoving(e) {
        if (!state.cropRect) return;
        e.preventDefault();
        const point = getXY(e);
        state.mode = 'moving';
        state.moveOffset = {
            x: point.x - state.cropRect.x,
            y: point.y - state.cropRect.y,
        };
    }

    function startResizing(e, handle) {
        if (!state.cropRect) return;
        e.preventDefault();
        state.mode = 'resizing';
        state.resizeHandle = handle;
        state.resizeSnapshot = { ...state.cropRect };
        state.resizeStart = getXY(e);
    }

    function resizeFromHandle(snapshot, handle, currentPoint) {
        const dx = currentPoint.x - state.resizeStart.x;
        const dy = currentPoint.y - state.resizeStart.y;
        let x = snapshot.x;
        let y = snapshot.y;
        let w = snapshot.w;
        let h = snapshot.h;

        if (handle.includes('e')) {
            w = clamp(snapshot.w + dx, MIN_CROP_SIZE, state.viewport.width - snapshot.x);
        }

        if (handle.includes('s')) {
            h = clamp(snapshot.h + dy, MIN_CROP_SIZE, state.viewport.height - snapshot.y);
        }

        if (handle.includes('w')) {
            const newW = clamp(snapshot.w - dx, MIN_CROP_SIZE, snapshot.x + snapshot.w);
            x = snapshot.x + snapshot.w - newW;
            w = newW;
        }

        if (handle.includes('n')) {
            const newH = clamp(snapshot.h - dy, MIN_CROP_SIZE, snapshot.y + snapshot.h);
            y = snapshot.y + snapshot.h - newH;
            h = newH;
        }

        return clampRect({ x, y, w, h });
    }

    function onViewportMouseDown(e) {
        if (!state.isOpen || e.button !== 0) return;
        if (e.target.closest('.crop-selection')) return;
        startDrawing(e);
    }

    function onCropBoxMouseDown(e) {
        if (!state.isOpen || e.button !== 0) return;
        e.stopPropagation();

        const handle = e.target.closest('[data-handle]')?.dataset?.handle;
        if (handle) {
            startResizing(e, handle);
            return;
        }

        startMoving(e);
    }

    function onDocumentMouseMove(e) {
        if (state.mode === 'idle' || !state.isOpen) return;

        const point = getXY(e);

        if (state.mode === 'drawing' && state.dragStart) {
            state.cropRect = normalizeRect(state.dragStart.x, state.dragStart.y, point.x, point.y);
            if (state.cropRect.w > 0 || state.cropRect.h > 0) {
                state.hasDrawn = true;
            }
            applyBox();
            return;
        }

        if (state.mode === 'moving' && state.cropRect && state.moveOffset) {
            state.cropRect = clampRect({
                x: point.x - state.moveOffset.x,
                y: point.y - state.moveOffset.y,
                w: state.cropRect.w,
                h: state.cropRect.h,
            });
            applyBox();
            return;
        }

        if (state.mode === 'resizing' && state.resizeSnapshot && state.resizeHandle && state.resizeStart) {
            state.cropRect = resizeFromHandle(state.resizeSnapshot, state.resizeHandle, point);
            applyBox();
        }
    }

    function onDocumentMouseUp() {
        if (!state.isOpen) return;
        state.mode = 'idle';
        state.dragStart = null;
        state.moveOffset = null;
        state.resizeSnapshot = null;
        state.resizeStart = null;
        state.resizeHandle = null;
    }

    function resetAndClose() {
        resetCrop();
        closeCropModal();
    }

    function applyCrop() {
        if (!state.cropRect || state.cropRect.w < 10 || state.cropRect.h < 10) {
            setInfo('Crop must be at least 10 × 10 px.', 'error');
            return;
        }

        setInfo(
            '✓ Crop applied: ' +
                state.cropRect.w +
                ' × ' +
                state.cropRect.h +
                ' at (' +
                state.cropRect.x +
                ', ' +
                state.cropRect.y +
                ')',
            'success',
        );
    }

    openButton.addEventListener('click', function () {
        openCropModal(image.src || DEFAULT_IMAGE_SRC);
    });

    closeButton.addEventListener('click', resetAndClose);
    cancelButton.addEventListener('click', resetAndClose);
    resetButton.addEventListener('click', resetCrop);
    applyButton.addEventListener('click', applyCrop);
    backdrop.addEventListener('click', resetAndClose);

    viewport.addEventListener('mousedown', onViewportMouseDown);
    cropBox.addEventListener('mousedown', onCropBoxMouseDown);
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mouseup', onDocumentMouseUp);
    window.addEventListener('resize', function () {
        measureViewport();
        if (state.cropRect) {
            state.cropRect = clampRect(state.cropRect);
        }
        applyBox();
    });

    window.openCropModal = openCropModal;
    window.closeCropModal = resetAndClose;
    window.resetCrop = resetCrop;
    window.applyCrop = applyCrop;
    window.applyBox = applyBox;
    window.clamp = clamp;
    window.getXY = getXY;
    window.normalizeRect = normalizeRect;

    measureViewport();
    openCropModal(new URLSearchParams(window.location.search).get('image') || DEFAULT_IMAGE_SRC);
})();
