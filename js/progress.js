// ==================== 全局进度系统（无回看版） ====================

// 默认状态
function getDefaultProgress() {
    return {
        currentScene: 1,
        interactStatus: [false, false, false, false, false, false, false, false]
    };
}

// 全局状态（仅当前页面有效）
let progressState = getDefaultProgress();

// 保存函数（空函数，保留兼容）
function saveProgress(progress) {
    progressState = progress;
}

// 读取函数（始终返回默认状态）
function loadProgress() {
    return getDefaultProgress();
}

// 完成某一幕
function completeScene(sceneNum) {

    progressState.interactStatus[sceneNum - 1] = true;

    if (
        sceneNum < 8 &&
        progressState.currentScene === sceneNum
    ) {
        progressState.currentScene = sceneNum + 1;
    }
}

// 永远不是回看模式
function isReviewMode(sceneNum) {
    return false;
}
