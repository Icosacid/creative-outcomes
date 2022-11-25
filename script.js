let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "white"
ctx.fillStyle = "#F500C2"
ctx.linewidth = 1

// coté gauche du carré = KENZA

// coté droit du carré = LAURA

// triangle 1
ctx.beginPath();
    ctx.moveTo(345, 400);
    ctx.lineTo(345, 0);
    ctx.lineTo(440, 120);
    ctx.fill();
    ctx.closePath;


// triagle 2 (haut)
ctx.beginPath();
ctx.moveTo (345, 400);
ctx.lineTo (690, 400);
ctx.lineTo(600, 310);
 // Triangle plein
 ctx.beginPath();
 ctx.moveTo(307, 307);
 ctx.lineTo(307, 0);
 ctx.lineTo(250, 80);
 ctx.fill();
 ctx.closePath();

 // Triangle plein
 ctx.beginPath();
 ctx.moveTo(307, 307);
 ctx.lineTo(0, 307);
 ctx.lineTo(80, 250);
 ctx.fill();
 ctx.closePath();

 // Triangle plein
 ctx.beginPath();
 ctx.moveTo(307, 307);
 ctx.lineTo(0, 307);
 ctx.lineTo(80, 370);
 ctx.fill();
 ctx.closePath();

// Triangle plein
ctx.beginPath();
ctx.moveTo(307, 307);
ctx.lineTo(307, 614);
ctx.lineTo(250, 530);
ctx.fill();
ctx.closePath;

// triangle 2 (bas)
ctx.beginPath();
ctx.moveTo (345, 400);
ctx.lineTo (690, 400);
ctx.lineTo(600, 490);
ctx.fill();
ctx.closePath;

// triangle 3
ctx.beginPath();
    ctx.moveTo(345, 400);
    ctx.lineTo(345, 795);
    ctx.lineTo(440, 680);
    ctx.fill();
    ctx.closePath;


    //petals triangle 1
    ctx.beginPath();
    ctx.moveTo(345, 400);
    ctx.lineTo(440, 120);
    ctx.lineTo(600, 310);
    ctx.stroke();
    ctx.closePath;

    //petals triangle 2
    ctx.beginPath();
    ctx.moveTo(345, 400);
    ctx.lineTo(440, 120);
    ctx.lineTo(600, 310);
    ctx.stroke();
    ctx.closePath;