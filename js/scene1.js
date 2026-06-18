// 第一幕 - 长按交互
let scene1Progress = 0;
let scene1AnimFrame = null;
let scene1StartTime = 0;
const scene1RequiredTime = 1500; // 长按所需时间 1.5秒

function initScene1() {
    // 重置第一幕所有状态
    scene1Progress = 0;
    scene1StartTime = 0;
    if (scene1AnimFrame) cancelAnimationFrame(scene1AnimFrame);
    
    const scene1 = document.getElementById('scene1');
    scene1.classList.remove('lit-up');
    setTimeout(() => scene1.classList.add('active'), 100);
    
    const hitArea = document.getElementById('hit-area');
    hitArea.classList.remove('active');
    
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0%';
    progressBar.style.boxShadow = '0 0 0px rgba(255, 180, 100, 0)';
    
    const progressContainer = document.getElementById('progress-container');
    progressContainer.style.display = 'block';
    progressContainer.style.opacity = '0';
    
    const hintText = document.querySelector('#scene1 .hint-text');
    hintText.style.display = 'block';
    
    document.getElementById('swipe-1').classList.remove('show');
    swipeEnabled = false;
    
    // 恢复马灯呼吸动画
    const lanternCore = document.querySelector('.lantern-core');
    if (lanternCore) lanternCore.style.animationPlayState = 'running';
    
    function startPress(e) {
        e.preventDefault();
        scene1StartTime = Date.now();
        progressContainer.style.opacity = '1';
        // 停止马灯呼吸动画
        const lanternCore = document.querySelector('.lantern-core');
        if (lanternCore) lanternCore.style.animationPlayState = 'paused';
        updateScene1Progress();
    }
    
    function endPress(e) {
        e.preventDefault();
        cancelAnimationFrame(scene1AnimFrame);
        if (scene1Progress < 100) {
            progressContainer.style.opacity = '0';
            progressBar.style.width = '0%';
            progressBar.style.boxShadow = '0 0 0px rgba(255, 180, 100, 0)';
            scene1Progress = 0;
            // 恢复马灯呼吸动画
            const lanternCore = document.querySelector('.lantern-core');
            if (lanternCore) lanternCore.style.animationPlayState = 'running';
        }
    }
    
    function updateScene1Progress() {
        const elapsed = Date.now() - scene1StartTime;
        scene1Progress = Math.min((elapsed / scene1RequiredTime) * 100, 100);
        
        // 更新进度条
        progressBar.style.width = scene1Progress + '%';
        
        // 同步更新box-shadow光晕扩散效果
        const shadowIntensity = scene1Progress / 100;
        const glowRadius = 5 + (shadowIntensity * 25); // 5px -> 30px
        const glowOpacity = 0.1 + (shadowIntensity * 0.5); // 0.1 -> 0.6
        progressBar.style.boxShadow = `0 0 ${glowRadius}px rgba(255, 180, 100, ${glowOpacity})`;
        
        if (scene1Progress < 100) {
            scene1AnimFrame = requestAnimationFrame(updateScene1Progress);
        } else {
            triggerScene1Complete();
        }
    }
    
    function triggerScene1Complete() {
        hitArea.classList.add('active');
        document.getElementById('scene1').classList.add('lit-up');
        hintText.style.display = 'none';
        progressContainer.style.display = 'none';

        // 标记第一幕完成
        completeScene(1);

        // 长按完成后，显示上滑提示，等待用户上滑进入第二幕
        setTimeout(() => {
            document.getElementById('swipe-1').classList.add('show');
            swipeEnabled = true;
        }, 800);
    }
    
    // 播放 BGM2 的函数（确保只播放一次）
    function playBGM2Once() {
        if (bgm2Audio && bgm2Audio.paused) {
            playBGM(bgm2Audio);
        }
    }

    // 监听 touchstart 长按触摸事件
    hitArea.addEventListener('touchstart', function(e) {
        playBGM2Once();
        startPress(e);
    }, {passive: false});
    hitArea.addEventListener('touchend', endPress);
    hitArea.addEventListener('touchcancel', endPress);
    // 同时支持PC端鼠标操作
    hitArea.addEventListener('mousedown', function(e) {
        playBGM2Once();
        startPress(e);
    });
    hitArea.addEventListener('mouseup', endPress);
    hitArea.addEventListener('mouseleave', endPress);
}
