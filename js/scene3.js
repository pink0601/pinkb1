// 第三幕 - 雨丝铺满全屏，从右上向左下，随陀螺仪变化
let scene3Initialized = false;
let isStable3 = false;
let currentLevel3 = 3;

function initScene3() {
    if (scene3Initialized) return;
    scene3Initialized = true;
    createRainDrops();
    updateScene3Level(3);
    setRainIntensity3(3);
    setTimeout(() => document.getElementById('text-content-3').classList.add('show'), 1500);
    
    if (window.DeviceOrientationEvent) {
        if (typeof DeviceOrientationEvent.requestPermission === 'function') {
            document.addEventListener('click', requestGyroPermission3, { once: true });
        } else {
            window.addEventListener('deviceorientation', handleOrientation3);
        }
    }
}

function createRainDrops() {
    const rainContainer = document.getElementById('rain-container');
    rainContainer.innerHTML = ''; // 清空之前的雨滴
    
    // 增加雨滴数量确保全屏铺满，无空白区域
    const dropCount = 200;
    
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop';
        
        // 扩大分布范围到整个容器（包括溢出区域）
        // 使用百分比定位，覆盖更大的区域
        drop.style.left = (Math.random() * 140 - 20) + '%';
        drop.style.top = (Math.random() * 140 - 20) + '%';
        
        // 随机高度 15-45px
        const height = 15 + Math.random() * 30;
        drop.style.height = height + 'px';
        
        // 随机动画时长 0.3-1.2s（基础速度）
        drop.style.animationDuration = (0.3 + Math.random() * 0.9) + 's';
        
        // 随机延迟 -3s 到 0s，确保动画开始时就有雨滴分布
        drop.style.animationDelay = (-Math.random() * 3) + 's';
        
        // 使用CSS变量控制透明度，便于后续交互调整
        const opacity = 0.3 + Math.random() * 0.3;
        drop.style.setProperty('--rain-opacity', opacity);
        drop.style.opacity = opacity;
        
        // 随机粗细
        drop.style.width = (1 + Math.random() * 1.5) + 'px';
        
        rainContainer.appendChild(drop);
    }
}

function setRainIntensity3(level) {
    const rainDrops = document.querySelectorAll('#rain-container .rain-drop');
    
    // 根据级别设置不同的雨滴参数
    const config = {
        3: { // 剧烈 - 快速、密集、明显
            durationMin: 0.15, durationMax: 0.35,
            opacityMin: 0.55, opacityMax: 0.85,
            widthMin: 1.8, widthMax: 2.5,
            heightMin: 25, heightMax: 50
        },
        2: { // 中等 - 适中速度
            durationMin: 0.5, durationMax: 0.9,
            opacityMin: 0.4, opacityMax: 0.6,
            widthMin: 1.5, widthMax: 2,
            heightMin: 18, heightMax: 38
        },
        1: { // 轻微 - 缓慢、稀疏、淡
            durationMin: 1.0, durationMax: 1.8,
            opacityMin: 0.2, opacityMax: 0.35,
            widthMin: 1, widthMax: 1.5,
            heightMin: 12, heightMax: 25
        },
        0: { // 静止 - 极慢、极淡、几乎不可见
            durationMin: 3.0, durationMax: 5.0,
            opacityMin: 0.03, opacityMax: 0.1,
            widthMin: 0.5, widthMax: 1,
            heightMin: 8, heightMax: 15
        }
    };
    
    const cfg = config[level];
    
    rainDrops.forEach((drop, index) => {
        // 使用随机分布，但保持平滑过渡
        const randomFactor = (index % 10) / 10; // 0-1之间的值
        
        // 动画时长
        const duration = cfg.durationMin + Math.random() * (cfg.durationMax - cfg.durationMin);
        drop.style.animationDuration = duration + 's';
        
        // 透明度 - 使用CSS变量和style同时设置
        const opacity = cfg.opacityMin + Math.random() * (cfg.opacityMax - cfg.opacityMin);
        drop.style.setProperty('--rain-opacity', opacity);
        drop.style.opacity = opacity;
        
        // 粗细
        const width = cfg.widthMin + Math.random() * (cfg.widthMax - cfg.widthMin);
        drop.style.width = width + 'px';
        
        // 长度
        const height = cfg.heightMin + Math.random() * (cfg.heightMax - cfg.heightMin);
        drop.style.height = height + 'px';
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
    const lanternGlow = document.getElementById('lantern-glow-3');
    const bg2 = document.getElementById('bg-3-2');
    
    container.classList.remove('shake', 'shake-moderate', 'shake-light');
    
    switch(level) {
        case 3:
            container.classList.add('shake');
            lanternGlow.style.opacity = '0.25';
            lanternGlow.style.filter = 'blur(6px)';
            break;
        case 2:
            container.classList.add('shake-moderate');
            lanternGlow.style.opacity = '0.4';
            lanternGlow.style.filter = 'blur(4px)';
            break;
        case 1:
            container.classList.add('shake-light');
            lanternGlow.style.opacity = '0.6';
            lanternGlow.style.filter = 'blur(2px)';
            break;
        case 0:
            lanternGlow.style.opacity = '1';
            lanternGlow.style.filter = 'blur(0)';
            bg2.style.opacity = '1';
            document.getElementById('hint-text-3').style.display = 'none';
            if (!isStable3) stabilizeScene3();
            break;
    }
}

function stabilizeScene3() {
    isStable3 = true;
    setTimeout(() => document.getElementById('dialogue-quote-3').classList.add('show'), 800);
    setTimeout(() => {
        document.getElementById('swipe-3').classList.add('show');
        swipeEnabled = true;
    }, 2500);
    playSound3();
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
