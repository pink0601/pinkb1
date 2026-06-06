// ==================== 第八幕：马灯人设盲盒 ====================
const characters = [
    { img: 'assets/images/8-1.png', name: '火种守护者', slogan: '"哪怕只剩一丝微光，也要照亮前行的路。"' },
    { img: 'assets/images/8-2.png', name: '夜行引路人', slogan: '"黑夜再长，也挡不住黎明的脚步。"' },
    { img: 'assets/images/8-3.png', name: '坚韧跋涉者', slogan: '"每一步都是信仰，每一滴汗都是勋章。"' },
    { img: 'assets/images/8-4.png', name: '信念追光者', slogan: '"心中有方向，脚下有力量。"' },
    { img: 'assets/images/8-5.png', name: '温暖同行者', slogan: '"一个人可以走得快，一群人才能走得远。"' },
    { img: 'assets/images/8-6.png', name: '远见领航员', slogan: '"站得高才能看得远，想得深才能走得稳。"' },
    { img: 'assets/images/8-7.png', name: '希望播种者', slogan: '"今天的汗水，是明天的花海。"' },
    { img: 'assets/images/8-8.png', name: '热血先锋者', slogan: '"青春就是用来燃烧的！"' },
    { img: 'assets/images/8-9.png', name: '忠诚卫士', slogan: '"守护，是最长情的告白。"' },
    { img: 'assets/images/8-10.png', name: '梦想点灯人', slogan: '"只要还有一口气，就要为梦想发光。"' }
];

const teamTexts = [
    '一起走完长征路',
    '并肩前行，所向披靡',
    '携手翻越万水千山',
    '同心协力，星火燎原',
    '风雨同舟，共赴黎明'
];

let currentCharacter = null;
let friendCharacter = null;
let scene8Initialized = false;

function initScene8() {
    if (scene8Initialized) return;
    scene8Initialized = true;
    // 第8幕自动显示introModal，因为默认已有active类
}

function openBlindbox() {
    document.getElementById('introModal').classList.remove('active');
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.add('active');
    }, 200);
    setTimeout(() => {
        currentCharacter = characters[Math.floor(Math.random() * characters.length)];
        showResult();
    }, 1500);
}

function showResult() {
    document.getElementById('loadingOverlay').classList.remove('active');
    document.getElementById('characterAvatar').querySelector('img').src = currentCharacter.img;
    document.getElementById('characterName').textContent = currentCharacter.name;
    document.getElementById('characterSlogan').textContent = currentCharacter.slogan;
    document.getElementById('resultModal').classList.add('active');
}

function closeResult() {
    document.getElementById('resultModal').classList.remove('active');
    setTimeout(() => {
        document.getElementById('introModal').classList.add('active');
    }, 300);
}

// ====================== 9:16 海报生成 ======================
function savePoster() {
    const canvas = document.getElementById('posterCanvas');
    const ctx = canvas.getContext('2d');
    const W = 720;
    const H = 1280;
    canvas.width = W;
    canvas.height = H;

    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, W, H);

    const img = new Image();
    img.src = currentCharacter.img;
    img.onload = function() {
        // 按9:16比例缩放图片，保持原始比例完整展示
        const maxW = 400;
        const maxH = 710;
        const scale = Math.min(maxW / img.width, maxH / img.height);
        const drawW = img.width * scale;
        const drawH = img.height * scale;
        const x = W/2 - drawW/2;
        const y = 160;
        ctx.drawImage(img, x, y, drawW, drawH);

        // 图片底部渐变遮罩，让文字区域更清晰
        const gradient = ctx.createLinearGradient(0, y + drawH - 120, 0, y + drawH);
        gradient.addColorStop(0, 'rgba(17, 17, 17, 0)');
        gradient.addColorStop(1, 'rgba(17, 17, 17, 1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, y + drawH - 120, W, 120);

        drawPosterText(ctx, W, H, y + drawH);
        document.getElementById('posterPreview').classList.add('active');
    };
    img.onerror = function() {
        drawPosterText(ctx, W, H);
        document.getElementById('posterPreview').classList.add('active');
    };
}

