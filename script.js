/*balise canva*/
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')


//création planetes

for (var i= 0; i < 8; i++) {
  context.beginPath();
  context.lineWidth="1";
  context.arc(100, 100, i * 2, 0, 2 * Math.PI);
  context.stroke();
 }

//Mercure
ctx.strokeStyle= "brown"
ctx.fillStyle= "brown"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Venus
ctx.strokeStyle= "orange"
ctx.fillStyle= "orange"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Terre
ctx.strokeStyle= "green"
ctx.fillStyle= "green"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Mars
ctx.strokeStyle= "red"
ctx.fillStyle= "red"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Jupiter
ctx.strokeStyle= "cream"
ctx.fillStyle= "cream"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Saturne
ctx.strokeStyle= "grey"
ctx.fillStyle= "grey"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Uranus
ctx.strokeStyle= "cyan"
ctx.fillStyle= "cyan"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Neptune
ctx.strokeStyle= "blue"
ctx.fillStyle= "blue"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

//Soleil
ctx.strokeStyle= "yellow"
ctx.fillStyle= "yellow"
ctx.beginPath ()
ctx.arc (1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill ()
ctx.stroke ()
ctx.closePath ()

