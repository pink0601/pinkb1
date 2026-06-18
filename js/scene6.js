// 第六幕：陀螺仪寻路
let scene6Initialized = false;

// DOM
const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
const lantern = document.getElementById("lantern-6");
const tip = document.getElementById("tip-6");

// 参数（核心调参区）
const THRESHOLD = 20;      // 背景切换阈值
const MAX_ANGLE = 60;      // 最大识别角度
const MOVE_LIMIT = 40;     // 手的最大移动范围（减小）
const ANGLE_LIMIT = 45;    // 响应压缩角度
const EASE = 0.05;         // 缓动系数（越小阻力越大）

// 状态
let state = "center";
let targetX = 0;
let currentX = 0;
let pathCompleted = false;

function initScene6() {
    if (scene6Initialized) return;
    scene6Initialized = true;

    // 初始化背景状态
    setState("center");

    // 启动陀螺仪
    initGyro();

    // 启动动画循环
    animate();
}

// 状态切换（背景）
function setState(newState) {
    if (state === newState) return;
    state = newState;

    if (state === "left") {
        bg1.style.opacity = 0;
        bg2.style.opacity = 1;
        bg3.style.opacity = 0;
        tip.innerText = "左侧探路中…";
    } else if (state === "right") {
        bg1.style.opacity = 0;
        bg2.style.opacity = 0;
        bg3.style.opacity = 1;
        tip.innerText = "右侧探路中…";
        // 右侧是正确道路，标记完成
        if (!pathCompleted) {
            pathCompleted = true;
            setTimeout(completeScene6, 2000);
        }
    } else {
        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
        bg3.style.opacity = 0;
        tip.innerText = "保持手机平稳，探索前方";
    }
}

// 核心输入处理
function handleGamma(gamma) {
    if (pathCompleted) return;

    // 限制输入范围
    gamma = Math.max(-MAX_ANGLE, Math.min(MAX_ANGLE, gamma));

    // 背景状态
    if (gamma < -THRESHOLD) {
        setState("left");
    } else if (gamma > THRESHOLD) {
        setState("right");
    } else {
        setState("center");
    }

    // 手部运动 - 始终紧贴左边界
    // gamma < 0 (左倾): targetX = 0 (紧贴左边)
    // gamma > 0 (右倾): targetX 向右移动
    if (gamma <= 0) {
        targetX = 0; // 左倾或水平时紧贴左边框
    } else {
        let mapped = gamma / ANGLE_LIMIT;
        if (mapped > 1) mapped = 1;
        targetX = mapped * MOVE_LIMIT;
    }
}

// 陀螺仪
function onGyro(e) {
    if (!e.gamma && e.gamma !== 0) return;
    handleGamma(e.gamma);
}

// PC模拟（鼠标）
window.addEventListener("mousemove", (e) => {
    const ratio = e.clientX / window.innerWidth;
    const gamma = (ratio - 0.5) * 2 * MAX_ANGLE;
    handleGamma(gamma);
});

// 动画循环（平滑移动）
function animate() {
    currentX += (targetX - currentX) * EASE;

    if (lantern) {
        lantern.style.transform = `translateX(${currentX}px)`;
    }

    requestAnimationFrame(animate);
}

// iOS 陀螺仪权限
function initGyro() {
    if (
        typeof DeviceOrientationEvent !== "undefined" &&
        typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
        document.body.addEventListener("touchstart", async () => {
            try {
                const res = await DeviceOrientationEvent.requestPermission();
                if (res === "granted") {
                    window.addEventListener("deviceorientation", onGyro, true);
                }
            } catch (err) {
                console.log(err);
            }
        }, { once: true });
    } else {
        window.addEventListener("deviceorientation", onGyro, true);
    }
}

// 完成第六幕
function completeScene6() {
    // 标记完成
    completeScene(6);

    // 隐藏前半部分元素
    if (lantern) lantern.style.opacity = '0';
    if (tip) tip.style.opacity = '0';

    // 后半部分：自动播放 6-4 6-5 6-6
    setTimeout(() => {
        document.getElementById('bg-6-seq1').style.opacity = '1';
    }, 500);

    setTimeout(() => {
        document.getElementById('bg-6-seq2').style.opacity = '1';
    }, 2000);

    setTimeout(() => {
        document.getElementById('bg-6-seq3').style.opacity = '1';
    }, 3500);

    // 显示台词弹窗
    setTimeout(() => {
        document.getElementById('dialogue-box-6').classList.add('show');
    }, 4500);

    // 显示上滑提示
    setTimeout(() => {
        document.getElementById('swipe-6').classList.add('show');
        swipeEnabled = true;
    }, 6000);
}
