/*balise canva*/
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

//création cercle
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()
