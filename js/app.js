// 全局变量
let currentScene = 1;
let swipeEnabled = false;

function switchToScene(num) {
    document.querySelectorAll('.scene').forEach(s => s.classList.remove('active'));
    document.getElementById('scene' + num).classList.add('active');
    currentScene = num;
    swipeEnabled = false;
    if (num === 2) initScene2();
    if (num === 3) initScene3();
    if (num === 4) initScene4();
    if (num === 5) initScene5();
    if (num === 6) initScene6();
    if (num === 7) initScene7();
    if (num === 8) initScene8();
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
        switchToScene(currentScene + 1);
    } else {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 1.5s ease';
        setTimeout(() => alert('长征精神，薪火相传'), 1500);
    }
}

window.addEventListener('load', () => {
    document.body.style.fontFamily = '"PingFang SC", "Microsoft YaHei", "Songti SC", "SimSun", serif';
    initScene1();
    enableGlobalSwipe();
});
