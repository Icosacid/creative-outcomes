let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

let ctx = myCanvas.getContext('2d')

/*couleur de la ligne*/
ctx.strokeStyle = "black"

/*commencer un chemin*/
ctx.beginPath()

ctx.moveTo(20, 50)
ctx.lineTo(100, 600)

ctx.closePath()

ctx.stroke()