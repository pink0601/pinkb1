// 第六幕：陀螺仪寻路（纯画面光影层次，无图形元素）
let scene6Initialized = false;
let gyroActive = false;
let currentDirection = 'center'; // 'left', 'right', 'center'
let isLocked = false; // 右侧错误锁定状态
let pathCompleted = false;
let baseGamma = 0;

function initScene6() {
    if (scene6Initialized) return;
    scene6Initialized = true;

    // 延迟显示引导
    setTimeout(() => {
        document.getElementById('gyro-guide').classList.add('show');
        document.getElementById('gyro-status').classList.add('show');
    }, 800);

    // 请求陀螺仪权限
    requestGyroPermission();
}

// 请求陀螺仪权限
function requestGyroPermission() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    startGyroListener();
                } else {
                    showGyroError('需要陀螺仪权限才能继续探寻');
                }
            })
            .catch(() => showGyroError('陀螺仪权限请求失败'));
    } else {
        startGyroListener();
    }
}

// 启动陀螺仪监听
function startGyroListener() {
    gyroActive = true;

    // 校准基准角度
    window.addEventListener('deviceorientation', calibrateOrientation, { once: true });

    // 持续监听
    window.addEventListener('deviceorientation', handleOrientation);

    // 隐藏引导，显示状态
    setTimeout(() => {
        document.getElementById('gyro-guide').classList.remove('show');
        updateStatusText('左右倾斜手机探寻前路');
    }, 2500);
}

// 校准初始方向
function calibrateOrientation(event) {
    baseGamma = event.gamma || 0;
}

// 处理方向变化
function handleOrientation(event) {
    if (!gyroActive || pathCompleted) return;

    const gamma = event.gamma || 0;
    const relativeGamma = gamma - baseGamma;

    // 判定阈值
    const LEFT_THRESHOLD = -12;   // 向左倾斜12度触发左侧
    const RIGHT_THRESHOLD = 12;   // 向右倾斜12度触发右侧
    const CENTER_MIN = -8;        // 中间区域下限
    const CENTER_MAX = 8;         // 中间区域上限

    // 方向判定
    if (relativeGamma < LEFT_THRESHOLD) {
        // 偏向左侧 - 正确道路
        if (currentDirection !== 'left') {
            currentDirection = 'left';
            handleLeftPath();
        }
    } else if (relativeGamma > RIGHT_THRESHOLD) {
        // 偏向右侧 - 错误道路
        if (currentDirection !== 'right') {
            currentDirection = 'right';
            handleRightPath();
        }
    } else if (relativeGamma >= CENTER_MIN && relativeGamma <= CENTER_MAX) {
        // 回到中间区域
        if (currentDirection !== 'center') {
            currentDirection = 'center';
            handleCenterPath();
        }
    }
}

// 处理左侧正确道路
function handleLeftPath() {
    // 如果之前被锁定，先解锁
    if (isLocked) {
        isLocked = false;
        hideLockHint();
    }

    updateStatusText('发现道路！视野逐渐清晰');
    document.getElementById('direction-indicator').classList.remove('show');

    // 显示左侧背景 6-3.png
    document.getElementById('bg-6-left').style.opacity = '1';
    document.getElementById('bg-6-right').style.opacity = '0';

    // 解除左侧迷雾 - 呈现清晰通行视野
    document.getElementById('fog-left').classList.add('clear');

    // 如果右侧迷雾加厚过，恢复
    document.getElementById('fog-right').classList.remove('thicken');

    // 标记完成，停止监听
    pathCompleted = true;
    gyroActive = false;
    window.removeEventListener('deviceorientation', handleOrientation);

    // 延迟后进入破晓流程
    setTimeout(() => startDawnAnimation(), 1200);
}

// 处理右侧错误道路
function handleRightPath() {
    updateStatusText('此路不通，迷雾太深！');
    document.getElementById('gyro-status').classList.add('error');
    document.getElementById('direction-indicator').classList.add('show');

    // 显示右侧背景 6-2.png
    document.getElementById('bg-6-right').style.opacity = '1';
    document.getElementById('bg-6-left').style.opacity = '0';

    // 显示锁定提示
    showLockHint('请回转手机，向左探寻正确道路');

    // 叠加厚重迷雾强化昏暗视觉效果
    document.getElementById('fog-right').classList.add('thicken');

    // 中央迷雾也加重
    document.getElementById('fog-center').style.opacity = '0.9';

    // 锁定状态 - 仅监听回转角度
    isLocked = true;
}

