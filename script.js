let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "white"
ctx.beginPath()

ctx.moveTo(200, 500)
ctx.lineTo(100, 60)

ctx.closePath()

ctx.stroke()