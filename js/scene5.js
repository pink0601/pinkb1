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
    setTimeout(() => showBubble('dialogue-area-1'), 500);
    setTimeout(() => hideBubble('dialogue-area-1'), 1800);
    setTimeout(() => showBubble('dialogue-area-1b'), 1800);
    setTimeout(() => hideBubble('dialogue-area-1b'), 3000);
    setTimeout(() => {
        dialoguePhase = 2;
        document.getElementById('click-hint-5').classList.add('show');
    }, 3200);
}

function playDialogueRound2() {
    dialoguePhase = 3;
    document.getElementById('click-hint-5').classList.remove('show');
    document.getElementById('click-hint-5').style.display = 'none';
    setTimeout(() => showBubble('dialogue-area-2'), 200);
    setTimeout(() => hideBubble('dialogue-area-2'), 2800);
    setTimeout(() => showBubble('dialogue-area-2b'), 3200);
    setTimeout(() => hideBubble('dialogue-area-2b'), 7000);
    setTimeout(() => triggerScene5End(), 7300);
}

function triggerScene5End() {
    dialoguePhase = 4;
    document.getElementById('bg-layer-5-after').style.opacity = '1';
    // 不播放声音
    setTimeout(() => {
        document.getElementById('swipe-5').classList.add('show');
        swipeEnabled = true;
    }, 2500);
}

function playSound5() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        [523, 659, 784].forEach((freq, i) => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.15);
            gain.gain.setValueAtTime(0, audioCtx.currentTime + i * 0.15);
            gain.gain.linearRampToValueAtTime(0.06, audioCtx.currentTime + i * 0.15 + 0.3);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + i * 0.15 + 2);
            osc.start(audioCtx.currentTime + i * 0.15);
            osc.stop(audioCtx.currentTime + i * 0.15 + 2);
        });
    } catch (e) {}
}
