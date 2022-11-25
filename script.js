let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "#00F51C"
ctx.fillStyle = "#F500C2"
ctx.linewidth = 1

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
ctx.lineTo(570, 310);
ctx.fill();
ctx.closePath;

// triangle 2 (bas)
ctx.beginPath();
ctx.moveTo (345, 400);
ctx.lineTo (690, 400);
ctx.lineTo(570, 490);
ctx.fill();
ctx.closePath;

// triangle 3
ctx.beginPath();
    ctx.moveTo(345, 400);
    ctx.lineTo(345, 800);
    ctx.lineTo(440, 680);
    ctx.fill();
    ctx.closePath;
