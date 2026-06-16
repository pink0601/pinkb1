// 第九幕：提灯寻路（陀螺仪控制手部马灯联动）
let scene9Initialized = false;
let gyro9Active = false;
let baseGamma9 = 0;

// 物理参数
const EASE_FACTOR = 0.08;      // 缓动系数（越小越平滑，惯性越强）
const MAX_OFFSET = 120;        // 最大左右偏移（像素）
const GAMMA_SENSITIVITY = 8;   // 陀螺仪灵敏度（度/像素）

// 当前状态
let currentX = 0;              // 当前X偏移
let targetX = 0;               // 目标X偏移
let animFrame9 = null;

function initScene9() {
    if (scene9Initialized) return;
    scene9Initialized = true;

    // 显示引导提示
    setTimeout(() => {
        document.getElementById('guide-hint-9').classList.add('show');
    }, 500);

    // 请求陀螺仪权限
    requestGyro9Permission();
}

// 请求陀螺仪权限
function requestGyro9Permission() {
    if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
            .then(permissionState => {
                if (permissionState === 'granted') {
                    startGyro9Listener();
                } else {
                    showStatus9('需要陀螺仪权限', true);
                }
            })
            .catch(() => showStatus9('陀螺仪权限请求失败', true));
    } else {
        startGyro9Listener();
    }
}

// 启动陀螺仪监听
function startGyro9Listener() {
    gyro9Active = true;

    // 校准基准角度
    window.addEventListener('deviceorientation', calibrateGyro9, { once: true });

    // 持续监听
    window.addEventListener('deviceorientation', handleGyro9);

    // 隐藏引导，显示状态
    setTimeout(() => {
        document.getElementById('guide-hint-9').classList.remove('show');
        showStatus9('左右倾斜手机，让马灯照亮前路');
    }, 2500);

    // 启动动画循环
    startAnimationLoop9();

    // 8秒后自动完成
    setTimeout(() => {
        if (gyro9Active) {
            showStatus9('马灯已照亮前路');
            setTimeout(completeScene9, 1500);
        }
    }, 8000);
}

// 校准初始方向
function calibrateGyro9(event) {
    baseGamma9 = event.gamma || 0;
}

// 处理方向变化
function handleGyro9(event) {
    if (!gyro9Active) return;

    const gamma = event.gamma || 0;
    const relativeGamma = gamma - baseGamma9;

    // 计算目标偏移（带灵敏度调节）
    targetX = relativeGamma * GAMMA_SENSITIVITY;

    // 限制边界
    targetX = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, targetX));

    // 更新状态文字
    updateStatusDirection(relativeGamma);
}

// 更新状态方向文字
function updateStatusDirection(gamma) {
    const statusEl = document.getElementById('status-hint-9');
    if (!statusEl.classList.contains('show')) return;

    if (gamma < -5) {
        statusEl.textContent = '马灯向左照亮';
    } else if (gamma > 5) {
        statusEl.textContent = '马灯向右照亮';
    } else {
        statusEl.textContent = '马灯照亮前方';
    }
}

// 启动动画循环（缓动物理效果）
function startAnimationLoop9() {
    const handUnit = document.getElementById('hand-lantern-9');
    const lightSpot = document.getElementById('light-spot-9');

    function animate() {
        if (!gyro9Active) return;

        // 缓动插值：当前值向目标值平滑过渡
        currentX += (targetX - currentX) * EASE_FACTOR;

        // 应用变换（手部马灯联动单元整体移动）
        handUnit.style.transform = `translateX(${currentX}px)`;

        // 光斑同步移动（相对马灯位置）
        const spotX = 50 + (currentX / window.innerWidth) * 30;
        lightSpot.style.left = `${spotX}%`;
        lightSpot.style.transform = `translateX(-50%)`;

        animFrame9 = requestAnimationFrame(animate);
    }

    // 激活光斑
    lightSpot.classList.add('active');
    animFrame9 = requestAnimationFrame(animate);
}

// 显示状态提示
function showStatus9(text, isError) {
    const statusEl = document.getElementById('status-hint-9');
    statusEl.textContent = text;
    statusEl.classList.add('show');
    if (isError) {
        statusEl.classList.add('error');
    } else {
        statusEl.classList.remove('error');
    }
}

// 完成第九幕
function completeScene9() {
    gyro9Active = false;
    if (animFrame9) cancelAnimationFrame(animFrame9);
    window.removeEventListener('deviceorientation', handleGyro9);

    // 标记完成
    completeScene(9);

    // 显示上滑提示
    document.getElementById('swipe-9').classList.add('show');
    swipeEnabled = true;
}
