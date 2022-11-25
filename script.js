let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

myCanvas.width = 700;
myCanvas.height = 700;

let ctx = myCanvas.getContext('2d')


ctx.strokeStyle = "white"
ctx.fillStyle = "white"
ctx.linewidth = 1

// LAURA

// triangle haut
ctx.beginPath();
    ctx.moveTo(350, 350);
    ctx.lineTo(350, 0);
    ctx.lineTo(430, 80);
    ctx.fill();
    ctx.closePath;
for (let i = 47; i <100; i++){
    ctx.beginPath()
    ctx.moveTo(0, i*7.5)
    ctx.lineTo(350, i*15)
    ctx.stroke()
    ctx.closePath()
}

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

// trait 1 
ctx.beginPath();
ctx.moveTo(430,80);
ctx.lineTo(620, 270);
ctx.stroke();
ctx.closePath;
// trait perpandiculaire au 1
ctx.beginPath();
ctx.moveTo(350,350);
ctx.lineTo(525, 175);
ctx.stroke();
ctx.closePath;

//trait 2
ctx.beginPath();
ctx.moveTo(430, 620);
ctx.lineTo(620, 430);
ctx.stroke();
ctx.closePath;
// trait perdendiculaire au 2
ctx.beginPath();
ctx.moveTo(350,350);
ctx.lineTo(525, 525);
ctx.stroke();
ctx.closePath;

//boucle coin en haut a gauche
for (let i = 47; i < 100; i++) {
  ctx.beginPath();
  ctx.moveTo(i*7.5, 0);
  ctx.lineTo (i*15, 359);
  ctx.stroke();
  ctx.closePath();
}
//triangle bas
ctx.beginPath();
    ctx.moveTo(700, 700);
    ctx.lineTo(430, 620);
    ctx.lineTo(620, 430);
    ctx.fill();
    ctx.closePath;
// le trait dedans 
ctx.beginPath();
ctx.strokeStyle = "black"
ctx.moveTo(525,525);
ctx.lineTo(700, 700);
ctx.stroke();
ctx.closePath;


// KENZA

ctx.strokeStyle = "white"
// Triangle plein
 ctx.beginPath();
 ctx.moveTo(350, 350);
 ctx.lineTo(350, 0);
 ctx.lineTo(270, 80);
 ctx.fill();
 ctx.closePath();

// Triangle plein
 ctx.beginPath();
 ctx.moveTo(350, 350);
 ctx.lineTo(0, 350);
 ctx.lineTo(80, 270);
 ctx.fill();
 ctx.closePath();

// Triangle plein
 ctx.beginPath();
 ctx.moveTo(350, 350);
 ctx.lineTo(0, 350);
 ctx.lineTo(80, 430);
 ctx.fill();
 ctx.closePath();

// Triangle plein
ctx.beginPath();
ctx.moveTo(350, 350);
ctx.lineTo(350, 700);
ctx.lineTo(270, 620);
ctx.fill();
ctx.closePath();

// Triangle blanc
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(270, 80);
ctx.lineTo(80, 270);
ctx.fill();
ctx.closePath();

/*Première ligne du triangle du haut*/
ctx.beginPath()
ctx.moveTo(270, 80 )
ctx.lineTo(80, 270)
ctx.stroke()
ctx.closePath()

/*Deuxième ligne du triangle du haut*/
ctx.beginPath()
ctx.moveTo(175, 175)
ctx.lineTo(350, 350)
ctx.stroke()
ctx.closePath()


/*Première ligne du triangle du bas*/
ctx.beginPath()
ctx.moveTo(80, 430)
ctx.lineTo(270, 620)
ctx.stroke()
ctx.closePath()

/*Deuxième ligne du triangle du bas*/
ctx.beginPath()
ctx.moveTo(175, 525)
ctx.lineTo(350, 350)
ctx.stroke()
ctx.closePath()


ctx.strokeStyle = "black"
/*ligne noir du triangle blanc*/
ctx.beginPath()
ctx.moveTo(0, 0)
ctx.lineTo(175, 175)
ctx.stroke()
ctx.closePath()
