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
ctx.strokeStyle = "#9CB7F0"

/*couleur pour remplir forme*/
ctx.fillStyle = "#9CB7F0"

/*couleur bleu*/
ctx.beginPath()
ctx.arc(1000, 200, 35, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur de la ligne*/
ctx.strokeStyle = "#E6B19A"

/*couleur pour remplir forme*/
ctx.fillStyle = "#E6B19A"

/*color rouge*/
ctx.beginPath()
ctx.arc(1000, 400, 35, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur de la ligne*/
ctx.strokeStyle = "#93DAAA"

/*couleur pour remplir forme*/
ctx.fillStyle = "#93DAAA"

/*color vert*/
ctx.beginPath()
ctx.arc(900, 300, 35, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur de la ligne*/
ctx.strokeStyle = "black"

/*couleur pour remplir forme*/
ctx.fillStyle = "black"

/*troue palette*/
ctx.beginPath()
ctx.arc(1000, 300, 25, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur de la ligne*/
ctx.strokeStyle = "black"

/*couleur pour remplir forme*/
ctx.fillStyle = "black"

/*troue palette*/
ctx.beginPath()
ctx.arc(1130, 250, 50, 0, 2 * Math.PI, false)
ctx.fill()
ctx.stroke()
ctx.closePath()

// Création de la toile
ctx.strokeStyle = "#ffffe0"; //couleur contour toile
ctx.fillStyle = '#ffffe0'; //Couleur fond de toile
ctx.fillRect(200, 100, 600, 400);











