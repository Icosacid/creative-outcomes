let myCanvas;

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = 700;
myCanvas.height = 700;

console.log (myCanvas)

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "white"
ctx.fillStyle = "white"
ctx.linewidth = 1


for (let i = 47; i <100; i++){
    ctx.beginPath()
    ctx.moveTo(0, i*7.5)
    ctx.lineTo(350, i*15)
    ctx.stroke()
    ctx.closePath()
}

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























