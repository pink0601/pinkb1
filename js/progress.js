// ==================== 全局进度条系统 ====================
const PROGRESS_KEY = 'lantern_story_progress';

// 默认进度状态
function getDefaultProgress() {
    return {
        currentScene: 1,
        interactStatus: [false, false, false, false, false, false, false, false],
        finishedScene: []
    };
}

// 读取本地存储
function loadProgress() {
    try {
        const data = localStorage.getItem(PROGRESS_KEY);
        if (data) return JSON.parse(data);
    } catch (e) {}
    return getDefaultProgress();
}

// 保存到本地存储
function saveProgress(progress) {
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
    } catch (e) {}
}

// 全局进度状态
let progressState = loadProgress();

// 更新进度条UI
function updateProgressUI() {
    const nodes = document.querySelectorAll('.progress-node');
    const fill = document.getElementById('global-progress-fill');

    // 计算进度百分比
    const completedCount = progressState.finishedScene.length;
    const percent = (completedCount / 8) * 100;
    fill.style.height = percent + '%';

    nodes.forEach((node, index) => {
        const sceneNum = index + 1;
        node.classList.remove('completed', 'current', 'pending');

        // 清除 inline style，确保 CSS 类控制显示
        const img = node.querySelector('.node-lantern');
        if (img) {
            img.style.opacity = '';
            img.style.transform = '';
        }

        if (progressState.finishedScene.includes(sceneNum)) {
            node.classList.add('completed');
        } else if (sceneNum === progressState.currentScene) {
            node.classList.add('current');
        } else if (sceneNum < progressState.currentScene) {
            node.classList.add('completed');
        } else {
            node.classList.add('pending');
        }
    });

    // 已完成的幕显示图标
    progressState.finishedScene.forEach(sceneNum => {
        const node = nodes[sceneNum - 1];
        if (node) {
            const img = node.querySelector('.node-lantern');
            if (img) {
                img.style.opacity = '1';
                img.style.transform = 'scale(1)';
            }
        }
    });
}

// 完成某一幕（只保存数据，不更新UI）
function completeScene(sceneNum) {
    if (!progressState.finishedScene.includes(sceneNum)) {
        progressState.finishedScene.push(sceneNum);
    }
    progressState.interactStatus[sceneNum - 1] = true;

    // 自动推进到下一幕
    if (sceneNum < 8 && progressState.currentScene === sceneNum) {
        progressState.currentScene = sceneNum + 1;
    }

    saveProgress(progressState);
}

// 上滑切换到下一幕时，浮现对应图标并更新进度栏
function onSceneTransition(sceneNum) {
    updateProgressUI();
}

// 检查是否是回看模式
function isReviewMode(sceneNum) {
    return progressState.finishedScene.includes(sceneNum);
}

// 节点点击事件
function initProgressNodes() {
    const nodes = document.querySelectorAll('.progress-node');
    nodes.forEach(node => {
        node.addEventListener('click', () => {
            const sceneNum = parseInt(node.dataset.scene);
            // 已完成或当前幕可点击，未解锁不可点击
            if (progressState.finishedScene.includes(sceneNum) || sceneNum === progressState.currentScene) {
                switchToScene(sceneNum);
            }
        });
    });
}

// 初始化进度条
function initProgress() {
    updateProgressUI();
    initProgressNodes();
}

// 显示重新开始确认弹窗
function showRestartConfirm() {
    document.getElementById('restart-modal').classList.add('show');
}

// 隐藏重新开始确认弹窗
function hideRestartConfirm() {
    document.getElementById('restart-modal').classList.remove('show');
}

// 确认重新开始
function confirmRestart() {
    hideRestartConfirm();

    // 清空 localStorage 全部进度数据
    progressState = getDefaultProgress();
    saveProgress(progressState);

    // 重置所有场景的初始化标志
    scene2Initialized = false;
    scene3Initialized = false;
    scene4Initialized = false;
    scene5Initialized = false;
    scene6Initialized = false;
    scene7Initialized = false;
    scene8Initialized = false;

    // 重置进度条UI
    updateProgressUI();

    // 平滑跳转至第一幕
    switchToScene(1);
}

// 页面加载时初始化
window.addEventListener('load', initProgress);
