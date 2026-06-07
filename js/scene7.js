// 第七幕 - 3张图片交互
let scene7Initialized = false;
let clickPhase7 = 0; // 0=未点击, 1=第一次, 2=第二次, 3=第三次完成

function initScene7() {
    if (scene7Initialized) return;
    scene7Initialized = true;
    setTimeout(() => document.getElementById('click-hint-7').classList.add('show'), 1500);
    const clickArea = document.getElementById('click-area-7');
    clickArea.addEventListener('click', handleClick7);
    clickArea.addEventListener('touchstart', handleTouch7, { passive: false });
}

function handleTouch7(e) {
    e.preventDefault();
    handleClick7(e);
}

function handleClick7(e) {
    clickPhase7++;
    
    if (clickPhase7 === 1) {
        // 第一次点击：7-1 → 7-2
        document.getElementById('click-hint-7').textContent = '再次点击，传递灯火';
        setTimeout(() => {
            document.getElementById('bg-7-2').style.opacity = '1';
        }, 300);
    } else if (clickPhase7 === 2) {
        // 第二次点击：7-2 → 7-3
        document.getElementById('click-hint-7').textContent = '最后一次，点亮万家灯火';
        setTimeout(() => {
            document.getElementById('bg-7-2').style.opacity = '0';
            document.getElementById('bg-7-3').style.opacity = '1';
        }, 300);
    } else if (clickPhase7 === 3) {
        // 第三次点击：完成，显示对话
        document.getElementById('click-hint-7').classList.remove('show');
        document.getElementById('click-hint-7').style.display = 'none';
        document.getElementById('click-area-7').style.pointerEvents = 'none';
        setTimeout(() => showDialogue7(), 1000);
    }
}

function showDialogue7() {
    document.getElementById('dialogue-box-7').classList.add('show');

    // 标记第七幕完成
    completeScene(7);

    // 第七幕结束后自动弹出第八幕
    setTimeout(() => {
        switchToScene(8);
    }, 3000);
}
