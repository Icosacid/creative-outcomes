/*var alice = document.getElementsByClassName("fire")[0];
alice.style.borderRadius= "10%";
var marine = document.getElementsByClassName("water") [0];
marine.style.borderRadius= "80%";
*/

let myCanvas;
myCanvas = document.getElementsByTagName("canvas")[0];
myCanvas.width = window.innerWidth 
myCanvas.height = window.innerHeight


let ctx = myCanvas.getContext("2d")

ctx.strokeStyle = "black";
ctx.fillStyle = "black";
ctx.lineWidth = 1
// ceci est pour définir comment va bouger notre pinceau
ctx.beginPath()
ctx.moveTo(200, 50, 100);
ctx.lineTo(100, 160);
ctx.closePath ()
ctx.stroke()

// dessiner un rectangle
ctx.beginPath()
ctx.rect(100, 50, 30, 20)
ctx.fill()
ctx.stroke()
ctx.closePath ()

// dessiner un cercle
ctx.beginPath()
ctx.arc(300, 400, 30, 0, 2 * Math.PI, false);
ctx.stroke ()
ctx.closePath()
ctx.fillStyle = "black";
ctx.fill()
