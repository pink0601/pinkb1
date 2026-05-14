<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>一盏马灯照亮长征路</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        html, body { width: 100%; height: 100%; overflow: hidden; }
        body { font-family: "PingFang SC", "Microsoft YaHei", "Songti SC", "SimSun", serif; background: #0a0a12; }
        
        .scene {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            opacity: 0; pointer-events: none; transition: opacity 0.8s ease;
        }
        .scene.active { opacity: 1; pointer-events: auto; }
        
        /* ==================== 第一幕：封面 ==================== */
        #scene1 {
            background: url("1.png") center center / cover no-repeat;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            transition: opacity 0.5s ease, background 1.5s ease;
        }
        #scene1.lit-up { background: url("2.png") center center / cover no-repeat; }
        
        #scene1 .text-content {
            position: relative; z-index: 20; text-align: center; margin-top: -15vh;
            transition: color 1.5s ease;
        }
        #scene1 .main-title {
            font-size: 28px; font-weight: bold; letter-spacing: 4px; margin-bottom: 18px;
            color: rgba(240, 235, 220, 0.95);
            text-shadow: 0 2px 10px rgba(0,0,0,0.6);
        }
        #scene1 .sub-title {
            font-size: 16px; font-weight: normal; letter-spacing: 3px;
            color: rgba(200, 195, 180, 0.8);
            transition: color 1.5s ease;
        }
        
        #hit-area {
            position: absolute; left: 25%; top: 50%; transform: translate(-50%, -50%);
            width: 200px; height: 200px; z-index: 10; cursor: pointer;
        }
        
        .glow-effect {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 10px; height: 10px; border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 200, 100, 0.8) 0%, rgba(255, 150, 50, 0) 70%);
            opacity: 0; pointer-events: none; z-index: 9;
            transition: all 1.5s ease-out;
        }
        #hit-area.active .glow-effect { width: 800px; height: 800px; opacity: 0.6; }
        
        #scene1 .bottom-area {
            position: absolute; bottom: 8%; width: 100%; text-align: center; z-index: 20;
        }
        #scene1 .hint-text {
            font-size: 14px; color: rgba(200, 195, 180, 0.4); margin-bottom: 12px; letter-spacing: 1px;
            animation: pulse-hint 2.5s ease-in-out infinite;
        }
        @keyframes pulse-hint { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; } }
        
        #progress-container {
            width: 140px; height: 3px; background: rgba(255,255,255,0.1);
            margin: 0 auto; border-radius: 2px; overflow: hidden; opacity: 0;
            transition: opacity 0.3s;
        }
        #progress-bar {
            width: 0%; height: 100%; background: linear-gradient(90deg, #ffaa55, #ffcc77);
            box-shadow: 0 0 8px rgba(255, 170, 85, 0.6);
            transition: width 0.1s linear;
        }
        
        /* ==================== 第二幕：绝境征途 ==================== */
        #scene2 { background: #0d0d15; z-index: 2; }
        
        #dark-overlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(180deg, 
                rgba(10, 10, 20, 0.9) 0%, 
                rgba(20, 25, 35, 0.95) 50%,
                rgba(15, 20, 30, 0.98) 100%);
            pointer-events: none; z-index: 10;
            transition: opacity 2.5s ease;
        }
        #dark-overlay.cleared { opacity: 0.25; }
        
        #bg-image-container {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
            opacity: 0; transition: opacity 2s ease;
            background: url('3.png') center center / cover no-repeat;
        }
        #bg-image-container.visible { opacity: 1; }
        
        #fog-canvas {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 15;
            cursor: pointer;
        }
        
        /* 雨滴Canvas铺满全屏 */
        #water-drops {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 16;
            pointer-events: none; opacity: 0.65;
        }
        
        .wipe-glow {
            position: absolute; pointer-events: none; z-index: 17; border-radius: 50%;
            background: radial-gradient(circle, rgba(255, 240, 200, 0.4) 0%, rgba(255, 220, 150, 0.2) 40%, transparent 70%);
            animation: glowFade 0.8s ease forwards;
        }
        @keyframes glowFade { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(1.5); } }
        
        #text-content {
            position: absolute; top: 8%; left: 6%; right: 6%; z-index: 30;
            color: rgba(240, 235, 220, 0.95); pointer-events: none; opacity: 0;
            transition: opacity 0.5s ease;
        }
        #text-content.visible { opacity: 1; }
        
        .text-line {
            font-size: 15px; line-height: 2; margin-bottom: 14px;
            opacity: 0; transform: translateY(25px); text-align: justify;
            color: rgba(240, 235, 220, 0.95);
        }
        .text-line.show { animation: textFadeIn 0.8s ease forwards; }
        @keyframes textFadeIn { to { opacity: 1; transform: translateY(0); } }
        
        #guide-text {
            position: absolute; bottom: 20%; left: 50%; transform: translateX(-50%);
            color: rgba(200, 195, 180, 0.5); font-size: 14px; z-index: 35;
            white-space: nowrap; opacity: 0;
        }
        #guide-text.show { animation: guideFadeIn 0.8s ease forwards, guidePulse 2.5s ease-in-out infinite 1s; }
        @keyframes guideFadeIn { to { opacity: 1; } }
        @keyframes guidePulse { 0%, 100% { opacity: 0.35; } 50% { opacity: 0.6; } }
        
        #dialogue-box {
            position: absolute; bottom: 28%; left: 50%; transform: translateX(-50%) scale(0);
            background: rgba(20, 25, 35, 0.9); border: 1px solid rgba(160, 150, 130, 0.25);
            border-radius: 14px; padding: 16px 20px; max-width: 85%;
            color: rgba(240, 235, 220, 0.95); font-size: 15px; line-height: 1.9;
            z-index: 40; opacity: 0;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); backdrop-filter: blur(6px);
        }
        #dialogue-box.show { animation: dialoguePop 0.5s ease forwards; }
        @keyframes dialoguePop { 0% { opacity: 0; transform: translateX(-50%) scale(0.9); } 100% { opacity: 1; transform: translateX(-50%) scale(1); } }
        #dialogue-box::before {
            content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%);
            border-width: 10px 10px 0; border-style: solid;
            border-color: rgba(20, 25, 35, 0.9) transparent transparent;
        }
        
        #fog-progress {
            position: absolute; top: 20px; right: 20px; width: 60px; height: 4px;
            background: rgba(100, 100, 110, 0.3); border-radius: 2px; z-index: 35; opacity: 0;
        }
        #fog-progress.show { animation: progressFadeIn 0.5s ease forwards; }
        @keyframes progressFadeIn { to { opacity: 1; } }
        #fog-progress-bar {
            height: 100%; width: 0%;
            background: linear-gradient(90deg, rgba(180, 160, 120, 0.8), rgba(200, 180, 140, 0.9));
            border-radius: 2px; transition: width 0.2s ease;
        }
        
        #clear-percent {
            position: absolute; top: 32px; right: 20px;
            color: rgba(200, 195, 180, 0.5); font-size: 12px; z-index: 35; opacity: 0;
        }
        #clear-percent.show { opacity: 1; }
        
        /* ==================== 第三幕：风雨护灯 ==================== */
        #scene3 { background: #0a0a12; }
        
        .bg-image-scene3 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover; background-position: center; opacity: 0;
            transition: opacity 1.5s ease;
        }
        #bg-3-1 { background-image: url('3-1.png'); opacity: 1; }
        #bg-3-2 { background-image: url('4-1.png'); }
        
        /* 雨丝层铺满全屏 - 扩大溢出区域确保无缝覆盖 */
        #rain-container {
            position: absolute; top: -30%; left: -30%; width: 160%; height: 160%;
            z-index: 15; pointer-events: none; overflow: hidden;
        }
        
        .rain-drop {
            position: absolute; width: 2px;
            background: linear-gradient(to bottom, transparent, rgba(174, 194, 224, 0.6));
            border-radius: 1px;
            animation: rainFall linear infinite;
            will-change: transform;
        }
        
        /* 雨滴从右上向左下方向：Y向下 + X向左，无缝循环 */
        @keyframes rainFall {
            0% { 
                transform: translateY(-200px) translateX(120px); 
                opacity: 0; 
            }
            3% { 
                opacity: var(--rain-opacity, 0.5); 
            }
            97% { 
                opacity: var(--rain-opacity, 0.5); 
            }
            100% { 
                transform: translateY(calc(100vh + 200px)) translateX(-120px); 
                opacity: 0; 
            }
        }
        
        #lantern-glow-3 {
            position: absolute; top: 45%; left: 50%; transform: translate(-50%, -50%);
            width: 320px; height: 320px;
            background: radial-gradient(ellipse at center,
                rgba(255, 200, 100, 0.15) 0%, rgba(255, 180, 80, 0.08) 40%, transparent 70%);
            border-radius: 50%; z-index: 20; pointer-events: none;
            opacity: 0.3; transition: opacity 0.3s ease;
        }
        
        #text-content-3 {
            position: absolute; top: 10%; left: 6%; right: 6%; z-index: 30; opacity: 0;
            transition: opacity 1s ease;
        }
        #text-content-3.show { opacity: 1; }
        
        .content-text-3 {
            color: rgba(240, 235, 220, 0.95); font-size: 15px;
            line-height: 2; letter-spacing: 1px; text-align: justify;
        }
        
        #dialogue-quote-3 {
            position: absolute; bottom: 20%; left: 50%; transform: translateX(-50%);
            background: rgba(25, 28, 40, 0.92); border: 1px solid rgba(200, 180, 140, 0.25);
            border-radius: 18px; padding: 20px 28px; max-width: 85%; z-index: 35;
            opacity: 0; text-align: center; transition: opacity 0.8s ease;
            backdrop-filter: blur(6px);
        }
        #dialogue-quote-3.show { opacity: 1; }
        
        .quote-text-3 {
            color: rgba(240, 235, 220, 0.95); font-size: 15px;
            line-height: 1.9; letter-spacing: 1px;
        }
        
        #hint-text-3 {
            position: absolute; bottom: 8%; left: 50%; transform: translateX(-50%);
            color: rgba(200, 195, 180, 0.4); font-size: 13px; z-index: 40;
            white-space: nowrap; animation: hintBreathe 2.5s ease-in-out infinite;
        }
        @keyframes hintBreathe { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.5; } }
        
        .shake { animation: shakeIntense 0.1s ease-in-out infinite; }
        .shake-moderate { animation: shakeModerate 0.15s ease-in-out infinite; }
        .shake-light { animation: shakeLight 0.2s ease-in-out infinite; }
        
        @keyframes shakeIntense {
            0%, 100% { transform: translate(3px, 2px) rotate(0.5deg); }
            25% { transform: translate(-3px, -2px) rotate(-0.5deg); }
            50% { transform: translate(2px, -3px) rotate(0.3deg); }
            75% { transform: translate(-2px, 3px) rotate(-0.3deg); }
        }
        @keyframes shakeModerate {
            0%, 100% { transform: translate(1.5px, 1px) rotate(0.3deg); }
            50% { transform: translate(-1.5px, -1px) rotate(-0.3deg); }
        }
        @keyframes shakeLight {
            0%, 100% { transform: translate(0.5px, 0.3px) rotate(0.1deg); }
            50% { transform: translate(-0.5px, -0.3px) rotate(-0.1deg); }
        }
        
        /* ==================== 第四幕：长按蓄力 ==================== */
        #scene4 { background: #0a0a12; }
        
        #bg-container-4 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 0;
        }
        
        .bg-image-4 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover; background-position: center; opacity: 0;
            transition: opacity 0.8s ease;
        }
        #bg-4-1 { background-image: url('4-1.png'); opacity: 1; }
        #bg-4-2 { background-image: url('4-2.png'); }
        #bg-4-3 { background-image: url('4-3.png'); }
        #bg-4-4 { background-image: url('4-4.png'); }
        
        #warm-light {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(ellipse at 50% 45%, 
                rgba(255, 220, 150, 0) 0%, rgba(255, 220, 150, 0) 50%, transparent 70%);
            z-index: 8; pointer-events: none; opacity: 0; transition: opacity 1.5s ease;
        }
        #warm-light.active { opacity: 1; }
        
        #touch-area-4 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 25; cursor: pointer;
        }
        
        #text-content-4 {
            position: absolute; top: 5%; left: 6%; right: 6%; z-index: 30;
            color: rgba(240, 235, 220, 0.95); pointer-events: none; opacity: 0;
        }
        #text-content-4.visible { opacity: 1; transition: opacity 1s ease; }
        
        .text-line-4 {
            font-size: 15px; line-height: 1.9; margin-bottom: 12px;
            opacity: 0; transform: translateY(15px); text-align: justify;
            color: rgba(240, 235, 220, 0.95);
        }
        .text-line-4.show { animation: textFadeIn4 0.6s ease forwards; }
        @keyframes textFadeIn4 { to { opacity: 1; transform: translateY(0); } }
        
        #progress-container-4 {
            position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%);
            width: 200px; z-index: 35; opacity: 0; transition: opacity 0.5s ease;
        }
        #progress-container-4.show { opacity: 1; }
        
        #progress-bg-4 {
            width: 100%; height: 6px; background: rgba(80, 80, 90, 0.4);
            border-radius: 3px; overflow: hidden;
        }
        
        #progress-fill-4 {
            width: 0%; height: 100%;
            background: linear-gradient(90deg, rgba(200, 180, 120, 0.7), rgba(220, 200, 150, 0.9));
            border-radius: 3px; transition: width 0.05s linear;
        }
        
        #progress-label-4 {
            text-align: center; color: rgba(200, 195, 180, 0.5);
            font-size: 13px; margin-top: 10px;
        }
        
        #guide-text-4 {
            position: absolute; bottom: 6%; left: 50%; transform: translateX(-50%);
            color: rgba(200, 195, 180, 0.4); font-size: 13px; z-index: 35;
            white-space: nowrap; opacity: 0; animation: breatheGuide 3s ease-in-out infinite;
        }
        #guide-text-4.show { opacity: 1; }
        @keyframes breatheGuide { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.5; } }
        
        #dialogue-box-4 {
            position: absolute; bottom: 26%; left: 50%; transform: translateX(-50%) scale(0);
            background: rgba(25, 28, 38, 0.92); border: 1px solid rgba(160, 150, 130, 0.25);
            border-radius: 14px; padding: 16px 20px; max-width: 85%;
            color: rgba(240, 235, 220, 0.95); font-size: 15px; line-height: 1.8;
            z-index: 40; opacity: 0; backdrop-filter: blur(6px);
        }
        #dialogue-box-4.show { animation: dialoguePop4 0.6s ease forwards; }
        @keyframes dialoguePop4 {
            0% { opacity: 0; transform: translateX(-50%) scale(0.8); }
            100% { opacity: 1; transform: translateX(-50%) scale(1); }
        }
        #dialogue-box-4::before {
            content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%);
            border-width: 10px 10px 0; border-style: solid;
            border-color: rgba(25, 28, 38, 0.92) transparent transparent;
        }
        
        /* ==================== 第五幕：对话场景 ==================== */
        #scene5 { background: #060610; }
        
        #bg-layer-5 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: url("5.png") center center / cover no-repeat;
            z-index: 1; transition: opacity 2s ease;
        }
        
        #bg-layer-5-after {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: url("6.png") center center / cover no-repeat;
            z-index: 2; opacity: 0; transition: opacity 2s ease;
        }
        
        .dialogue-bubble {
            position: absolute; bottom: 26%;
            background: rgba(15, 18, 28, 0.92);
            border: 1px solid rgba(140, 130, 110, 0.25);
            border-radius: 14px; padding: 14px 18px;
            max-width: 75%; width: 75%; z-index: 30;
            opacity: 0; pointer-events: none; transform: scale(0);
            backdrop-filter: blur(4px);
        }
        
        .dialogue-bubble.right { right: 5%; left: auto; transform-origin: right center; }
        .dialogue-bubble.right.show { animation: bubblePopRight 0.5s ease forwards; }
        .dialogue-bubble.right.hide { animation: bubbleFadeRight 0.4s ease forwards; }
        
        .dialogue-bubble.left { left: 5%; right: auto; transform-origin: left center; }
        .dialogue-bubble.left.show { animation: bubblePopLeft 0.5s ease forwards; }
        .dialogue-bubble.left.hide { animation: bubbleFadeLeft 0.4s ease forwards; }
        
        @keyframes bubblePopRight { 0% { opacity: 0; transform: scale(0.85); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes bubbleFadeRight { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.9); } }
        @keyframes bubblePopLeft { 0% { opacity: 0; transform: scale(0.85); } 100% { opacity: 1; transform: scale(1); } }
        @keyframes bubbleFadeLeft { 0% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.9); } }
        
        .bubble-text { color: rgba(240, 235, 220, 0.95); font-size: 15px; line-height: 1.7; }
        
        #click-hint-5 {
            position: absolute; bottom: 14%; left: 50%; transform: translateX(-50%);
            color: rgba(200, 195, 180, 0.4); font-size: 13px; z-index: 35;
            white-space: nowrap; opacity: 0; pointer-events: none;
        }
        #click-hint-5.show { opacity: 1; animation: breatheHint 2.5s ease-in-out infinite; }
        @keyframes breatheHint { 0%, 100% { opacity: 0.25; } 50% { opacity: 0.5; } }
        
        /* ==================== 第六幕：破晓前行 ==================== */
        #scene6 { background: #0a0a12; }
        
        .bg-image-6 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover; background-position: center; opacity: 0;
            transition: opacity 1.8s ease;
        }
        #bg-6-1 { background-image: url('6-1.png'); opacity: 1; }
        #bg-6-2 { background-image: url('6-2.png'); }
        #bg-6-3 { background-image: url('6-3.png'); }
        #bg-6-4 { background-image: url('6-4.png'); }
        #bg-6-5 { background-image: url('6-5.png'); }
        
        #lantern-glow-6 {
            position: absolute; bottom: 10%; left: 50%; transform: translateX(-50%);
            width: 300px; height: 300px;
            background: radial-gradient(ellipse at center,
                rgba(255, 200, 100, 0.12) 0%, rgba(255, 180, 80, 0.06) 25%,
                rgba(255, 160, 60, 0.03) 50%, transparent 75%);
            border-radius: 50%; z-index: 20;
            animation: lanternBreathe 3s ease-in-out infinite;
            pointer-events: none; transition: opacity 2s ease;
        }
        @keyframes lanternBreathe {
            0%, 100% { opacity: 0.6; transform: translateX(-50%) scale(0.92); }
            50% { opacity: 0.85; transform: translateX(-50%) scale(1.08); }
        }
        
        #night-mask {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom,
                rgba(5, 5, 15, 0.9) 0%, rgba(10, 10, 25, 0.75) 40%, rgba(15, 15, 35, 0.6) 100%);
            z-index: 30; opacity: 1; transition: opacity 2.5s ease;
        }
        #night-mask.fade-out { opacity: 0; }
        
        #dawn-gradient {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(to bottom,
                rgba(255, 220, 180, 0) 0%, rgba(255, 200, 150, 0.08) 25%,
                rgba(255, 180, 130, 0.05) 50%, transparent 80%);
            z-index: 25; opacity: 0; transition: opacity 3s ease; pointer-events: none;
        }
        #dawn-gradient.fade-in { opacity: 1; }
        
        #dialogue-box-6 {
            position: absolute; bottom: 18%; left: 50%; transform: translateX(-50%) scale(0);
            background: rgba(20, 22, 30, 0.92); border: 1px solid rgba(180, 160, 120, 0.25);
            border-radius: 18px; padding: 18px 26px; max-width: 85%; z-index: 50;
            opacity: 0; text-align: center; backdrop-filter: blur(6px);
        }
        #dialogue-box-6.show { animation: dialoguePop6 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes dialoguePop6 {
            0% { opacity: 0; transform: translateX(-50%) scale(0.7) translateY(30px); }
            100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
        }
        #dialogue-box-6::before {
            content: ''; position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%);
            border-width: 12px 12px 0; border-style: solid;
            border-color: rgba(20, 22, 30, 0.92) transparent transparent;
        }
        
        .dialogue-text-6 {
            color: rgba(240, 235, 220, 0.95); font-size: 15px;
            line-height: 1.9; letter-spacing: 2px;
        }
        
        /* ==================== 第七幕：灯火相传 ==================== */
        #scene7 { background: #0a0a15; }
        
        .bg-image-7 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover; background-position: center; opacity: 0;
            transition: opacity 2s ease;
        }
        #bg-7-1 { background-image: url('7-1.png'); opacity: 1; }
        #bg-7-2 { background-image: url('7-2.png'); }
        
        #lantern-glow-7 {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            width: 400px; height: 400px;
            background: radial-gradient(ellipse at center,
                rgba(255, 200, 100, 0.2) 0%, rgba(255, 180, 80, 0.1) 30%,
                rgba(255, 160, 60, 0.05) 50%, transparent 70%);
            border-radius: 50%; z-index: 20;
            animation: lanternBreathe7 2.5s ease-in-out infinite;
            pointer-events: none;
        }
        @keyframes lanternBreathe7 {
            0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(0.9); }
            50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.1); }
        }
        
        #click-area-7 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            z-index: 40; cursor: pointer;
        }
        
        #click-hint-7 {
            position: absolute; bottom: 12%; left: 50%; transform: translateX(-50%);
            color: rgba(200, 195, 180, 0.4); font-size: 14px; z-index: 50;
            white-space: nowrap; opacity: 0; animation: breatheHint7 2.5s ease-in-out infinite;
        }
        #click-hint-7.show { opacity: 1; }
        @keyframes breatheHint7 { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.55; } }
        
        #dialogue-box-7 {
            position: absolute; bottom: 24%; left: 50%; transform: translateX(-50%) scale(0);
            background: rgba(25, 28, 40, 0.92); border: 1px solid rgba(200, 180, 140, 0.25);
            border-radius: 18px; padding: 20px 28px; max-width: 85%; z-index: 60;
            opacity: 0; text-align: center; backdrop-filter: blur(6px);
        }
        #dialogue-box-7.show { animation: dialoguePop7 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes dialoguePop7 {
            0% { opacity: 0; transform: translateX(-50%) scale(0.7) translateY(30px); }
            100% { opacity: 1; transform: translateX(-50%) scale(1) translateY(0); }
        }
        #dialogue-box-7::before {
            content: ''; position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%);
            border-width: 12px 12px 0; border-style: solid;
            border-color: rgba(25, 28, 40, 0.92) transparent transparent;
        }
        
        .dialogue-text-7 {
            color: rgba(240, 235, 220, 0.95); font-size: 15px;
            line-height: 2; letter-spacing: 1px;
        }
        
        /* ==================== 通用上滑提示 ==================== */
        .swipe-hint {
            position: absolute; bottom: 5%; left: 50%; transform: translateX(-50%);
            color: rgba(200, 195, 180, 0.5); font-size: 13px; z-index: 80;
            white-space: nowrap; opacity: 0; display: none;
        }
        .swipe-hint.show { display: block; animation: swipePulse 2s ease-in-out infinite; }
        @keyframes swipePulse {
            0%, 100% { opacity: 0.35; transform: translateX(-50%) translateY(0); }
            50% { opacity: 0.7; transform: translateX(-50%) translateY(-5px); }
        }
        
        /* 肌理遮罩 */
        .texture-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none; z-index: 100; opacity: 0.06;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }
        
        /* ==================== 第八幕：马灯人设盲盒 ==================== */
        #scene8 { background: #0a0a12; }
        
        #scene8 .bg-image-8 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: url("7-2.png") center center / cover no-repeat;
            z-index: 0;
        }
        
        #scene8 .bg-overlay-8 {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.45);
            z-index: 1;
        }
        
        .glass-modal {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.75);
            z-index: 100;
            display: flex; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none;
            transition: opacity 0.4s ease;
        }
        
        .glass-modal.active { opacity: 1; pointer-events: auto; }
        
        .glass-content {
            width: 88%; max-width: 360px;
            background: rgba(20, 20, 20, 0.8);
            border-radius: 16px;
            padding: 48px 32px;
            text-align: center;
            border: 1px solid rgba(255, 215, 0, 0.3);
            transform: scale(0.95) translateY(10px);
            transition: all 0.35s ease;
        }
        
        .glass-modal.active .glass-content { transform: scale(1) translateY(0); }
        
        .intro-icon {
            width: 70px; height: 105px;
            margin: 0 auto 24px;
        }
        
        .intro-icon img {
            width: 100%; height: 100%;
            object-fit: contain;
        }
        
        .glass-title {
            font-size: 22px; font-weight: 600;
            color: #FFD700; margin-bottom: 20px;
            letter-spacing: 4px;
        }
        
        .glass-divider {
            width: 40px; height: 1px;
            background: rgba(255, 215, 0, 0.4);
            margin: 0 auto 24px;
        }
        
        .glass-desc {
            font-size: 14px; color: rgba(255, 255, 255, 0.6);
            margin-bottom: 40px; line-height: 2;
            letter-spacing: 1px;
        }
        
        .blindbox-btn {
            background: #FFD700;
            border: none; padding: 16px 40px;
            border-radius: 8px;
            font-size: 15px; font-weight: 600;
            color: #000; cursor: pointer;
            transition: all 0.25s ease;
            letter-spacing: 2px;
        }
        
        .blindbox-btn:active {
            transform: scale(0.97);
            background: #E6C200;
        }
        
        .result-modal {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.9);
            z-index: 200;
            display: flex; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none;
            transition: opacity 0.4s ease;
        }
        
        .result-modal.active { opacity: 1; pointer-events: auto; }
        
        .result-content {
            width: 88%; max-width: 380px;
            transform: scale(0.95); opacity: 0;
            transition: all 0.4s ease 0.1s;
            position: relative;
        }
        
        .result-modal.active .result-content { transform: scale(1); opacity: 1; }
        
        .poster-card {
            background: rgba(18, 18, 18, 0.98);
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid rgba(255, 215, 0, 0.2);
        }
        
        .poster-header {
            padding: 72px 24px 20px;
            text-align: center;
            border-bottom: 1px solid rgba(255, 215, 0, 0.15);
        }
        
        .poster-title {
            font-size: 16px; color: rgba(255, 215, 0, 0.8);
            font-weight: 500; letter-spacing: 4px;
        }
        
        .poster-body {
            padding: 28px 32px 36px;
            text-align: center;
        }
        
        .character-avatar {
            width: 120px; height: 120px;
            position: absolute;
            top: -60px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(18, 18, 18, 0.98);
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            border: 2px solid rgba(255, 215, 0, 0.3);
            overflow: hidden;
            z-index: 10;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
        }
        
        .character-avatar img {
            width: 100%; height: 100%;
            object-fit: cover;
        }
        
        .character-name {
            font-size: 24px; font-weight: 600;
            color: #FFD700; margin-bottom: 14px;
            letter-spacing: 2px;
        }
        
        .character-slogan {
            font-size: 13px; color: rgba(255, 255, 255, 0.5);
            line-height: 2; padding: 0 10px;
            font-style: italic;
            letter-spacing: 1px;
        }
        
        .poster-footer {
            padding: 20px 24px;
            background: rgba(0, 0, 0, 0.3);
            display: flex; gap: 12px;
            border-top: 1px solid rgba(255, 215, 0, 0.1);
        }
        
        .action-btn {
            flex: 1; padding: 14px;
            border: none; border-radius: 8px;
            font-size: 14px; font-weight: 500;
            cursor: pointer; transition: all 0.25s ease;
            letter-spacing: 1px;
        }
        
        .save-btn {
            background: transparent;
            color: #FFD700; border: 1px solid rgba(255, 215, 0, 0.4);
        }
        
        .save-btn:active { background: rgba(255, 215, 0, 0.1); }
        
        .share-btn {
            background: #FFD700;
            color: #000; border: none;
        }
        
        .action-btn:active { transform: scale(0.97); }
        
        /* 互换身份弹窗 */
        .match-modal {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.92);
            z-index: 260;
            display: flex; align-items: center; justify-content: center;
            opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
        }
        
        .match-modal.active { opacity: 1; pointer-events: auto; }
        
        .match-content {
            width: 88%; max-width: 360px;
            background: rgba(18, 18, 18, 0.98);
            border-radius: 16px;
            padding: 36px 28px;
            text-align: center;
            border: 1px solid rgba(255, 215, 0, 0.2);
            transform: scale(0.95);
            transition: transform 0.3s ease;
        }
        
        .match-modal.active .match-content { transform: scale(1); }
        
        .match-title {
            font-size: 20px; font-weight: 600;
            color: #FFD700; margin-bottom: 8px;
            letter-spacing: 2px;
        }
        
        .match-subtitle {
            font-size: 13px; color: rgba(255, 255, 255, 0.5);
            margin-bottom: 28px;
        }
        
        .match-avatars {
            display: flex; align-items: center; justify-content: center;
            gap: 20px; margin-bottom: 24px;
        }
        
        .match-avatar-item {
            text-align: center;
        }
        
        .match-avatar-item img {
            width: 80px; height: 80px;
            border-radius: 50%;
            border: 2px solid rgba(255, 215, 0, 0.3);
            object-fit: cover;
        }
        
        .match-avatar-label {
            font-size: 14px; color: #FFD700;
            margin-top: 10px; font-weight: 600;
        }
        
        .match-vs {
            font-size: 18px; color: rgba(255, 215, 0, 0.6);
            font-weight: bold;
        }
        
        .match-result-text {
            font-size: 15px; color: rgba(255, 255, 255, 0.8);
            line-height: 1.8; margin-bottom: 28px;
            padding: 16px;
            background: rgba(255, 215, 0, 0.05);
            border-radius: 10px;
            border: 1px solid rgba(255, 215, 0, 0.1);
        }
        
        .match-result-text .highlight {
            color: #FFD700; font-weight: 600;
        }
        
        .match-actions {
            display: flex; gap: 12px;
        }
        
        .match-btn {
            flex: 1; padding: 14px;
            border: none; border-radius: 8px;
            font-size: 14px; font-weight: 500;
            cursor: pointer; transition: all 0.25s ease;
            letter-spacing: 1px;
        }
        
        .match-reroll-btn {
            background: transparent;
            color: #FFD700; border: 1px solid rgba(255, 215, 0, 0.4);
        }
        
        .match-share-btn {
            background: #FFD700;
            color: #000; border: none;
        }
        
        .match-btn:active { transform: scale(0.97); }
        
        .match-close {
            position: absolute; top: 20px; right: 20px;
            width: 40px; height: 40px;
            background: transparent;
            border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 50%;
            color: rgba(255, 215, 0, 0.6); font-size: 20px;
            cursor: pointer; display: flex;
            align-items: center; justify-content: center;
        }
        
        .close-result {
            position: absolute; top: 24px; right: 24px;
            width: 40px; height: 40px;
            background: transparent;
            border: 1px solid rgba(255, 215, 0, 0.3); border-radius: 50%;
            color: rgba(255, 215, 0, 0.6); font-size: 20px;
            cursor: pointer; display: flex; align-items: center; justify-content: center;
            transition: all 0.25s ease;
        }
        
        .close-result:active { 
            background: rgba(255, 215, 0, 0.1);
            color: #FFD700;
        }
        
        .poster-preview-modal {
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 250;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            opacity: 0; pointer-events: none;
            transition: opacity 0.3s ease;
        }
        
        .poster-preview-modal.active { opacity: 1; pointer-events: auto; }
        
        .poster-preview-modal canvas {
            max-width: 85%; max-height: 65vh;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        
        .poster-actions {
            margin-top: 24px;
            display: flex; gap: 16px;
        }
        
        .poster-action-btn {
            padding: 12px 28px;
            border-radius: 8px;
            font-size: 14px; font-weight: 500;
            cursor: pointer; transition: all 0.25s ease;
            letter-spacing: 1px;
        }
        
        .poster-close-btn {
            background: transparent;
            color: rgba(255, 255, 255, 0.6);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .poster-download-btn {
            background: #FFD700;
            color: #000; border: none;
        }
        
        .poster-action-btn:active { transform: scale(0.97); }
        
        .loading-overlay-8 {
            position: fixed; top: 0; left: 0;
            width: 100%; height: 100%;
            background: rgba(0, 0, 0, 0.85);
            z-index: 150;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            opacity: 0; pointer-events: none;
            transition: opacity 0.4s ease;
        }
        
        .loading-overlay-8.active { opacity: 1; pointer-events: auto; }
        
        .loading-sketch {
            width: 80px; height: 120px;
            opacity: 0;
            animation: sketchFadeIn 0.8s ease forwards;
        }
        
        @keyframes sketchFadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .loading-sketch img {
            width: 100%; height: 100%;
            object-fit: contain;
        }
        
        .loading-text {
            color: rgba(255, 255, 25, 0.6); margin-top: 32px;
            font-size: 13px; letter-spacing: 3px;
            opacity: 0;
            animation: textFadeIn8 0.6s ease 0.4s forwards;
        }
        
        @keyframes textFadeIn8 {
            0% { opacity: 0; transform: translateY(8px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .toast-8 {
            position: fixed; bottom: 100px; left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: rgba(20, 20, 20, 0.95);
            color: rgba(255, 215, 0, 0.9); padding: 14px 28px;
            border-radius: 8px; font-size: 13px;
            border: 1px solid rgba(255, 215, 0, 0.2);
            opacity: 0; pointer-events: none;
            transition: all 0.3s ease;
            z-index: 300;
            letter-spacing: 1px;
        }
        
        .toast-8.show {
            opacity: 1; transform: translateX(-50%) translateY(0);
        }
    </style>
</head>
<body>
    <div class="texture-overlay"></div>
    
    <!-- 第一幕：封面 -->
    <div id="scene1" class="scene">
        <div class="text-content">
            <h1 class="main-title">一盏马灯照亮长征路</h1>
            <p class="sub-title">以微光赴长路，以坚守赴初心</p>
        </div>
        <div id="hit-area">
            <div class="glow-effect"></div>
        </div>
        <div class="bottom-area">
            <p class="hint-text">点亮马灯，解锁一段温暖又滚烫的长征往事</p>
            <div id="progress-container">
                <div id="progress-bar"></div>
            </div>
        </div>
        <div class="swipe-hint" id="swipe-1">👆 上滑继续</div>
    </div>
    
    <!-- 第二幕：绝境征途 -->
    <div id="scene2" class="scene">
        <div id="dark-overlay"></div>
        <div id="bg-image-container"></div>
        <canvas id="fog-canvas"></canvas>
        <canvas id="water-drops"></canvas>
        
        <div id="text-content">
            <p class="text-line" data-delay="0">八十多年前，我行走在长征路上。</p>
            <p class="text-line" data-delay="800">脚下没有平坦大道，眼前没有明亮灯火，只有无边黑夜、刺骨寒风，还有藏在暗处的沼泽与泥泞。</p>
            <p class="text-line" data-delay="1600">黑夜于我而言，不只是漆黑，更是步步未知的生死考验。</p>
            <p class="text-line" data-delay="2400">我不是什么传奇英雄，只是心怀信仰的普通年轻战士，</p>
            <p class="text-line" data-delay="3200">而照亮我和同伴前路的，只有手里这盏锈迹斑斑的小小马灯。</p>
        </div>
        
        <div id="guide-text">👆 轻扫拨开浓雾，探寻未知前路</div>
        
        <div id="dialogue-box">
            <div>草地处处藏险，多探明一寸前路，队伍便多一分平安。</div>
        </div>
        
        <div id="fog-progress"><div id="fog-progress-bar"></div></div>
        <div id="clear-percent">已探明: 0%</div>
        <div class="swipe-hint" id="swipe-2">👆 上滑继续征途</div>
    </div>
    
    <!-- 第三幕：风雨护灯 -->
    <div id="scene3" class="scene">
        <div id="bg-3-1" class="bg-image-scene3"></div>
        <div id="bg-3-2" class="bg-image-scene3"></div>
        <div id="rain-container"></div>
        <div id="lantern-glow-3"></div>
        
        <div id="text-content-3">
            <p class="content-text-3">
                暴雨冲刷着整片草地，泥水漫满脚下路面，每一滴雨水都狠狠砸落。夜色浓黑如墨，伸手不见五指。队伍里有稚气未脱的新兵，也有满身伤痕的伤员，所有人早已疲惫到极致。雨水不断打湿我的衣帽与脊背，我只能弯腰俯身，紧紧护住怀里老旧的马灯。灯架生锈、玻璃磨损，煤油所剩无几，一旦灯火被雨水浇灭，整支队伍就会彻底困在漆黑凶险的草地之中。寒风浸透衣衫，泥水浸泡伤口，疲惫与绝望，一点点压在我们每个人心上。
            </p>
        </div>
        
        <div id="dialogue-quote-3">
            <p class="quote-text-3">风再大、雨再冷，只要马灯不灭，我们的心就不能乱、脚步就不能停。</p>
        </div>
        
        <div id="hint-text-3">放平手机，稳住飘摇灯火</div>
        <div class="swipe-hint" id="swipe-3">👆 上滑翻页</div>
    </div>
    
    <!-- 第四幕：长按蓄力 -->
    <div id="scene4" class="scene">
        <div id="bg-container-4">
            <div id="bg-4-1" class="bg-image-4"></div>
            <div id="bg-4-2" class="bg-image-4"></div>
            <div id="bg-4-3" class="bg-image-4"></div>
            <div id="bg-4-4" class="bg-image-4"></div>
        </div>
        <div id="warm-light"></div>
        <div id="touch-area-4"></div>
        
        <div id="text-content-4">
            <p class="text-line-4" data-delay="0">刚刚的狂风暴雨终于停歇，我弯腰护住的灯火侥幸不灭。</p>
            <p class="text-line-4" data-delay="700">可放眼望去，漆黑的草地无边无际，脚下尽是沼泽泥泞，一旦迷失方向，整支队伍都会深陷绝境。</p>
            <p class="text-line-4" data-delay="1400">身后的战友早已筋疲力尽、伤痕累累，没人再能探路前行。</p>
            <p class="text-line-4" data-delay="2100">我挺直酸痛的腰背，走到队伍最前方，哪怕手臂僵硬、身心俱疲，我也要把这唯一的微光高高举起，为所有人照亮凶险未知的前路。</p>
        </div>
        
        <div id="progress-container-4">
            <div id="progress-bg-4"><div id="progress-fill-4"></div></div>
            <div id="progress-label-4">长按蓄力中...</div>
        </div>
        <div id="guide-text-4">长按画面，缓缓站起</div>
        
        <div id="dialogue-box-4">
            <div>守住灯火，不止是守住光亮，更是守住我们所有人前行的希望。</div>
        </div>
        <div class="swipe-hint" id="swipe-4">👆 上滑继续</div>
    </div>
    
    <!-- 第五幕：对话场景 -->
    <div id="scene5" class="scene">
        <div id="bg-layer-5"></div>
        <div id="bg-layer-5-after"></div>
        <div id="click-hint-5">点击继续对话</div>
        
        <div id="dialogue-area-1" class="dialogue-bubble right">
            <div class="bubble-text">"我实在走不动了，你们别管我，先走吧……"</div>
        </div>
        <div id="dialogue-area-1b" class="dialogue-bubble left">
            <div class="bubble-text">"别瞎说，我们是战友，哪能丢下你！"</div>
        </div>
        <div id="dialogue-area-2" class="dialogue-bubble right">
            <div class="bubble-text">"我这身子，怕是撑不到天亮了……"</div>
        </div>
        <div id="dialogue-area-2b" class="dialogue-bubble left">
            <div class="bubble-text">"有我在，灯还亮着，咱们一起走，绝不落下你！"</div>
        </div>
        <div class="swipe-hint" id="swipe-5">👆 上滑继续</div>
    </div>
    
    <!-- 第六幕：破晓前行 -->
    <div id="scene6" class="scene">
        <div id="bg-6-1" class="bg-image-6"></div>
        <div id="bg-6-2" class="bg-image-6"></div>
        <div id="bg-6-3" class="bg-image-6"></div>
        <div id="bg-6-4" class="bg-image-6"></div>
        <div id="bg-6-5" class="bg-image-6"></div>
        <div id="lantern-glow-6"></div>
        <div id="dawn-gradient"></div>
        <div id="night-mask"></div>
        
        <div id="dialogue-box-6">
            <div class="dialogue-text-6">一步一痕踏泥泞，终见微光破长夜。</div>
        </div>
        <div class="swipe-hint" id="swipe-6">👆 上滑继续</div>
    </div>
    
    <!-- 第七幕：灯火相传 -->
    <div id="scene7" class="scene">
        <div id="bg-7-1" class="bg-image-7"></div>
        <div id="bg-7-2" class="bg-image-7"></div>
        <div id="lantern-glow-7"></div>
        <div id="click-area-7"></div>
        <div id="click-hint-7">点击屏幕，点燃传承之火</div>
        
        <div id="dialogue-box-7">
            <div class="dialogue-text-7">一盏马灯，照亮了来时的路；<br>万千灯火，正照亮我们前行的方向。</div>
        </div>
        <div class="swipe-hint" id="swipe-7">👆 上滑开启人设盲盒</div>
    </div>
    
    <!-- 第八幕：马灯人设盲盒 -->
    <div id="scene8" class="scene">
        <div class="bg-image-8"></div>
        <div class="bg-overlay-8"></div>
        
        <div class="glass-modal active" id="introModal">
            <div class="glass-content">
                <div class="intro-icon">
                    <img src="8-11.png" alt="马灯">
                </div>
                <div class="glass-title">马灯人设解锁</div>
                <div class="glass-divider"></div>
                <div class="glass-desc">
                    穿越百年时光，寻找你的长征精神化身<br>
                    每一盏马灯，都照亮一种独特的人格光芒
                </div>
                <button class="blindbox-btn" onclick="openBlindbox()">
                    开启我的马灯人设盲盒
                </button>
            </div>
        </div>
        
        <div class="loading-overlay-8" id="loadingOverlay">
            <div class="loading-sketch">
                <img src="2.png" alt="马灯">
            </div>
            <div class="loading-text">正在寻找你的精神化身...</div>
        </div>
        
        <div class="result-modal" id="resultModal">
            <button class="close-result" onclick="closeResult()">×</button>
            <div class="result-content">
                <div class="character-avatar" id="characterAvatar"><img src="" alt="人设"></div>
                <div class="poster-card" id="posterCard">
                    <div class="poster-header">
                        <div class="poster-title">我的马灯人设</div>
                    </div>
                    <div class="poster-body">
                        <div class="character-name" id="characterName">-</div>
                        <div class="character-slogan" id="characterSlogan">-</div>
                    </div>
                    <div class="poster-footer">
                        <button class="action-btn save-btn" onclick="savePoster()">保存海报</button>
                        <button class="action-btn share-btn" onclick="sharePoster()">分享好友</button>
                    </div>
                    <div style="padding: 12px 24px 20px; background: rgba(0,0,0,0.3); border-top: 1px solid rgba(255,215,0,0.1);">
                        <button class="action-btn" style="width:100%; background: transparent; color: rgba(255,215,0,0.7); border: 1px solid rgba(255,215,0,0.2); padding: 12px; font-size: 13px;" onclick="openMatch()">互换身份 · 组队匹配</button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 互换身份/组队匹配弹窗 -->
        <div class="match-modal" id="matchModal">
            <button class="match-close" onclick="closeMatch()">×</button>
            <div class="match-content">
                <div class="match-title">互换身份 · 组队匹配</div>
                <div class="match-subtitle">看看你和好友能组成怎样的长征搭档</div>
                <div class="match-avatars">
                    <div class="match-avatar-item">
                        <img id="matchAvatarMe" src="" alt="我">
                        <div class="match-avatar-label" id="matchNameMe">-</div>
                    </div>
                    <div class="match-vs">&</div>
                    <div class="match-avatar-item">
                        <img id="matchAvatarFriend" src="" alt="好友">
                        <div class="match-avatar-label" id="matchNameFriend">-</div>
                    </div>
                </div>
                <div class="match-result-text" id="matchResultText">-</div>
                <div class="match-actions">
                    <button class="match-btn match-reroll-btn" onclick="rerollMatch()">换一个队友</button>
                    <button class="match-btn match-share-btn" onclick="shareMatch()">分享组队</button>
                </div>
            </div>
        </div>
        
        <div class="poster-preview-modal" id="posterPreview">
            <canvas id="posterCanvas" width="750" height="1334"></canvas>
            <div class="poster-actions">
                <button class="poster-action-btn poster-close-btn" onclick="closePosterPreview()">关闭</button>
                <button class="poster-action-btn poster-download-btn" onclick="downloadPoster()">保存图片</button>
            </div>
        </div>
        
        <div class="toast-8" id="toast8"></div>
    </div>
    
    <script>
        let currentScene = 1;
        let swipeEnabled = false;
        document.body.style.fontFamily = '"PingFang SC", "Microsoft YaHei", "Songti SC", "SimSun", serif';
        
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
        
        // 第一幕
        let scene1Progress = 0;
        let scene1AnimFrame = null;
        let scene1StartTime = 0;
        const scene1RequiredTime = 1500;
        
        function initScene1() {
            setTimeout(() => document.getElementById('scene1').classList.add('active'), 100);
            const hitArea = document.getElementById('hit-area');
            const progressBar = document.getElementById('progress-bar');
            const progressContainer = document.getElementById('progress-container');
            const hintText = document.querySelector('#scene1 .hint-text');
            
            function startPress(e) {
                e.preventDefault();
                scene1StartTime = Date.now();
                progressContainer.style.opacity = '1';
                updateScene1Progress();
            }
            
            function endPress(e) {
                e.preventDefault();
                cancelAnimationFrame(scene1AnimFrame);
                if (scene1Progress < 100) {
                    progressContainer.style.opacity = '0';
                    progressBar.style.width = '0%';
                    scene1Progress = 0;
                }
            }
            
            function updateScene1Progress() {
                const elapsed = Date.now() - scene1StartTime;
                scene1Progress = Math.min((elapsed / scene1RequiredTime) * 100, 100);
                progressBar.style.width = scene1Progress + '%';
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
                setTimeout(() => {
                    document.getElementById('swipe-1').classList.add('show');
                    swipeEnabled = true;
                }, 1500);
            }
            
            hitArea.addEventListener('touchstart', startPress, {passive: false});
            hitArea.addEventListener('touchend', endPress);
            hitArea.addEventListener('touchcancel', endPress);
            hitArea.addEventListener('mousedown', startPress);
            hitArea.addEventListener('mouseup', endPress);
            hitArea.addEventListener('mouseleave', endPress);
        }
        
        // 第二幕 - 雨滴Canvas铺满全屏，方向从右上向左下
        let scene2Initialized = false;
        let clearPercent = 0;
        let isScene2Cleared = false;
        let lastX = 0, lastY = 0, isDrawing = false;
        
        const fogCanvas = document.getElementById('fog-canvas');
        const fogCtx = fogCanvas.getContext('2d');
        const waterCanvas = document.getElementById('water-drops');
        const waterCtx = waterCanvas.getContext('2d');
        let waterDrops = [];
        
        function initScene2() {
            if (scene2Initialized) return;
            scene2Initialized = true;
            resizeCanvas();
            initTouchEvents();
            setTimeout(() => {
                document.getElementById('guide-text').classList.add('show');
                document.getElementById('fog-progress').classList.add('show');
                document.getElementById('clear-percent').classList.add('show');
            }, 500);
        }
        
        function resizeCanvas() {
            const dpr = window.devicePixelRatio || 1;
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            fogCanvas.width = width * dpr;
            fogCanvas.height = height * dpr;
            fogCanvas.style.width = width + 'px';
            fogCanvas.style.height = height + 'px';
            fogCtx.scale(dpr, dpr);
            
            // 雨滴Canvas铺满全屏
            waterCanvas.width = width * dpr;
            waterCanvas.height = height * dpr;
            waterCanvas.style.width = width + 'px';
            waterCanvas.style.height = height + 'px';
            waterCtx.scale(dpr, dpr);
            
            drawInitialFog();
        }
        
        function drawInitialFog() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            const gradient = fogCtx.createLinearGradient(0, 0, 0, height);
            gradient.addColorStop(0, 'rgba(180, 185, 195, 0.92)');
            gradient.addColorStop(0.3, 'rgba(160, 165, 175, 0.95)');
            gradient.addColorStop(0.6, 'rgba(140, 145, 155, 0.97)');
            gradient.addColorStop(1, 'rgba(120, 125, 135, 0.98)');
            
            fogCtx.fillStyle = gradient;
            fogCtx.fillRect(0, 0, width, height);
            
            const imageData = fogCtx.getImageData(0, 0, width, height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                const noise = (Math.random() - 0.5) * 20;
                data[i] = Math.min(255, Math.max(0, data[i] + noise));
                data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
                data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
            }
            fogCtx.putImageData(imageData, 0, 0);
            startWaterDrops();
        }
        
        function startWaterDrops() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            // 增加雨滴数量，确保全屏铺满
            const dropCount = 180;
            
            for (let i = 0; i < dropCount; i++) {
                // 扩大初始分布范围，包括屏幕上方和右侧外部区域
                waterDrops.push({
                    x: Math.random() * (width + 200) - 100, // 扩展到屏幕左右外
                    y: Math.random() * (height + 300) - 300, // 扩展到屏幕上方外
                    length: 12 + Math.random() * 28, // 随机长度 12-40px
                    speed: 6 + Math.random() * 10, // 随机速度 6-16px/frame
                    opacity: 0.2 + Math.random() * 0.35, // 随机透明度 0.2-0.55
                    width: 1 + Math.random() * 1.5 // 随机粗细 1-2.5px
                });
            }
            animateWaterDrops();
        }
        
        function animateWaterDrops() {
            if (currentScene !== 2) return;
            
            const width = window.innerWidth;
            const height = window.innerHeight;
            
            waterCtx.clearRect(0, 0, width, height);
            
            waterDrops.forEach(drop => {
                waterCtx.beginPath();
                waterCtx.strokeStyle = `rgba(200, 210, 230, ${drop.opacity})`;
                waterCtx.lineWidth = drop.width || 1.5;
                waterCtx.lineCap = 'round';
                
                // 从右上向左下：Y向下 + X向左（负值）
                // 角度约为22度 (tan(22°) ≈ 0.4)
                const angleX = -0.45; // 向左偏移系数
                const angleY = 1;     // 向下
                
                waterCtx.moveTo(drop.x, drop.y);
                waterCtx.lineTo(drop.x + drop.length * angleX, drop.y + drop.length * angleY);
                waterCtx.stroke();
                
                // 更新位置
                drop.y += drop.speed;
                drop.x += drop.speed * angleX;
                
                // 边界检查：无缝循环
                // 当雨滴完全移出屏幕底部或左侧时，从顶部或右侧重新出现
                const buffer = drop.length * 2;
                
                if (drop.y > height + buffer) {
                    // 从顶部重新出现，随机X位置（包括屏幕右侧外部）
                    drop.y = -buffer - Math.random() * 100;
                    drop.x = Math.random() * (width + 150);
                }
                
                if (drop.x < -buffer - 50) {
                    // 从右侧重新出现
                    drop.x = width + buffer + Math.random() * 100;
                    drop.y = Math.random() * (height + 100) - 50;
                }
            });
            
            requestAnimationFrame(animateWaterDrops);
        }
        
        function initTouchEvents() {
            function getPosition(e) {
                const rect = fogCanvas.getBoundingClientRect();
                if (e.touches) {
                    return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
                }
                return { x: e.clientX - rect.left, y: e.clientY - rect.top };
            }
            
            function eraseFog(x, y) {
                const brushSize = 50;
                fogCtx.globalCompositeOperation = 'destination-out';
                const gradient = fogCtx.createRadialGradient(x, y, 0, x, y, brushSize);
                gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
                gradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.8)');
                gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
                fogCtx.fillStyle = gradient;
                fogCtx.beginPath();
                fogCtx.arc(x, y, brushSize, 0, Math.PI * 2);
                fogCtx.fill();
                
                if (lastX && lastY) {
                    const dist = Math.sqrt(Math.pow(x - lastX, 2) + Math.pow(y - lastY, 2));
                    const steps = Math.ceil(dist / 10);
                    for (let i = 0; i < steps; i++) {
                        const t = i / steps;
                        fogCtx.beginPath();
                        fogCtx.arc(lastX + (x - lastX) * t, lastY + (y - lastY) * t, brushSize * 0.8, 0, Math.PI * 2);
                        fogCtx.fill();
                    }
                }
                
                fogCtx.globalCompositeOperation = 'source-over';
                lastX = x; lastY = y;
                updateClearProgress();
            }
            
            fogCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); isDrawing = true; const pos = getPosition(e); lastX = pos.x; lastY = pos.y; eraseFog(pos.x, pos.y); }, {passive: false});
            fogCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); if (!isDrawing) return; const pos = getPosition(e); eraseFog(pos.x, pos.y); }, {passive: false});
            fogCanvas.addEventListener('touchend', () => { isDrawing = false; lastX = 0; lastY = 0; });
            fogCanvas.addEventListener('mousedown', (e) => { isDrawing = true; const pos = getPosition(e); lastX = pos.x; lastY = pos.y; eraseFog(pos.x, pos.y); });
            fogCanvas.addEventListener('mousemove', (e) => { if (!isDrawing) return; const pos = getPosition(e); eraseFog(pos.x, pos.y); });
            fogCanvas.addEventListener('mouseup', () => { isDrawing = false; lastX = 0; lastY = 0; });
            fogCanvas.addEventListener('mouseleave', () => { isDrawing = false; lastX = 0; lastY = 0; });
        }
        
        function updateClearProgress() {
            const width = window.innerWidth;
            const height = window.innerHeight;
            const imageData = fogCtx.getImageData(0, 0, width, height);
            const data = imageData.data;
            let transparentPixels = 0;
            for (let i = 3; i < data.length; i += 4) {
                if (data[i] < 128) transparentPixels++;
            }
            clearPercent = Math.round((transparentPixels / (width * height)) * 100);
            document.getElementById('fog-progress-bar').style.width = clearPercent + '%';
            document.getElementById('clear-percent').textContent = '已探明: ' + clearPercent + '%';
            
            if (clearPercent >= 80 && !isScene2Cleared) {
                triggerScene2Clear();
            }
        }
        
        function triggerScene2Clear() {
            isScene2Cleared = true;
            fogCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            document.getElementById('dark-overlay').classList.add('cleared');
            document.getElementById('bg-image-container').classList.add('visible');
            document.getElementById('fog-progress').style.opacity = '0';
            document.getElementById('clear-percent').style.opacity = '0';
            document.getElementById('guide-text').classList.remove('show');
            setTimeout(() => showScene2Text(), 500);
        }
        
        function showScene2Text() {
            const textContent = document.getElementById('text-content');
            textContent.classList.add('visible');
            const lines = textContent.querySelectorAll('.text-line');
            let totalDelay = 0;
            lines.forEach((line) => {
                const delay = parseInt(line.dataset.delay) || 0;
                totalDelay = Math.max(totalDelay, delay + 800);
                setTimeout(() => line.classList.add('show'), delay);
            });
            setTimeout(() => document.getElementById('dialogue-box').classList.add('show'), totalDelay + 500);
            setTimeout(() => {
                document.getElementById('swipe-2').classList.add('show');
                swipeEnabled = true;
            }, totalDelay + 3000);
        }
        
        // 第三幕 - 雨丝铺满全屏，从右上向左下，随陀螺仪变化
        let scene3Initialized = false;
        let isStable3 = false;
        let currentLevel3 = 3;
        
        function initScene3() {
            if (scene3Initialized) return;
            scene3Initialized = true;
            createRainDrops();
            updateScene3Level(3);
            setRainIntensity3(3);
            setTimeout(() => document.getElementById('text-content-3').classList.add('show'), 1500);
            
            if (window.DeviceOrientationEvent) {
                if (typeof DeviceOrientationEvent.requestPermission === 'function') {
                    document.addEventListener('click', requestGyroPermission3, { once: true });
                } else {
                    window.addEventListener('deviceorientation', handleOrientation3);
                }
            }
        }
        
        function createRainDrops() {
            const rainContainer = document.getElementById('rain-container');
            rainContainer.innerHTML = ''; // 清空之前的雨滴
            
            // 增加雨滴数量确保全屏铺满，无空白区域
            const dropCount = 200;
            
            for (let i = 0; i < dropCount; i++) {
                const drop = document.createElement('div');
                drop.className = 'rain-drop';
                
                // 扩大分布范围到整个容器（包括溢出区域）
                // 使用百分比定位，覆盖更大的区域
                drop.style.left = (Math.random() * 140 - 20) + '%';
                drop.style.top = (Math.random() * 140 - 20) + '%';
                
                // 随机高度 15-45px
                const height = 15 + Math.random() * 30;
                drop.style.height = height + 'px';
                
                // 随机动画时长 0.3-1.2s（基础速度）
                drop.style.animationDuration = (0.3 + Math.random() * 0.9) + 's';
                
                // 随机延迟 -3s 到 0s，确保动画开始时就有雨滴分布
                drop.style.animationDelay = (-Math.random() * 3) + 's';
                
                // 使用CSS变量控制透明度，便于后续交互调整
                const opacity = 0.3 + Math.random() * 0.3;
                drop.style.setProperty('--rain-opacity', opacity);
                drop.style.opacity = opacity;
                
                // 随机粗细
                drop.style.width = (1 + Math.random() * 1.5) + 'px';
                
                rainContainer.appendChild(drop);
            }
        }
        
        function setRainIntensity3(level) {
            const rainDrops = document.querySelectorAll('#rain-container .rain-drop');
            
            // 根据级别设置不同的雨滴参数
            const config = {
                3: { // 剧烈 - 快速、密集、明显
                    durationMin: 0.15, durationMax: 0.35,
                    opacityMin: 0.55, opacityMax: 0.85,
                    widthMin: 1.8, widthMax: 2.5,
                    heightMin: 25, heightMax: 50
                },
                2: { // 中等 - 适中速度
                    durationMin: 0.5, durationMax: 0.9,
                    opacityMin: 0.4, opacityMax: 0.6,
                    widthMin: 1.5, widthMax: 2,
                    heightMin: 18, heightMax: 38
                },
                1: { // 轻微 - 缓慢、稀疏、淡
                    durationMin: 1.0, durationMax: 1.8,
                    opacityMin: 0.2, opacityMax: 0.35,
                    widthMin: 1, widthMax: 1.5,
                    heightMin: 12, heightMax: 25
                },
                0: { // 静止 - 极慢、极淡、几乎不可见
                    durationMin: 3.0, durationMax: 5.0,
                    opacityMin: 0.03, opacityMax: 0.1,
                    widthMin: 0.5, widthMax: 1,
                    heightMin: 8, heightMax: 15
                }
            };
            
            const cfg = config[level];
            
            rainDrops.forEach((drop, index) => {
                // 使用随机分布，但保持平滑过渡
                const randomFactor = (index % 10) / 10; // 0-1之间的值
                
                // 动画时长
                const duration = cfg.durationMin + Math.random() * (cfg.durationMax - cfg.durationMin);
                drop.style.animationDuration = duration + 's';
                
                // 透明度 - 使用CSS变量和style同时设置
                const opacity = cfg.opacityMin + Math.random() * (cfg.opacityMax - cfg.opacityMin);
                drop.style.setProperty('--rain-opacity', opacity);
                drop.style.opacity = opacity;
                
                // 粗细
                const width = cfg.widthMin + Math.random() * (cfg.widthMax - cfg.widthMin);
                drop.style.width = width + 'px';
                
                // 长度
                const height = cfg.heightMin + Math.random() * (cfg.heightMax - cfg.heightMin);
                drop.style.height = height + 'px';
            });
        }
        
        function requestGyroPermission3() {
            DeviceOrientationEvent.requestPermission()
                .then(response => {
                    if (response === 'granted') {
                        window.addEventListener('deviceorientation', handleOrientation3);
                    }
                })
                .catch(console.error);
        }
        
        function handleOrientation3(event) {
            if (isStable3) return;
            const beta = Math.abs(event.beta || 0);
            const gamma = Math.abs(event.gamma || 0);
            const tilt = Math.sqrt(beta * beta + gamma * gamma);
            let newLevel;
            if (tilt < 10) newLevel = 0;
            else if (tilt < 25) newLevel = 1;
            else if (tilt < 45) newLevel = 2;
            else newLevel = 3;
            
            if (newLevel !== currentLevel3) {
                currentLevel3 = newLevel;
                updateScene3Level(newLevel);
                setRainIntensity3(newLevel);
            }
        }
        
        function updateScene3Level(level) {
            const container = document.getElementById('scene3');
            const lanternGlow = document.getElementById('lantern-glow-3');
            const bg2 = document.getElementById('bg-3-2');
            
            container.classList.remove('shake', 'shake-moderate', 'shake-light');
            
            switch(level) {
                case 3:
                    container.classList.add('shake');
                    lanternGlow.style.opacity = '0.25';
                    lanternGlow.style.filter = 'blur(6px)';
                    break;
                case 2:
                    container.classList.add('shake-moderate');
                    lanternGlow.style.opacity = '0.4';
                    lanternGlow.style.filter = 'blur(4px)';
                    break;
                case 1:
                    container.classList.add('shake-light');
                    lanternGlow.style.opacity = '0.6';
                    lanternGlow.style.filter = 'blur(2px)';
                    break;
                case 0:
                    lanternGlow.style.opacity = '1';
                    lanternGlow.style.filter = 'blur(0)';
                    bg2.style.opacity = '1';
                    document.getElementById('hint-text-3').style.display = 'none';
                    if (!isStable3) stabilizeScene3();
                    break;
            }
        }
        
        function stabilizeScene3() {
            isStable3 = true;
            setTimeout(() => document.getElementById('dialogue-quote-3').classList.add('show'), 800);
            setTimeout(() => {
                document.getElementById('swipe-3').classList.add('show');
                swipeEnabled = true;
            }, 2500);
            playSound3();
        }
        
        function playSound3() {
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                [392, 493.88, 587.33].forEach((freq, index) => {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
                    gain.gain.setValueAtTime(0, audioCtx.currentTime);
                    gain.gain.linearRampToValueAtTime(0.05, audioCtx.currentTime + 0.5);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 2);
                    osc.start(audioCtx.currentTime);
                    osc.stop(audioCtx.currentTime + 2);
                });
            } catch (e) {}
        }
        
        // 第四幕
        let scene4Initialized = false;
        let isPressed4 = false;
        let pressStartTime4 = 0;
        let currentPhase4 = 1;
        const THRESHOLD_TIME_4 = 1600; // 放慢速度：从800ms改为1600ms
        
        function initScene4() {
            if (scene4Initialized) return;
            scene4Initialized = true;
            
            const touchArea = document.getElementById('touch-area-4');
            const progressFill = document.getElementById('progress-fill-4');
            const progressLabel = document.getElementById('progress-label-4');
            const guideText = document.getElementById('guide-text-4');
            
            setTimeout(() => {
                document.getElementById('progress-container-4').classList.add('show');
                guideText.classList.add('show');
            }, 1500);
            
            function startPress(e) {
                if (e.type === 'touchstart') e.preventDefault();
                isPressed4 = true;
                pressStartTime4 = Date.now();
                guideText.style.opacity = '0.3';
                progressLabel.textContent = '长按蓄力中...';
                requestAnimationFrame(updatePressProgress4);
            }
            
            function updatePressProgress4() {
                if (!isPressed4) return;
                const elapsed = Date.now() - pressStartTime4;
                const progress = Math.min(elapsed / THRESHOLD_TIME_4 * 100, 100);
                progressFill.style.width = progress + '%';
                
                // 4阶段背景变化：25% → 50% → 75% → 100%
                if (progress >= 25 && currentPhase4 === 1) {
                    currentPhase4 = 2;
                    document.getElementById('bg-4-1').style.opacity = '0';
                    document.getElementById('bg-4-2').style.opacity = '1';
                }
                
                if (progress >= 50 && currentPhase4 === 2) {
                    currentPhase4 = 3;
                    document.getElementById('bg-4-2').style.opacity = '0';
                    document.getElementById('bg-4-3').style.opacity = '1';
                }
                
                if (progress >= 75 && currentPhase4 === 3) {
                    currentPhase4 = 4;
                    document.getElementById('bg-4-3').style.opacity = '0';
                    document.getElementById('bg-4-4').style.opacity = '1';
                }
                
                if (progress >= 100) {
                    completeScene4();
                    return;
                }
                requestAnimationFrame(updatePressProgress4);
            }
            
            function endPress(e) {
                if (!isPressed4) return;
                isPressed4 = false;
                const elapsed = Date.now() - pressStartTime4;
                
                if (elapsed < THRESHOLD_TIME_4) {
                    progressFill.style.width = '0%';
                    guideText.style.opacity = '0.5';
                    progressLabel.textContent = '已松开';
                    
                    setTimeout(() => {
                        // 回退到当前阶段对应的背景
                        document.getElementById('bg-4-2').style.opacity = '0';
                        document.getElementById('bg-4-3').style.opacity = '0';
                        document.getElementById('bg-4-4').style.opacity = '0';
                        document.getElementById('bg-4-1').style.opacity = '1';
                        currentPhase4 = 1;
                        setTimeout(() => {
                            guideText.style.opacity = '1';
                            progressLabel.textContent = '长按蓄力中...';
                        }, 500);
                    }, 300);
                }
            }
            
            function completeScene4() {
                isPressed4 = false;
                currentPhase4 = 5;
                document.getElementById('progress-container-4').style.opacity = '0';
                guideText.style.display = 'none';
                document.getElementById('warm-light').classList.add('active');
                playSound4();
                setTimeout(() => showTextAndDialogue4(), 1000);
            }
            
            function showTextAndDialogue4() {
                const textContent = document.getElementById('text-content-4');
                textContent.classList.add('visible');
                const lines = textContent.querySelectorAll('.text-line-4');
                let maxDelay = 0;
                lines.forEach((line) => {
                    const delay = parseInt(line.dataset.delay) || 0;
                    maxDelay = Math.max(maxDelay, delay + 600);
                    setTimeout(() => line.classList.add('show'), delay);
                });
                setTimeout(() => document.getElementById('dialogue-box-4').classList.add('show'), maxDelay + 500);
                setTimeout(() => {
                    document.getElementById('swipe-4').classList.add('show');
                    swipeEnabled = true;
                }, maxDelay + 2500);
            }
            
            touchArea.addEventListener('touchstart', startPress, { passive: false });
            touchArea.addEventListener('touchend', endPress, { passive: false });
            touchArea.addEventListener('touchcancel', endPress, { passive: false });
            touchArea.addEventListener('mousedown', startPress);
            touchArea.addEventListener('mouseup', endPress);
            touchArea.addEventListener('mouseleave', endPress);
        }
        
        function playSound4() {
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioCtx.createOscillator();
                const gainNode = audioCtx.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.5);
                gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1);
                oscillator.start(audioCtx.currentTime);
                oscillator.stop(audioCtx.currentTime + 1);
            } catch (e) {}
        }
        
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
            setTimeout(() => showBubble('dialogue-area-1'), 1000);
            setTimeout(() => hideBubble('dialogue-area-1'), 2500);
            setTimeout(() => showBubble('dialogue-area-1b'), 2500);
            setTimeout(() => hideBubble('dialogue-area-1b'), 4000);
            setTimeout(() => {
                dialoguePhase = 2;
                document.getElementById('click-hint-5').classList.add('show');
            }, 4300);
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
            playSound5();
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
        
        // 第六幕
        let scene6Initialized = false;
        const BG_DELAYS_6 = [0, 1200, 2400, 3600, 4800];
        
        function initScene6() {
            if (scene6Initialized) return;
            scene6Initialized = true;
            setTimeout(() => startBackgroundAnimation6(), 2000);
        }
        
        function startBackgroundAnimation6() {
            BG_DELAYS_6.forEach((delay, index) => {
                setTimeout(() => {
                    const bg = document.getElementById('bg-6-' + (index + 1));
                    bg.style.opacity = '1';
                    if (index === BG_DELAYS_6.length - 1) {
                        setTimeout(() => startDawnAnimation6(), 2000);
                    }
                }, delay);
            });
        }
        
        function startDawnAnimation6() {
            document.getElementById('night-mask').classList.add('fade-out');
            document.getElementById('dawn-gradient').classList.add('fade-in');
            const lanternGlow = document.getElementById('lantern-glow-6');
            lanternGlow.style.opacity = '0.2';
            lanternGlow.style.animation = 'none';
            setTimeout(() => showDialogue6(), 3000);
        }
        
        function showDialogue6() {
            document.getElementById('dialogue-box-6').classList.add('show');
            setTimeout(() => {
                document.getElementById('swipe-6').classList.add('show');
                swipeEnabled = true;
            }, 2000);
        }
        
        // 第七幕
        let scene7Initialized = false;
        let isTriggered7 = false;
        
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
            if (isTriggered7) return;
            isTriggered7 = true;
            document.getElementById('click-hint-7').classList.remove('show');
            document.getElementById('click-hint-7').style.display = 'none';
            playHeritageSound();
            setTimeout(() => document.getElementById('bg-7-2').style.opacity = '1', 300);
            setTimeout(() => showDialogue7(), 2000);
        }
        
        function showDialogue7() {
            document.getElementById('dialogue-box-7').classList.add('show');
            setTimeout(() => {
                document.getElementById('swipe-7').classList.add('show');
                swipeEnabled = true;
            }, 2500);
        }
        
        function playHeritageSound() {
            try {
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                const frequencies = [523.25, 659.25, 783.99, 1046.50];
                frequencies.forEach((freq, index) => {
                    const osc = audioCtx.createOscillator();
                    const gain = audioCtx.createGain();
                    osc.connect(gain);
                    gain.connect(audioCtx.destination);
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(freq, audioCtx.currentTime + index * 0.1);
                    gain.gain.setValueAtTime(0, audioCtx.currentTime + index * 0.1);
                    gain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + index * 0.1 + 0.5);
                    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + index * 0.1 + 3);
                    osc.start(audioCtx.currentTime + index * 0.1);
                    osc.stop(audioCtx.currentTime + index * 0.1 + 3);
                });
            } catch (e) {}
        }
        
        // ==================== 第八幕：马灯人设盲盒 ====================
        const characters = [
            { img: '8-1.png', name: '火种守护者', slogan: '"哪怕只剩一丝微光，也要照亮前行的路。"' },
            { img: '8-2.png', name: '夜行引路人', slogan: '"黑夜再长，也挡不住黎明的脚步。"' },
            { img: '8-3.png', name: '坚韧跋涉者', slogan: '"每一步都是信仰，每一滴汗都是勋章。"' },
            { img: '8-4.png', name: '信念追光者', slogan: '"心中有方向，脚下有力量。"' },
            { img: '8-5.png', name: '温暖同行者', slogan: '"一个人可以走得快，一群人才能走得远。"' },
            { img: '8-6.png', name: '远见领航员', slogan: '"站得高才能看得远，想得深才能走得稳。"' },
            { img: '8-7.png', name: '希望播种者', slogan: '"今天的汗水，是明天的花海。"' },
            { img: '8-8.png', name: '热血先锋者', slogan: '"青春就是用来燃烧的！"' },
            { img: '8-9.png', name: '忠诚卫士', slogan: '"守护，是最长情的告白。"' },
            { img: '8-10.png', name: '梦想点灯人', slogan: '"只要还有一口气，就要为梦想发光。"' }
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
                // 图片居中展示
                const imgSize = 400;
                const x = W/2 - imgSize/2;
                const y = 200;
                ctx.drawImage(img, x, y, imgSize, imgSize);
                drawPosterText(ctx, W, H);
                document.getElementById('posterPreview').classList.add('active');
            };
            img.onerror = function() {
                drawPosterText(ctx, W, H);
                document.getElementById('posterPreview').classList.add('active');
            };
        }

        function drawPosterText(ctx, W, H) {
            // 标题
            ctx.fillStyle = '#FFD700';
            ctx.font = 'bold 38px "PingFang SC", "Microsoft YaHei", sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText('我的马灯人设', W/2, 140);

            // 金色分界线
            ctx.strokeStyle = 'rgba(255, 215, 0, 0.6)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(180, 680);
            ctx.lineTo(W - 180, 680);
            ctx.stroke();

            // 人设名称
            ctx.fillStyle = '#FFD700';
            ctx.font = 'bold 52px "PingFang SC", "Microsoft YaHei", sans-serif';
            ctx.fillText(currentCharacter.name, W/2, 750);

            // 标语
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.font = '26px "PingFang SC", "Microsoft YaHei", sans-serif';
            wrapText(ctx, currentCharacter.slogan, W/2, 820, W - 120, 40);
            
            // 底部组队引导
            const teamText = teamTexts[Math.floor(Math.random() * teamTexts.length)];
            ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.font = '22px "PingFang SC", "Microsoft YaHei", sans-serif';
            ctx.fillText('分享给好友，互换身份组队', W/2, H - 120);
            
            ctx.fillStyle = 'rgba(255, 215, 0, 0.45)';
            ctx.font = '500 24px "PingFang SC", "Microsoft YaHei", sans-serif';
            ctx.fillText('「你是' + currentCharacter.name + '，我是___，' + teamText + '」', W/2, H - 70);
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
        
        // 上滑翻页
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
            initScene1();
            enableGlobalSwipe();
        });
    </script>
</body>
</html>
