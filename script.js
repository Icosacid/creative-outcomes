let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

myCanvas.width = 700;
myCanvas.height = 700;

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "white"
ctx.fillStyle = "#F500C2"
ctx.linewidth = 1

/

// coté droit du carré = LAURA

// triangle haut
ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 0);
    ctx.lineTo(430, 80);
    ctx.fill();
    ctx.closePath;


// triangle bas
ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 700);
    ctx.lineTo(430, 620);
    ctx.fill();
    ctx.closePath;


// triangle du milieu (bas)
ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(700, 350);
    ctx.lineTo(620, 430);
    ctx.fill();
    ctx.closePath;

    // triangle du milieu (haut)

    ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(700, 350);
    ctx.lineTo(620, 270);
    ctx.fill();
    ctx.closePath;

/*
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
    */