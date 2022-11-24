console.log('Hello there!');

// Je crée une varaible avec let ou var 
let myCanvas;

// Je définis mon canvas en allant chercher l'élement par son tag.
// Il s'agit du premier tag donc = [0]
myCanvas = document.getElementsByTagName('canvas')[0]

//Définition de la taille du canvas
myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

// J'ajoute un variable qui signifie "contexte" 
let ctx = myCanvas.getContext('2d')



//Définition d'une ligne grace aux coordonnée X et Y pour créer un segment
ctx.strokeStyle = "#ffffff"// Affecter une couleur de la ligne
ctx.lineWidth = 2 //Epaisseur de la ligne 
ctx.fillStyle = "#ffffff" //Couleur du remplissage 
//Commencer
ctx.beginPath()//On appelle la méthode, la fonction avec les ()
//Tracer x to y
ctx.moveTo(650, 590)
ctx.lineTo(450, 400)
//Finir
ctx.closePath()
//Faire tracer la ligne 
ctx.stroke()


//Rectangle
ctx.beginPath()
ctx.rect(220, 250, 220, 250)
ctx.closePath()
ctx.stroke()
ctx.fill()

//Nouveau trait et nouveau rectangle 
ctx.strokeStyle = "pink"
ctx.lineWidth = 15
ctx.fillStyle = "pink"
ctx.fillStyle = "pink"
ctx.beginPath()
ctx.moveTo(200, 300)
ctx.lineTo(200, 500)
ctx.closePath()
ctx.stroke()

ctx.beginPath()
ctx.rect(600, 400, 400, 100)
ctx.closePath()
ctx.stroke()
ctx.fill()