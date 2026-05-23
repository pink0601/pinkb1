// 第二幕 - 雨滴Canvas铺满全屏，方向从右上向左下
let scene2Initialized = false;
let clearPercent = 0;
let isScene2Cleared = false;
let lastX = 0, lastY = 0, isDrawing = false;
let fogCanvas, fogCtx, waterCanvas, waterCtx;
let waterDrops = [];

function initScene2() {
    if (scene2Initialized) return;
    scene2Initialized = true;

    fogCanvas = document.getElementById('fog-canvas');
    fogCtx = fogCanvas.getContext('2d');
    waterCanvas = document.getElementById('water-drops');
    waterCtx = waterCanvas.getContext('2d');
    waterDrops = [];

    resizeCanvas();
    initTouchEvents();
    setTimeout(() => {
        document.getElementById('guide-text').classList.add('show');
        document.getElementById('fog-progress').classList.add('show');
        document.getElementById('clear-percent').classList.add('show');
    }, 500);
}

function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    fogCanvas.width = width * dpr;
    fogCanvas.height = height * dpr;
    fogCanvas.style.width = width + 'px';
    fogCanvas.style.height = height + 'px';
    fogCtx.scale(dpr, dpr);

    // 雨滴Canvas铺满全屏
    waterCanvas.width = width * dpr;
    waterCanvas.height = height * dpr;
    waterCanvas.style.width = width + 'px';
    waterCanvas.style.height = height + 'px';
    waterCtx.scale(dpr, dpr);

    drawInitialFog();
}

function drawInitialFog() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    const gradient = fogCtx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(180, 185, 195, 0.92)');
    gradient.addColorStop(0.3, 'rgba(160, 165, 175, 0.95)');
    gradient.addColorStop(0.6, 'rgba(140, 145, 155, 0.97)');
    gradient.addColorStop(1, 'rgba(120, 125, 135, 0.98)');

    fogCtx.fillStyle = gradient;
    fogCtx.fillRect(0, 0, width, height);

    const imageData = fogCtx.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
        const noise = (Math.random() - 0.5) * 20;
        data[i] = Math.min(255, Math.max(0, data[i] + noise));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    fogCtx.putImageData(imageData, 0, 0);
    startWaterDrops();
}

function startWaterDrops() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 增加雨滴数量，确保全屏铺满
    const dropCount = 180;

    for (let i = 0; i < dropCount; i++) {
        // 扩大初始分布范围，包括屏幕上方和右侧外部区域
        waterDrops.push({
            x: Math.random() * (width + 200) - 100, // 扩展到屏幕左右外
            y: Math.random() * (height + 300) - 300, // 扩展到屏幕上方外
            length: 12 + Math.random() * 28, // 随机长度 12-40px
            speed: 6 + Math.random() * 10, // 随机速度 6-16px/frame
            opacity: 0.2 + Math.random() * 0.35, // 随机透明度 0.2-0.55
            width: 1 + Math.random() * 1.5 // 随机粗细 1-2.5px
        });
    }
    animateWaterDrops();
}

function animateWaterDrops() {
    if (currentScene !== 2) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    waterCtx.clearRect(0, 0, width, height);

    waterDrops.forEach(drop => {
        waterCtx.beginPath();
        waterCtx.strokeStyle = `rgba(200, 210, 230, ${drop.opacity})`;
        waterCtx.lineWidth = drop.width || 1.5;
        waterCtx.lineCap = 'round';

        // 从右上向左下：Y向下 + X向左（负值）
        // 角度约为22度 (tan(22°) ≈ 0.4)
        const angleX = -0.45; // 向左偏移系数
        const angleY = 1;     // 向下

        waterCtx.moveTo(drop.x, drop.y);
        waterCtx.lineTo(drop.x + drop.length * angleX, drop.y + drop.length * angleY);
        waterCtx.stroke();

        // 更新位置
        drop.y += drop.speed;
        drop.x += drop.speed * angleX;

        // 边界检查：无缝循环
        // 当雨滴完全移出屏幕底部或左侧时，从顶部或右侧重新出现
        const buffer = drop.length * 2;

        if (drop.y > height + buffer) {
            // 从顶部重新出现，随机X位置（包括屏幕右侧外部）
            drop.y = -buffer - Math.random() * 100;
            drop.x = Math.random() * (width + 150);
        }

        if (drop.x < -buffer - 50) {
            // 从右侧重新出现
            drop.x = width + buffer + Math.random() * 100;
            drop.y = Math.random() * (height + 100) - 50;
        }
    });

    requestAnimationFrame(animateWaterDrops);
}

