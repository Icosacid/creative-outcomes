/*balise canva*/
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

//création planetes
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Mercure
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Venus
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Terre
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Mars
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Jupiter
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Saturne
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Uranus
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Neptune
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Soleil
ctx.strokeStyle= "black"
ctx.fillStyle= "black"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()