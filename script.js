let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "#00F51C"
ctx.fillStyle = "#F500C2"
ctx.linewidth = 1

// Premier Trait
ctx.beginPath()
ctx.moveTo(150, 100)
ctx.lineTo(500, 150)
ctx.closePath()
ctx.stroke()

//Deuxieme trait
ctx.beginPath()
ctx.moveTo(150, 100)
ctx.lineTo(500, 100)
ctx.closePath()
ctx.stroke()

// Troisième Trait
ctx.beginPath()
ctx.moveTo(150, 100)
ctx.lineTo(500, 50)
ctx.closePath()
ctx.stroke()

// Draw a rectangle
ctx.beginPath()
ctx.rect(150, 40, 100, 150)
ctx.fill()
ctx.stroke()
ctx.closePath()

// deuxieme rectangle
ctx.beginPath()
ctx.rect(500, 40, 100, 150)
ctx.fill()
ctx.stroke()
ctx.closePath()
