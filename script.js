let myCanvas;

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = 700;
myCanvas.height = 700;

console.log (myCanvas)

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "white"
ctx.fillStyle = "white"
ctx.linewidth = 1


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



/*Première ligne du triangle du haut*/
ctx.beginPath()
ctx.moveTo(270, 80 )
ctx.lineTo(80, 270)
ctx.stroke()
ctx.closePath()

/*Deuxième lign du triangle du haut*/
ctx.beginPath()
ctx.moveTo(175, 175)
ctx.lineTo(350, 350)
ctx.stroke()
ctx.closePath()


/*Première lign du triangle du bas*/
ctx.beginPath()
ctx.moveTo(80, 430)
ctx.lineTo(270, 620)
ctx.stroke()
ctx.closePath()

/*Deuxième lign du triangle du bas*/
ctx.beginPath()
ctx.moveTo(175, 525)
ctx.lineTo(350, 350)
ctx.stroke()
ctx.closePath()




































/* Faire une boucle   
for (let i = 0; i <20; i++){
    // Desssiner un cercle 
    ctx.beginPath()
    ctx.arc(250, i * 48, 80, 0, 2 * Math.PI, false) 
    ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
    ctx.strokeStyle = "white"
    ctx.lineWidth = 6
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    }    

Dessiner une deuxième ligne
ctx.beginPath()
ctx.moveTo(800, 50 * Math.random())
ctx.lineTo(800,500)
ctx.closePath()
ctx.stroke()


Desinner un deuxième rectangle
ctx.beginPath()
ctx.rect(700, 600, 300, 200)
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';
ctx.fill()
ctx.stroke()
ctx.closePath()


for (let i = 0; i < 30; i++) {
    ctx.lineTo(100 + 5 * i, 120 + 10 * (Math.random() < 0.5) * i)
  }
  
  ctx.stroke()
  ctx.closePath() */