// 处理中间位置（回退/重置）
function handleCenterPath() {
    if (isLocked) {
        updateStatusText('请继续向左倾斜，寻找正确道路');
    } else {
        updateStatusText('左右倾斜手机探寻前路');
    }

    document.getElementById('gyro-status').classList.remove('error');
    document.getElementById('direction-indicator').classList.remove('show');

    // 恢复迷雾状态
    document.getElementById('fog-right').classList.remove('thicken');
    document.getElementById('fog-center').style.opacity = '';
}

// 显示锁定提示
function showLockHint(text) {
    let lockHint = document.getElementById('lock-hint');
    if (!lockHint) {
        lockHint = document.createElement('div');
        lockHint.id = 'lock-hint';
        document.getElementById('scene6').appendChild(lockHint);
    }
    lockHint.textContent = text;
    lockHint.classList.add('show');
}

// 隐藏锁定提示
function hideLockHint() {
    const lockHint = document.getElementById('lock-hint');
    if (lockHint) lockHint.classList.remove('show');
}

// 更新状态文字
function updateStatusText(text) {
    const statusEl = document.getElementById('gyro-status');
    const textEl = statusEl.querySelector('.status-text');
    if (textEl) textEl.textContent = text;
}

// 显示陀螺仪错误
function showGyroError(message) {
    updateStatusText(message);
    document.getElementById('gyro-status').classList.add('error');
}

// 破晓动画序列 - 自动播放6-4.png和6-5.png
function startDawnAnimation() {
    // 隐藏状态提示
    document.getElementById('gyro-status').classList.remove('show');
    hideLockHint();

    // 自动播放6-4.png
    setTimeout(() => {
        document.getElementById('bg-6-seq1').style.opacity = '1';
    }, 300);

    // 自动播放6-5.png
    setTimeout(() => {
        document.getElementById('bg-6-seq2').style.opacity = '1';
    }, 1500);

    // 夜色蒙版逐层渐隐
    setTimeout(() => {
        document.getElementById('night-mask-layer1').classList.add('fade-out');
    }, 800);

    setTimeout(() => {
        document.getElementById('night-mask-layer2').classList.add('fade-out');
    }, 1300);

    // 中央迷雾消散
    setTimeout(() => {
        document.getElementById('fog-center').style.opacity = '0';
    }, 1100);

    // 天边亮起晨光
    setTimeout(() => {
        document.getElementById('dawn-sky').classList.add('fade-in');
        // 晨曦光线依次显示
        document.querySelectorAll('.dawn-ray').forEach((ray, index) => {
            setTimeout(() => ray.classList.add('show'), index * 150);
        });
    }, 1700);

    // 播放破晓音效
    setTimeout(() => playDawnSound(), 1000);

    // 显示台词弹窗
    setTimeout(() => showDialogue6(), 4000);
}

// 播放破晓音效
function playDawnSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        // 主音 - 温暖渐强
        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.type = 'sine';
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.frequency.setValueAtTime(440, audioCtx.currentTime);
        osc1.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 2);
        gain1.gain.setValueAtTime(0, audioCtx.currentTime);
        gain1.gain.linearRampToValueAtTime(0.12, audioCtx.currentTime + 1.5);
        gain1.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 3.5);
        osc1.start(audioCtx.currentTime);
        osc1.stop(audioCtx.currentTime + 3.5);

        // 泛音 - 空灵感
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'sine';
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.frequency.setValueAtTime(660, audioCtx.currentTime + 0.5);
        osc2.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 2.5);
        gain2.gain.setValueAtTime(0, audioCtx.currentTime + 0.5);
        gain2.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + 2);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 4);
        osc2.start(audioCtx.currentTime + 0.5);
        osc2.stop(audioCtx.currentTime + 4);
    } catch (e) {}
}

// 显示台词弹窗
function showDialogue6() {
    document.getElementById('dialogue-box-6').classList.add('show');
    setTimeout(() => {
        document.getElementById('swipe-6').classList.add('show');
        swipeEnabled = true;
    }, 2000);
}
