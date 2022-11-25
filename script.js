/*balise canva*/
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

// Création de la toile
ctx.strokeStyle = "#ffffe0"; //couleur contour toile
ctx.strokeRect(200, 100, 600, 400);









