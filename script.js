console.log('Hello there!');

// Je crée une varaible avec let ou var 
let myCanvas;

// Je définis mon canvas en allant chercher l'élement par son tag.
// Il s'agit du premier tag donc = [0]
myCanvas = document.getElementsByTagName('canvas')[0]

// J'ajoute un variable qui signifie "contexte" 
let ctx = myCanvas.getContext('2d')

//Définition d'un ligne grace aux coordonnée X et Y pour créer un segment

// Affecter une couleur 
ctx.strokesStyle = "#ffffff"

//Commencer
ctx.beginPath()

//Tracer
ctx.moveTo(50, 90)
ctx.lineTo(150, 100)

//Finir
ctx.closePath()

//Faire tracer a ligne 
ctx.stroke()