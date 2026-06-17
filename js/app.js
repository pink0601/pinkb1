// 全局变量
let currentScene = 1;
let swipeEnabled = false;
let bgmAudio = null;
let bgm2Audio = null;

// 背景音乐控制
let bgmFadeInterval = null;
let bgm2FadeInterval = null;

function initBGM() {
    bgmAudio = document.getElementById('bgm');
    bgm2Audio = document.getElementById('bgm2');
}

function fadeInBGM(audio, duration, targetVolume) {
    if (!audio) return;
    const interval = audio === bgm2Audio ? bgm2FadeInterval : bgmFadeInterval;
    clearInterval(interval);
    audio.volume = 0;
    audio.play().catch(() => {});
    const steps = 30;
    const stepTime = duration / steps;
    const volumeStep = targetVolume / steps;
    let current = 0;
    const newInterval = setInterval(() => {
        current += volumeStep;
        if (current >= targetVolume) {
            audio.volume = targetVolume;
            clearInterval(newInterval);
        } else {
            audio.volume = current;
        }
    }, stepTime);
    if (audio === bgm2Audio) bgm2FadeInterval = newInterval;
    else bgmFadeInterval = newInterval;
}

function fadeOutBGM(audio, duration) {
    if (!audio) return;
    const interval = audio === bgm2Audio ? bgm2FadeInterval : bgmFadeInterval;
    clearInterval(interval);
    const startVolume = audio.volume;
    if (startVolume <= 0) { audio.pause(); audio.currentTime = 0; return; }
    const steps = 30;
    const stepTime = duration / steps;
    const volumeStep = startVolume / steps;
    let current = startVolume;
    const newInterval = setInterval(() => {
        current -= volumeStep;
        if (current <= 0) {
            audio.volume = 0;
            audio.pause();
            audio.currentTime = 0;
            clearInterval(newInterval);
        } else {
            audio.volume = current;
        }
    }, stepTime);
    if (audio === bgm2Audio) bgm2FadeInterval = newInterval;
    else bgmFadeInterval = newInterval;
}

function playBGM(audio) {
    const target = audio || bgmAudio;
    if (target && target.paused) {
        fadeInBGM(target, 1500, 1);
    }
}

function stopBGM(audio) {
    const target = audio || bgmAudio;
    if (target && !target.paused) {
        fadeOutBGM(target, 1500);
    }
}

function updateBGM(sceneNum) {
    // 原bgm：第二幕到第三幕播放
    if (sceneNum === 2 || sceneNum === 3) {
        if (bgmAudio && bgmAudio.paused) {
            playBGM(bgmAudio);
        }
    }
    // 红军主题bgm2：贯穿每一幕
    if (bgm2Audio && bgm2Audio.paused) {
        playBGM(bgm2Audio);
    }
}

function switchToScene(num) {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById('scene' + num).classList.add('active');
    currentScene = num;
    swipeEnabled = false;

    // 更新背景音乐
    updateBGM(num);

    // 检查是否是回看模式
    const reviewing = isReviewMode(num);

    if (num === 1) {
        if (reviewing) { showScene1Completed(); } else { initScene1(); }
    }
    if (num === 2) {
        if (reviewing) { showScene2Completed(); } else { initScene2(); }
    }
    if (num === 3) {
        if (reviewing) { showScene3Completed(); } else { initScene3(); }
    }
    if (num === 4) {
        if (reviewing) { showScene4Completed(); } else { initScene4(); }
    }
    if (num === 5) {
        if (reviewing) { showScene5Completed(); } else { initScene5(); }
    }
    if (num === 6) {
        if (reviewing) { showScene6Completed(); } else { initScene6(); }
    }
    if (num === 7) {
        if (reviewing) { showScene7Completed(); } else { initScene7(); }
    }
    if (num === 8) {
        initScene8();
    }
}

// 回看模式：显示各幕完成态
function showScene1Completed() {
    const scene = document.getElementById('scene1');
    scene.classList.add('lit-up');
    document.getElementById('hit-area').classList.add('active');
    document.querySelector('#scene1 .hint-text').style.display = 'none';
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('swipe-1').classList.add('show');
    swipeEnabled = true;
}

function showScene2Completed() {
    document.getElementById('dark-overlay').classList.add('cleared');
    document.getElementById('bg-image-container').classList.add('visible');
    document.getElementById('fog-canvas').style.opacity = '0';
    document.getElementById('fog-progress').style.opacity = '0';
    document.getElementById('clear-percent').style.opacity = '0';
    document.getElementById('guide-text').classList.remove('show');
    document.getElementById('text-content').classList.add('visible');
    document.querySelectorAll('.text-line').forEach(line => line.classList.add('show'));
    document.getElementById('dialogue-box').classList.add('show');
    document.getElementById('swipe-2').classList.add('show');
    swipeEnabled = true;
}

function showScene3Completed() {
    document.getElementById('bg-3-1').style.opacity = '1';
    document.getElementById('text-content-3').classList.add('show');
    document.getElementById('dialogue-quote-3').classList.add('show');
    document.getElementById('swipe-3').classList.add('show');
    swipeEnabled = true;
}

function showScene4Completed() {
    document.getElementById('bg-4-4').style.opacity = '1';
    const lantern = document.getElementById('lantern-4');
    lantern.style.transform = 'translateX(-50%) translateY(-130px)';
    document.getElementById('progress-container-4').style.opacity = '0';
    document.getElementById('guide-text-4').style.display = 'none';
    document.getElementById('dialogue-box-4').classList.add('show');
    document.getElementById('swipe-4').classList.add('show');
    swipeEnabled = true;
}

function showScene5Completed() {
    document.getElementById('bg-layer-5-after').style.opacity = '1';
    document.getElementById('dialogue-box-5').classList.add('show');
    document.getElementById('swipe-5').classList.add('show');
    swipeEnabled = true;
}

function showScene6Completed() {
    document.getElementById('bg-6-seq3').style.opacity = '1';
    document.getElementById('fog-center').style.opacity = '0';
    document.getElementById('dialogue-box-6').classList.add('show');
    document.getElementById('swipe-6').classList.add('show');
    swipeEnabled = true;
}

function showScene7Completed() {
    document.getElementById('bg-7-3').style.opacity = '1';
    document.getElementById('dialogue-box-7').classList.add('show');
    document.getElementById('swipe-7').classList.add('show');
    swipeEnabled = true;
}

function enableGlobalSwipe() {
    let touchStartY = 0;
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    document.addEventListener('touchend', function(e) {
        if (!swipeEnabled) return;
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        if (diff > 50) {
            goToNextScene();
        }
    }, { passive: true });
}

function goToNextScene() {
    if (currentScene < 8) {
        // 上滑切换到下一幕
        switchToScene(currentScene + 1);
    } else {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1.5s ease';
        setTimeout(() => alert('长征精神，薪火相传'), 1500);
    }
}

window.addEventListener('load', () => {
    document.body.style.fontFamily = '"PingFang SC", "Microsoft YaHei", "Songti SC", "SimSun", serif';
    enableGlobalSwipe();
    initBGM();

    // 刷新页面：清空进度，从 Scene01 初始状态开始
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

    // 隐藏所有场景，只显示第一幕
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));

    initScene1();

    // 页面加载后立即播放 BGM2
    playBGM(bgm2Audio);
});
