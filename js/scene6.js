// 第六幕：陀螺仪寻路（纯画面光影层次，无图形元素）
let scene6Initialized = false;
let gyroActive = false;
let currentDirection = 'center'; // 'left', 'right', 'center'
let isLocked = false; // 左侧错误锁定状态
let pathCompleted = false;
let baseGamma = 0;

// 马灯动画参数
let lanternAnimFrame = null;
let lanternCurrentX = 0;
let lanternTargetX = 0;
let lanternCurrentScaleY = 1;
let lanternTargetScaleY = 1;
const LANTERN_EASE = 0.08;
const LANTERN_MAX_OFFSET = 80;

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
                    showGyroError('需要陀螺仪权限');
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

    // 启动马灯动画循环
    startLanternAnimation();
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

    // 更新马灯目标位置和形变
    updateLanternTarget(relativeGamma);

    if (isLocked) {
        // 锁定状态：只能回中解锁
        if (relativeGamma >= CENTER_MIN && relativeGamma <= CENTER_MAX) {
            if (currentDirection !== 'center') {
                currentDirection = 'center';
                handleCenterPath();
            }
        }
        return;
    }

    // 未锁定状态：正常方向判定
    if (relativeGamma < LEFT_THRESHOLD) {
        // 偏向左侧 - 错误道路
        if (currentDirection !== 'left') {
            currentDirection = 'left';
            handleLeftPath();
        }
    } else if (relativeGamma > RIGHT_THRESHOLD) {
        // 偏向右侧 - 正确道路
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

// 更新马灯目标位置和形变
function updateLanternTarget(relativeGamma) {
    // 计算水平偏移（反向：手机左倾，马灯右移贴近右边框）
    // relativeGamma < 0 (左倾) -> 马灯向右移动
    // relativeGamma > 0 (右倾) -> 马灯向左移动
    lanternTargetX = -relativeGamma * 3;
    lanternTargetX = Math.max(-LANTERN_MAX_OFFSET, Math.min(LANTERN_MAX_OFFSET, lanternTargetX));

    // 计算形变：左倾（向右移）时回缩，右倾（向左移）时伸长
    // relativeGamma < 0 (左倾/向右移) -> scaleY < 1 (回缩)
    // relativeGamma > 0 (右倾/向左移) -> scaleY > 1 (伸长)
    lanternTargetScaleY = 1 + (relativeGamma / 30);
    lanternTargetScaleY = Math.max(0.85, Math.min(1.15, lanternTargetScaleY));
}

// 启动马灯动画循环
function startLanternAnimation() {
    const lantern = document.getElementById('hand-lantern-6');
    if (!lantern) return;

    function animateLantern() {
        if (!gyroActive && pathCompleted) return;

        // 缓动插值
        lanternCurrentX += (lanternTargetX - lanternCurrentX) * LANTERN_EASE;
        lanternCurrentScaleY += (lanternTargetScaleY - lanternCurrentScaleY) * LANTERN_EASE;

        // 应用变换：水平移动 + 垂直形变
        // 使用 right:0 定位，所以 translateX 正值向左，负值向右
        lantern.style.transform = `translateX(${lanternCurrentX}px) scaleY(${lanternCurrentScaleY})`;

        lanternAnimFrame = requestAnimationFrame(animateLantern);
    }

    lanternAnimFrame = requestAnimationFrame(animateLantern);
}

// 处理左侧错误道路
function handleLeftPath() {
    document.getElementById('gyro-status').classList.add('error');

    // 隐藏初始背景 6-1.png，显示左侧背景 6-3.png
    document.getElementById('bg-6-initial').style.opacity = '0';
    document.getElementById('bg-6-left').style.opacity = '1';
    document.getElementById('bg-6-right').style.opacity = '0';

    // 叠加厚重迷雾强化昏暗视觉效果
    document.getElementById('fog-left').classList.add('thicken');

    // 中央迷雾也加重
    document.getElementById('fog-center').style.opacity = '0.9';

    // 锁定状态 - 必须回中才能解锁
    isLocked = true;
}

// 处理右侧正确道路
function handleRightPath() {
    updateStatusText('发现道路！视野逐渐清晰');

    // 显示右侧背景 6-2.png
    document.getElementById('bg-6-right').style.opacity = '1';
    document.getElementById('bg-6-left').style.opacity = '0';

    // 解除右侧迷雾 - 呈现清晰通行视野
    document.getElementById('fog-right').classList.add('clear');

    // 如果左侧迷雾加厚过，恢复
    document.getElementById('fog-left').classList.remove('thicken');

    // 标记完成，停止监听
    pathCompleted = true;
    gyroActive = false;
    window.removeEventListener('deviceorientation', handleOrientation);

    // 停止马灯动画
    if (lanternAnimFrame) cancelAnimationFrame(lanternAnimFrame);

    // 6-2.png 显现后自动显现 6-4.png
    setTimeout(() => {
        document.getElementById('bg-6-seq1').style.opacity = '1';
    }, 1500);

    // 延迟后进入亮度渐亮流程
    setTimeout(() => startBrightnessAnimation(), 2500);
}

// 处理中间位置（回退/重置）
function handleCenterPath() {
    document.getElementById('gyro-status').classList.remove('error');

    // 从错误状态回中：显示 6-1.png，解除锁定
    if (isLocked) {
        isLocked = false;
        document.getElementById('bg-6-initial').style.opacity = '1';
        document.getElementById('bg-6-left').style.opacity = '0';
        document.getElementById('bg-6-right').style.opacity = '0';
    }

    // 恢复迷雾状态
    document.getElementById('fog-right').classList.remove('thicken');
    document.getElementById('fog-center').style.opacity = '';
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

// 亮度渐亮动画 - 画面逐渐亮度提高
function startBrightnessAnimation() {
    // 隐藏状态提示
    document.getElementById('gyro-status').classList.remove('show');

    // 自动播放6-5.png
    setTimeout(() => {
        document.getElementById('bg-6-seq2').style.opacity = '1';
    }, 800);

    // 6-5.png 后再自动播放 6-6.png
    setTimeout(() => {
        document.getElementById('bg-6-seq3').style.opacity = '1';
    }, 1200);

    // 中央迷雾消散
    setTimeout(() => {
        document.getElementById('fog-center').style.opacity = '0';
    }, 500);

    // 标记第六幕完成
    completeScene(6);

    // 显示台词弹窗
    setTimeout(() => showDialogue6(), 2500);
}

// 显示台词弹窗
function showDialogue6() {
    document.getElementById('dialogue-box-6').classList.add('show');
    setTimeout(() => {
        document.getElementById('swipe-6').classList.add('show');
        swipeEnabled = true;
    }, 2000);
}
