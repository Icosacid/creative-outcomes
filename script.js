let myCanvas;

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

console.log (myCanvas)

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "white"
ctx.fillStyle = "white"
ctx.linewidth = 1


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
ctx.closePath();









































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
