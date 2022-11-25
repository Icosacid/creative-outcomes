/*balise canva*/
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

// Création de la toile
ctx.strokeStyle = "#ffffe0"; //couleur contour toile
ctx.fillStyle = '#ffffe0'; //Couleur fond de toile
ctx.fillRect(200, 100, 600, 400);










