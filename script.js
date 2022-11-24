let myCanvas
myCanvas = document.getElementsByTagName('canvas')[0]
let ctx = myCanvas.getContext('2d')
ctx.strokeStyle = "#000000"
ctx.lineWidth= 1

ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(10, 40)

ctx.moveTo(10, 40)
ctx.lineTo(40, 40)

ctx.moveTo(40, 40)
ctx.lineTo(40, 10)

ctx.moveTo(40, 10)
ctx.lineTo(10, 10)

ctx.closePath()
ctx.stroke()

CartToPol();

function CartToPol(x, y) {
    var r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))

    console.log(r)
}
