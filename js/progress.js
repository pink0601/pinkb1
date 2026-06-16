// ==================== 全局进度系统 ====================
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

// 完成某一幕（保存数据）
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

// 检查是否是回看模式
function isReviewMode(sceneNum) {
    return progressState.finishedScene.includes(sceneNum);
}
