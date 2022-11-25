/*balise canva*/
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

/*Création de la palette*/

/*couleur de la ligne*/
ctx.strokeStyle = "#E6DA9F"

/*couleur pour remplir forme*/
ctx.fillStyle = "#E6DA9F"

/* Dessiner un cercle*/
ctx.beginPath()
ctx.arc(1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

// Création de la toile
ctx.strokeStyle = "#ffffe0"; //couleur contour toile
ctx.fillStyle = '#ffffe0'; //Couleur fond de toile
ctx.fillRect(200, 100, 600, 400);










