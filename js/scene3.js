// 第三幕 - 雨滴Canvas铺满全屏，从右上向左下（与第二幕一致）
let scene3Initialized = false;
let isStable3 = false;
let currentLevel3 = 3;
let waterCanvas3, waterCtx3;
let waterDrops3 = [];

function initScene3() {
    if (scene3Initialized) return;
    scene3Initialized = true;

    initWaterDropsScene3();
    updateScene3Level(3);
    // 文字等手机放稳后再显示，不在初始化时显示

    if (window.DeviceOrientationEvent) {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            document.addEventListener('click', requestGyroPermission3, { once: true });
        } else {
            window.addEventListener('deviceorientation', handleOrientation3);
        }
    }
}

function initWaterDropsScene3() {
    waterCanvas3 = document.getElementById('water-drops-scene3');
    waterCtx3 = waterCanvas3.getContext('2d');
    waterDrops3 = [];

    resizeCanvasScene3();
    startWaterDropsScene3();
}

function resizeCanvasScene3() {
    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    waterCanvas3.width = width * dpr;
    waterCanvas3.height = height * dpr;
    waterCanvas3.style.width = width + 'px';
    waterCanvas3.style.height = height + 'px';
    waterCtx3.scale(dpr, dpr);
}

function startWaterDropsScene3() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 雨滴数量与第二幕一致：180个
    const dropCount = 180;

    for (let i = 0; i < dropCount; i++) {
        // 扩大初始分布范围，包括屏幕上方和右侧外部区域
        waterDrops3.push({
            x: Math.random() * (width + 200) - 100,
            y: Math.random() * (height + 300) - 300,
            length: 12 + Math.random() * 28, // 随机长度 12-40px
            speed: 6 + Math.random() * 10, // 随机速度 6-16px/frame
            opacity: 0.2 + Math.random() * 0.35, // 随机透明度 0.2-0.55
            width: 1 + Math.random() * 1.5 // 随机粗细 1-2.5px
        });
    }
    animateWaterDropsScene3();
}

function animateWaterDropsScene3() {
    if (currentScene !== 3) return;

    const width = window.innerWidth;
    const height = window.innerHeight;

    waterCtx3.clearRect(0, 0, width, height);

    waterDrops3.forEach(drop => {
        waterCtx3.beginPath();
        waterCtx3.strokeStyle = `rgba(200, 210, 230, ${drop.opacity})`;
        waterCtx3.lineWidth = drop.width || 1.5;
        waterCtx3.lineCap = 'round';

        // 从右上向左下：Y向下 + X向左（负值）
        // 角度约为22度 (tan(22°) ≈ 0.4)
        const angleX = -0.45; // 向左偏移系数
        const angleY = 1;     // 向下

        waterCtx3.moveTo(drop.x, drop.y);
        waterCtx3.lineTo(drop.x + drop.length * angleX, drop.y + drop.length * angleY);
        waterCtx3.stroke();

        // 更新位置
        drop.y += drop.speed;
        drop.x += drop.speed * angleX;

        // 边界检查：无缝循环
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

    requestAnimationFrame(animateWaterDropsScene3);
}

function setRainIntensity3(level) {
    // 根据级别调整雨滴参数
    const config = {
        3: { // 剧烈 - 快速、密集、明显
            speedMult: 1.5,
            opacityMult: 1.3
        },
        2: { // 中等
            speedMult: 1.0,
            opacityMult: 1.0
        },
        1: { // 轻微
            speedMult: 0.6,
            opacityMult: 0.7
        },
        0: { // 静止
            speedMult: 0.2,
            opacityMult: 0.3
        }
    };

    const cfg = config[level];

    waterDrops3.forEach(drop => {
        // 恢复基础速度
        const baseSpeed = 6 + Math.random() * 10;
        drop.speed = baseSpeed * cfg.speedMult;
        drop.opacity = (0.2 + Math.random() * 0.35) * cfg.opacityMult;
    });
}

function requestGyroPermission3() {
    DeviceOrientationEvent.requestPermission()
        .then(response => {
            if (response === 'granted') {
                window.addEventListener('deviceorientation', handleOrientation3);
            }
        })
        .catch(console.error);
}

function handleOrientation3(event) {
    if (isStable3) return;
    const beta = Math.abs(event.beta || 0);
    const gamma = Math.abs(event.gamma || 0);
    const tilt = Math.sqrt(beta * beta + gamma * gamma);
    let newLevel;
    if (tilt < 10) newLevel = 0;
    else if (tilt < 25) newLevel = 1;
    else if (tilt < 45) newLevel = 2;
    else newLevel = 3;

    if (newLevel !== currentLevel3) {
        currentLevel3 = newLevel;
        updateScene3Level(newLevel);
        setRainIntensity3(newLevel);
    }
}

function updateScene3Level(level) {
    const container = document.getElementById('scene3');

    container.classList.remove('shake', 'shake-moderate', 'shake-light');

    switch(level) {
        case 3:
            container.classList.add('shake');
            break;
        case 2:
            container.classList.add('shake-moderate');
            break;
        case 1:
            container.classList.add('shake-light');
            break;
        case 0:
            document.getElementById('hint-text-3').style.display = 'none';
            if (!isStable3) stabilizeScene3();
            break;
    }
}

function stabilizeScene3() {
    isStable3 = true;
    // 手机放稳后显示文字
    document.getElementById('text-content-3').classList.add('show');
    setTimeout(() => document.getElementById('dialogue-quote-3').classList.add('show'), 800);
    setTimeout(() => {
        document.getElementById('swipe-3').classList.add('show');
        swipeEnabled = true;
    }, 2500);

    // 交互完成后播放声音，同时背景音乐逐渐变小
    playSound3();
    fadeBGMDown(3000, 0.1);

    // 标记第三幕完成
    completeScene(3);
}

function playSound3() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        [392, 493.88, 587.33].forEach((freq, index) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            gain.gain.setValueAtTime(0, audioCtx.currentTime);
            gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.5);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2);
            osc.start(audioCtx.currentTime);
            osc.stop(audioCtx.currentTime + 2);
        });
    } catch (e) {}
}
