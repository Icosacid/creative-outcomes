let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')
//ctx.imageSmoothingEnabled = true
//ctx.globalCompositeOperation = 'lighter'

ctx.strokeStyle = "#FFFFFF"
ctx.fillStyle = "hsl(200, 50%, 60%)"
ctx.lineWidth = 3

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

// Draw a circle
ctx.fillStyle = 'red'

for (let i = 0; i < 20; i++) {
	ctx.beginPath()
	ctx.arc(300, i * 20, 30, 0, 2 * Math.PI, false)
	ctx.stroke()
	ctx.fill()
	ctx.closePath()
}




