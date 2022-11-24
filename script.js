let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')
//ctx.imageSmoothingEnabled = true
//ctx.globalCompositeOperation = 'lighter'

ctx.strokeStyle = "#FFFFFF"
ctx.fillStyle = "hsl(200, 50%, 60%)"
ctx.lineWidth = 1

// Draw a line
ctx.beginPath()
ctx.moveTo(200, 50 * Math.random())
ctx.lineTo(100, 160)
ctx.closePath()
ctx.stroke()

// Draw a rectangle
ctx.beginPath()
ctx.rect(50, 50, 100, 200)
ctx.fill()
ctx.stroke()
ctx.closePath()

// Draw a second line




