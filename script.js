let myCanvas;

myCanvas = document.getElementsByTagName('canvas')[0]

console.log (myCanvas)

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "black"

/* Commencer le chemin*/
ctx.beginPath()

ctx.moveTo(200, 50 * Math.random())
ctx.lineTo(100,100)


/* le chemin se termine*/
ctx.closePath()

ctx.stroke()