function drawPosterText(ctx, W, H, imgBottom) {
    const textStart = Math.min(imgBottom + 30, H - 350);

    // 标题
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 36px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('我的马灯人设', W/2, textStart);

    // 金色分界线
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(W/2 - 80, textStart + 20);
    ctx.lineTo(W/2 + 80, textStart + 20);
    ctx.stroke();

    // 人设名称
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 48px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText(currentCharacter.name, W/2, textStart + 80);

    // 标语
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.font = '24px "PingFang SC", "Microsoft YaHei", sans-serif';
    wrapText(ctx, currentCharacter.slogan, W/2, textStart + 130, W - 120, 38);

    // 底部组队引导
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = '20px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText('分享给好友，互换身份组队', W/2, H - 110);

    ctx.fillStyle = 'rgba(255, 215, 0, 0.45)';
    ctx.font = '500 22px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText('「你是' + currentCharacter.name + '，我是___，' + teamTexts[Math.floor(Math.random() * teamTexts.length)] + '」', W/2, H - 65);
}

// 文字自动换行
function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = text.split('');
    let line = '';
    let currentY = y;
    for (let i = 0; i < chars.length; i++) {
        const testLine = line + chars[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && line.length > 0) {
            ctx.fillText(line, x, currentY);
            line = chars[i];
            currentY += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, currentY);
}

function closePosterPreview() {
    document.getElementById('posterPreview').classList.remove('active');
}

function downloadPoster() {
    const canvas = document.getElementById('posterCanvas');
    const link = document.createElement('a');
    link.download = '我的马灯人设_' + currentCharacter.name + '.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast8('海报已保存');
}

// ====================== 互换身份 / 组队匹配 ======================
function openMatch() {
    document.getElementById('resultModal').classList.remove('active');
    setTimeout(() => {
        // 随机匹配一个不同的好友人设
        let friend;
        do {
            friend = characters[Math.floor(Math.random() * characters.length)];
        } while (friend.name === currentCharacter.name);
        friendCharacter = friend;

        document.getElementById('matchAvatarMe').src = currentCharacter.img;
        document.getElementById('matchNameMe').textContent = currentCharacter.name;
        document.getElementById('matchAvatarFriend').src = friendCharacter.img;
        document.getElementById('matchNameFriend').textContent = friendCharacter.name;

        const teamText = teamTexts[Math.floor(Math.random() * teamTexts.length)];
        document.getElementById('matchResultText').innerHTML =
            '「你是<span class="highlight">' + currentCharacter.name + '</span>，我是<span class="highlight">' + friendCharacter.name + '</span>，' + teamText + '」';

        document.getElementById('matchModal').classList.add('active');
    }, 300);
}

function rerollMatch() {
    let friend;
    do {
        friend = characters[Math.floor(Math.random() * characters.length)];
    } while (friend.name === currentCharacter.name);
    friendCharacter = friend;

    document.getElementById('matchAvatarFriend').src = friendCharacter.img;
    document.getElementById('matchNameFriend').textContent = friendCharacter.name;

    const teamText = teamTexts[Math.floor(Math.random() * teamTexts.length)];
    document.getElementById('matchResultText').innerHTML =
        '「你是<span class="highlight">' + currentCharacter.name + '</span>，我是<span class="highlight">' + friendCharacter.name + '</span>，' + teamText + '」';
}

function shareMatch() {
    const teamText = teamTexts[Math.floor(Math.random() * teamTexts.length)];
    const text = '你是' + currentCharacter.name + '，我是' + friendCharacter.name + '，' + teamText + '\n\n快来测测你的长征马灯人设，看看我们能组什么队！';

    if (navigator.share) {
        navigator.share({
            title: '我们的长征组队：' + currentCharacter.name + ' & ' + friendCharacter.name,
            text: text,
            url: window.location.href
        }).catch(() => copyToClipboard8(text));
    } else {
        copyToClipboard8(text);
    }
}

function closeMatch() {
    document.getElementById('matchModal').classList.remove('active');
    setTimeout(() => {
        document.getElementById('resultModal').classList.add('active');
    }, 300);
}

// ====================== 分享好友 ======================
function sharePoster() {
    const teamText = teamTexts[Math.floor(Math.random() * teamTexts.length)];
    const shareTitle = '🏮 我的马灯人设是：' + currentCharacter.name;
    const shareText = currentCharacter.slogan + '\n\n你是' + currentCharacter.name + '，我是___，' + teamText + '\n\n快来测测你的长征马灯人设，看看我们能组什么队！';

    if (navigator.share) {
        navigator.share({
            title: shareTitle,
            text: shareText,
            url: window.location.href
        }).catch(() => {
            copyToClipboard8(shareTitle + '\n' + shareText);
        });
    } else {
        copyToClipboard8(shareTitle + '\n' + shareText);
    }
}

function copyToClipboard8(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast8('文案已复制，快去分享给好友吧');
        });
    } else {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast8('文案已复制，快去分享给好友吧');
    }
}

function showToast8(message) {
    const toast = document.getElementById('toast8');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}
