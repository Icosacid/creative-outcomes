console.log('Hello there!');

// Je cr�e une varaible avec let ou var 
let myCanvas;

// Je d�finis mon canvas en allant chercher l'�lement par son tag.
// Il s'agit du premier tag donc = [0]
myCanvas = document.getElementsByTagName('canvas')[0]

//D�finition de la taille du canvas
myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

// J'ajoute un variable qui signifie "contexte" 
let ctx = myCanvas.getContext('2d')



//D�finition d'une ligne grace aux coordonn�e X et Y pour cr�er un segment
ctx.strokeStyle = "#ffffff"// Affecter une couleur de la ligne
ctx.lineWidth = 2 //Epaisseur de la ligne 
ctx.fillStyle = "#ffffff" //Couleur du remplissage 
//Commencer
ctx.beginPath()//On appelle la m�thode, la fonction avec les ()
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

// Dessiner un cercle
//coin haut gauche
ctx.beginPath()
ctx.arc(220, 250, 30, 0, 2 * Math.PI, false)
ctx.closePath()
ctx.stroke()
ctx.fill()

// autre coins du carré :)
// coin haut droite
ctx.beginPath()
ctx.arc(440, 250, 30, 0, 2 * Math.PI, false)
ctx.closePath()
ctx.stroke()
ctx.fill()

// coin bas droite
ctx.beginPath()
ctx.arc(440, 500, 30, 0, 2 * Math.PI, false)
ctx.closePath()
ctx.stroke()
ctx.fill()

// coin bas gauche
ctx.beginPath()
ctx.arc(220, 500, 30, 0, 2 * Math.PI, false)
ctx.closePath()
ctx.stroke()
ctx.fill()