function initTouchEvents() {
    function getPosition(e) {
        const rect = fogCanvas.getBoundingClientRect();
        if (e.touches) {
            return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
        }
        return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }

    function eraseFog(x, y) {
        const brushSize = 50;
        fogCtx.globalCompositeOperation = 'destination-out';
        const gradient = fogCtx.createRadialGradient(x, y, 0, x, y, brushSize);
        gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
        gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        fogCtx.fillStyle = gradient;
        fogCtx.beginPath();
        fogCtx.arc(x, y, brushSize, 0, Math.PI * 2);
        fogCtx.fill();

        if (lastX && lastY) {
            const dist = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2));
            const steps = Math.ceil(dist / 10);
            for (let i = 0; i < steps; i++) {
                const t = i / steps;
                fogCtx.beginPath();
                fogCtx.arc(lastX + (x - lastX) * t, lastY + (y - lastY) * t, brushSize * 0.8, 0, Math.PI * 2);
                fogCtx.fill();
            }
        }

        fogCtx.globalCompositeOperation = 'source-over';
        lastX = x; lastY = y;
        updateClearProgress();
    }

    fogCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); isDrawing = true; const pos = getPosition(e); lastX = pos.x; lastY = pos.y; eraseFog(pos.x, pos.y); }, {passive: false});
    fogCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); if (!isDrawing) return; const pos = getPosition(e); eraseFog(pos.x, pos.y); }, {passive: false});
    fogCanvas.addEventListener('touchend', () => { isDrawing = false; lastX = 0; lastY = 0; });
    fogCanvas.addEventListener('mousedown', (e) => { isDrawing = true; const pos = getPosition(e); lastX = pos.x; lastY = pos.y; eraseFog(pos.x, pos.y); });
    fogCanvas.addEventListener('mousemove', (e) => { if (!isDrawing) return; const pos = getPosition(e); eraseFog(pos.x, pos.y); });
    fogCanvas.addEventListener('mouseup', () => { isDrawing = false; lastX = 0; lastY = 0; });
    fogCanvas.addEventListener('mouseleave', () => { isDrawing = false; lastX = 0; lastY = 0; });
}

function updateClearProgress() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const imageData = fogCtx.getImageData(0, 0, width, height);
    const data = imageData.data;
    let transparentPixels = 0;
    for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 128) transparentPixels++;
    }
    clearPercent = Math.round((transparentPixels / (width * height)) * 100);
    document.getElementById('fog-progress-bar').style.width = clearPercent + '%';
    document.getElementById('clear-percent').textContent = '已探明: ' + clearPercent + '%';

    if (clearPercent >= 80 && !isScene2Cleared) {
        triggerScene2Clear();
    }
}

function triggerScene2Clear() {
    isScene2Cleared = true;
    fogCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    document.getElementById('dark-overlay').classList.add('cleared');
    document.getElementById('bg-image-container').classList.add('visible');
    document.getElementById('fog-progress').style.opacity = '0';
    document.getElementById('clear-percent').style.opacity = '0';
    document.getElementById('guide-text').classList.remove('show');
    setTimeout(() => showScene2Text(), 500);
}

function showScene2Text() {
    const textContent = document.getElementById('text-content');
    textContent.classList.add('visible');
    const lines = textContent.querySelectorAll('.text-line');
    let totalDelay = 0;
    lines.forEach((line) => {
        const delay = parseInt(line.dataset.delay) || 0;
        totalDelay = Math.max(totalDelay, delay + 800);
        setTimeout(() => line.classList.add('show'), delay);
    });
    setTimeout(() => document.getElementById('dialogue-box').classList.add('show'), totalDelay + 500);
    setTimeout(() => {
        document.getElementById('swipe-2').classList.add('show');
        swipeEnabled = true;
    }, totalDelay + 3000);
}
