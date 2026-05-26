// 第四幕：竖向拖拽托举马灯（含阻尼手感、雨停）
let scene4Initialized = false;
let isDragging4 = false;
let dragStartY4 = 0;
let dragProgress4 = 0;
let currentPhase4 = 1;
let scene4Completed = false;
const DRAG_THRESHOLD4 = 300; // 滑动距离阈值（像素）
const DAMPING = 0.55; // 阻尼系数 - 模拟沉重阻力

function initScene4() {
    if (scene4Initialized) return;
    scene4Initialized = true;

    // 初始化零星细雨
    initRain4();

    const lanternDragArea = document.getElementById('lantern-drag-area');
    const lantern = document.getElementById('lantern-4');
    const progressFill = document.getElementById('progress-fill-4');
    const guideText = document.getElementById('guide-text-4');

    // 延迟显示进度条和引导
    setTimeout(() => {
        document.getElementById('progress-container-4').classList.add('show');
        guideText.classList.add('show');
    }, 1200);

    // ========== 触摸/鼠标开始 ==========
    function startDrag(e) {
        if (scene4Completed) return;
        if (e.type === 'touchstart') e.preventDefault();
        isDragging4 = true;
        dragStartY4 = e.type === 'touchstart' ? e.touches[0].clientY : e.clientY;
        dragProgress4 = 0;
        guideText.style.opacity = '0.3';
        lanternDragArea.style.cursor = 'grabbing';
        // 停止下沉呼吸动画，进入拖拽模式
        lantern.classList.add('lift');
    }

    // ========== 触摸/鼠标移动（含阻尼） ==========
    function moveDrag(e) {
        if (!isDragging4 || scene4Completed) return;
        if (e.type === 'touchmove') e.preventDefault();

        const currentY = e.type === 'touchmove' ? e.touches[0].clientY : e.clientY;
        const rawDelta = dragStartY4 - currentY; // 向上滑动为正值

        if (rawDelta > 0) {
            // 应用阻尼系数 - 模拟费力抬灯的沉重阻力
            const dampedDelta = rawDelta * DAMPING;

            // 计算进度（0-100%）
            dragProgress4 = Math.min((dampedDelta / DRAG_THRESHOLD4) * 100, 100);

            // 更新进度条
            progressFill.style.height = dragProgress4 + '%';

            // 马灯抬升 - 仅调整灯具位置，不产生光晕扩散
            const liftAmount = (dragProgress4 / 100) * 140;
            lantern.style.transform = `translateX(-50%) translateY(${10 - liftAmount}px)`;

            // 阶段背景切换
            updateBackgroundPhase(dragProgress4);

            // 达到阈值完成
            if (dragProgress4 >= 100) {
                completeScene4();
            }
        }
    }

    // ========== 背景阶段切换 ==========
    function updateBackgroundPhase(progress) {
        if (progress >= 25 && currentPhase4 === 1) {
            currentPhase4 = 2;
            document.getElementById('bg-4-1').style.opacity = '0';
            document.getElementById('bg-4-2').style.opacity = '1';
        } else if (progress >= 50 && currentPhase4 === 2) {
            currentPhase4 = 3;
            document.getElementById('bg-4-2').style.opacity = '0';
            document.getElementById('bg-4-3').style.opacity = '1';
        } else if (progress >= 75 && currentPhase4 === 3) {
            currentPhase4 = 4;
            document.getElementById('bg-4-3').style.opacity = '0';
            document.getElementById('bg-4-4').style.opacity = '1';
        }
    }

    // ========== 触摸/鼠标结束 ==========
    function endDrag(e) {
        if (!isDragging4 || scene4Completed) return;
        isDragging4 = false;
        lanternDragArea.style.cursor = 'grab';

        if (dragProgress4 < 100) {
            // 未达标 - 回弹到初始下沉状态
            guideText.style.opacity = '1';
            progressFill.style.height = '0%';
            lantern.style.transform = 'translateX(-50%) translateY(10px)';
            lantern.classList.remove('lift');
            dragProgress4 = 0;

            // 回退背景
            setTimeout(() => {
                document.getElementById('bg-4-2').style.opacity = '0';
                document.getElementById('bg-4-3').style.opacity = '0';
                document.getElementById('bg-4-4').style.opacity = '0';
                document.getElementById('bg-4-1').style.opacity = '1';
                currentPhase4 = 1;
            }, 200);
        }
    }

    // ========== 完成场景 ==========
    function completeScene4() {
        isDragging4 = false;
        scene4Completed = true;
        currentPhase4 = 5;
        dragProgress4 = 100;

        // 隐藏进度条和引导文字
        document.getElementById('progress-container-4').style.opacity = '0';
        guideText.style.display = 'none';
        lanternDragArea.style.pointerEvents = 'none';

        // 固定最终背景
        document.getElementById('bg-4-1').style.opacity = '0';
        document.getElementById('bg-4-2').style.opacity = '0';
        document.getElementById('bg-4-3').style.opacity = '0';
        document.getElementById('bg-4-4').style.opacity = '1';

        // 马灯定格最高托举姿态 - 仅位移，无光晕扩散
        lantern.style.transition = 'transform 0.6s ease-out';
        lantern.style.transform = 'translateX(-50%) translateY(-130px)';

        // 停止零星细雨动画
        document.getElementById('rain-container-4').classList.add('cleared');

        // 显示台词弹窗
        setTimeout(() => showDialogue4(), 800);
    }

    // ========== 显示台词弹窗 ==========
    function showDialogue4() {
        document.getElementById('dialogue-box-4').classList.add('show');
        setTimeout(() => {
            document.getElementById('swipe-4').classList.add('show');
            swipeEnabled = true;
        }, 2000);
    }

    // ========== 绑定事件 ==========
    lanternDragArea.addEventListener('touchstart', startDrag, { passive: false });
    lanternDragArea.addEventListener('touchmove', moveDrag, { passive: false });
    lanternDragArea.addEventListener('touchend', endDrag);
    lanternDragArea.addEventListener('touchcancel', endDrag);
    lanternDragArea.addEventListener('mousedown', startDrag);
    lanternDragArea.addEventListener('mousemove', moveDrag);
    lanternDragArea.addEventListener('mouseup', endDrag);
    lanternDragArea.addEventListener('mouseleave', endDrag);
}

// ========== 初始化零星细雨 ==========
function initRain4() {
    const container = document.getElementById('rain-container-4');
    if (!container) return;

    for (let i = 0; i < 20; i++) {
        const drop = document.createElement('div');
        drop.className = 'rain-drop-4';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.height = (Math.random() * 15 + 10) + 'px';
        drop.style.animationDuration = (Math.random() * 0.6 + 0.6) + 's';
        drop.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(drop);
    }
}
