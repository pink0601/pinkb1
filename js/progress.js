// ==================== 全局进度系统（无回看版） ====================

function getDefaultProgress() {
    return {
        currentScene: 1,
        interactStatus: Array(8).fill(false)
    };
}

let progressState = getDefaultProgress();

// 不保存
function saveProgress() {}

// 每次都返回当前默认状态
function loadProgress() {
    progressState = getDefaultProgress();
    return progressState;
}

function completeScene(sceneNum) {
    progressState.interactStatus[sceneNum - 1] = true;

    if (sceneNum < 8) {
        progressState.currentScene = sceneNum + 1;
    }
}

function isReviewMode() {
    return false;
}
