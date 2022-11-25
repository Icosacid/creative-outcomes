let myCanvas
myCanvas = document.
getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

ctx.strokeStyle = "#00F51C"
ctx.fillStyle = "#F500C2"
ctx.linewidth = 1

