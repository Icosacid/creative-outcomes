/*balise canva*/
let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')

/*création de la palette*/

/*couleur de la ligne*/
ctx.strokeStyle = "#E6DA9F"

/*couleur pour remplir forme*/
ctx.fillStyle = "#E6DA9F"

/*dessiner un cercle*/
ctx.beginPath()
ctx.arc(1000, 300, 150, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur de la ligne*/
ctx.strokeStyle = "#9AC4FA"

/*couleur pour remplir forme*/
ctx.fillStyle = "#9AC4FA"

/*couleur bleu*/
ctx.beginPath()
ctx.arc(1000, 200, 20, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur de la ligne*/
ctx.strokeStyle = "#FF9778"

/*couleur pour remplir forme*/
ctx.fillStyle = "#FF9778"

/*color rouge*/
ctx.beginPath()
ctx.arc(1000, 400, 20, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur de la ligne*/
ctx.strokeStyle = "#C1FAC1"

/*couleur pour remplir forme*/
ctx.fillStyle = "#C1FAC1"

/*color vert*/
ctx.beginPath()
ctx.arc(900, 300, 20, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

// Création de la toile
ctx.strokeStyle = "#ffffe0"; //couleur contour toile
ctx.fillStyle = '#ffffe0'; //Couleur fond de toile
ctx.fillRect(200, 100, 600, 400);


// Fonction dessiner
strokeWeight(33);
stroke(250, 0, 242);
line(83, 116, 271, 74);

//Dessiner











