// 第五幕
let scene5Initialized = false;
let dialoguePhase = 0;

function initScene5() {
    if (scene5Initialized) return;
    scene5Initialized = true;
    setTimeout(() => playDialogueRound1(), 1000);
    document.getElementById('scene5').addEventListener('touchstart', handleScene5Click, { passive: false });
    document.getElementById('scene5').addEventListener('click', handleScene5Click);
}

function handleScene5Click(e) {
    if (dialoguePhase === 2) {
        if (e.type === 'touchstart') e.preventDefault();
        playDialogueRound2();
    }
}

function showBubble(id) {
    document.getElementById(id).classList.remove('hide');
    document.getElementById(id).classList.add('show');
}

function hideBubble(id) {
    document.getElementById(id).classList.remove('show');
    document.getElementById(id).classList.add('hide');
}

function playDialogueRound1() {
    dialoguePhase = 1;
    setTimeout(() => showBubble('dialogue-area-1'), 400);
    setTimeout(() => hideBubble('dialogue-area-1'), 1440);
    setTimeout(() => showBubble('dialogue-area-1b'), 1440);
    setTimeout(() => hideBubble('dialogue-area-1b'), 2400);
    setTimeout(() => {
        dialoguePhase = 2;
        document.getElementById('click-hint-5').classList.add('show');
    }, 2560);
}

function playDialogueRound2() {
    dialoguePhase = 3;
    document.getElementById('click-hint-5').classList.remove('show');
    document.getElementById('click-hint-5').style.display = 'none';
    setTimeout(() => showBubble('dialogue-area-2'), 160);
    setTimeout(() => hideBubble('dialogue-area-2'), 2240);
    setTimeout(() => showBubble('dialogue-area-2b'), 2560);
    setTimeout(() => hideBubble('dialogue-area-2b'), 5600);
    setTimeout(() => triggerScene5End(), 5840);
}

function triggerScene5End() {
    dialoguePhase = 4;
    document.getElementById('bg-layer-5-after').style.opacity = '1';
    // 不播放声音

    // 标记第五幕完成
    completeScene(5);

    setTimeout(() => {
        document.getElementById('swipe-5').classList.add('show');
        swipeEnabled = true;
    }, 2500);
}

function playSound5() {
    // 声音已关闭
}
