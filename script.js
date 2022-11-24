var alice = document.getElementsByClassName("fire")[0];
alice.style.borderRadius= "10%";
var marine = document.getElementsByClassName("water") [0];
marine.style.borderRadius= "80%";

let mycanvas;
mycanvas = document.getElementsByTagName("canvas")[0];
let ctx = mycanvas.getContext ("2d")

ctx.strokeStyle = "black";
// ceci est pour définir comment va bouger notre pinceau
ctx.beginPath()
ctx.moveTo(20, 50 * Math.random ());
ctx.lineTo(100, 60);

ctx.closePath ()

// pour qu'il dessine 

ctx.stroke()
