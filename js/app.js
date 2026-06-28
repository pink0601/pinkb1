// =========================
// 全局变量
// =========================

let currentScene = 1;
let swipeEnabled = false;

let bgmAudio = null;   // 环境音
let bgm2Audio = null;  // 红军主题音乐

let bgmFadeInterval = null;
let bgm2FadeInterval = null;


// =========================
// 初始化音频
// =========================

function initBGM() {
    bgmAudio = document.getElementById('bgm');
    bgm2Audio = document.getElementById('bgm2');
}


// =========================
// 音频淡入
// =========================

function fadeInBGM(audio, duration, targetVolume = 1) {

    if (!audio) return;

    const oldInterval =
        audio === bgm2Audio
            ? bgm2FadeInterval
            : bgmFadeInterval;

    clearInterval(oldInterval);

    audio.volume = 0;

    audio.play().catch(() => {});

    const steps = 30;
    const stepTime = duration / steps;
    const volumeStep = targetVolume / steps;

    let currentVolume = 0;

    const interval = setInterval(() => {

        currentVolume += volumeStep;

        if (currentVolume >= targetVolume) {

            audio.volume = targetVolume;

            clearInterval(interval);

        } else {

            audio.volume = currentVolume;

        }

    }, stepTime);

    if (audio === bgm2Audio) {
        bgm2FadeInterval = interval;
    } else {
        bgmFadeInterval = interval;
    }
}


// =========================
// 音频淡出
// =========================

function fadeOutBGM(audio, duration) {

    if (!audio) return;

    const oldInterval =
        audio === bgm2Audio
            ? bgm2FadeInterval
            : bgmFadeInterval;

    clearInterval(oldInterval);

    const startVolume = audio.volume;

    if (startVolume <= 0) {

        audio.pause();
        audio.currentTime = 0;

        return;
    }

    const steps = 30;
    const stepTime = duration / steps;
    const volumeStep = startVolume / steps;

    let currentVolume = startVolume;

    const interval = setInterval(() => {

        currentVolume -= volumeStep;

        if (currentVolume <= 0) {

            audio.volume = 0;

            audio.pause();
            audio.currentTime = 0;

            clearInterval(interval);

        } else {

            audio.volume = currentVolume;

        }

    }, stepTime);

    if (audio === bgm2Audio) {
        bgm2FadeInterval = interval;
    } else {
        bgmFadeInterval = interval;
    }
}


// =========================
// 播放音乐
// =========================

function playBGM(audio, volume = 1) {

    if (!audio) return;

    if (audio.paused) {

        fadeInBGM(audio, 1500, volume);

    }
}


// =========================
// 停止音乐
// =========================

function stopBGM(audio) {

    if (!audio) return;

    if (!audio.paused) {

        fadeOutBGM(audio, 1500);

    }
}


// =========================
// 场景音乐控制
// =========================

function updateBGM(sceneNum) {

    // ---------------------
    // 红军主题音乐
    // 全程播放
    // ---------------------

    if (bgm2Audio && bgm2Audio.paused) {

        playBGM(bgm2Audio, 0.5);

    }

    // ---------------------
    // 环境音
    // 只在第二、第三幕播放
    // ---------------------

    if (sceneNum === 2 || sceneNum === 3) {

        if (bgmAudio && bgmAudio.paused) {

            playBGM(bgmAudio, 1);

        }

    } else {

        if (bgmAudio && !bgmAudio.paused) {

            stopBGM(bgmAudio);

        }

    }
}


// =========================
// 场景切换
// =========================

function switchToScene(num) {

    document.querySelectorAll('.scene').forEach(scene => {
        scene.classList.remove('active');
    });

    document
        .getElementById('scene' + num)
        .classList.add('active');

    currentScene = num;

    swipeEnabled = false;

    updateBGM(num);

    switch (num) {

        case 1:
            initScene1();
            break;

        case 2:
            initScene2();
            break;

        case 3:
            initScene3();
            break;

        case 4:
            initScene4();
            break;

        case 5:
            initScene5();
            break;

        case 6:
            initScene6();
            break;

        case 7:
            initScene7();
            break;

        case 8:
            initScene8();
            break;
    }
}


// =========================
// 上滑切换
// =========================

function enableGlobalSwipe() {

    let touchStartY = 0;

    document.addEventListener(
        'touchstart',
        function (e) {

            touchStartY = e.touches[0].clientY;

        },
        { passive: true }
    );

    document.addEventListener(
        'touchend',
        function (e) {

            if (!swipeEnabled) return;

            const touchEndY =
                e.changedTouches[0].clientY;

            const diff =
                touchStartY - touchEndY;

            if (diff > 50) {

                goToNextScene();

            }

        },
        { passive: true }
    );
}


// =========================
// 下一幕
// =========================

function goToNextScene() {

    if (currentScene < 8) {

        switchToScene(currentScene + 1);

    } else {

        document.body.style.opacity = '0';

        document.body.style.transition =
            'opacity 1.5s ease';

        setTimeout(() => {

            alert('长征精神，薪火相传');

        }, 1500);
    }
}


// =========================
// 页面加载
// =========================

window.addEventListener('load', () => {

    document.body.style.fontFamily =
        '"PingFang SC","Microsoft YaHei","Songti SC","SimSun",serif';

    initBGM();

    enableGlobalSwipe();

    // ---------------------
    // 删除回看功能
    // 刷新直接第一幕
    // ---------------------

    currentScene = 1;

    document
        .querySelectorAll('.scene')
        .forEach(scene => {
            scene.classList.remove('active');
        });

    document
        .getElementById('scene1')
        .classList.add('active');

    // 重置场景状态

    scene2Initialized = false;
    scene3Initialized = false;
    scene4Initialized = false;
    scene5Initialized = false;
    scene6Initialized = false;
    scene7Initialized = false;
    scene8Initialized = false;

    // 第一幕初始化

    initScene1();

    // 红军主题音乐全程播放

    playBGM(bgm2Audio, 0.5);
});
