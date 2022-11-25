let myCanvas;

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

console.log (myCanvas)

let ctx = myCanvas.getContext('2d')

for (let i = 0; i <20; i++){
    // Dessiner un cercle 
    ctx.beginPath()
    ctx.arc(350, i * 50, 80, 0, 2 * Math.PI, false) // Coordonnée du centre, coordonée du centre , dimention du diameètre, Cercle fermé 
    ctx.fillStyle = "#6CB493"
    ctx.strokeStyle = "white"
    ctx.lineWidth = 10
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
                }    

// faire une boucle 
for (let i = 0; i <20; i++){
    // Dessiner un cercle 
    ctx.beginPath()
    ctx.arc(150, i * 50, 80, 0, 2 * Math.PI, false) // Coordonnée du centre, coordonée du centre , dimention du diameètre, Cercle fermé 
    ctx.fillStyle = "#6CB493"
    ctx.strokeStyle = "white"
    ctx.lineWidth = 10
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    }
    
// Faire une boucle   
for (let i = 0; i <20; i++){
    // Desssiner un cercle 
    ctx.beginPath()
    ctx.arc(250, i * 48, 80, 0, 2 * Math.PI, false) // Coordonnée du centre, coordonée du centre , dimention du diameètre, Cercle fermé 
    ctx.fillStyle = "#6CB493"
    ctx.strokeStyle = "white"
    ctx.lineWidth = 10
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
        }    



/* remplir une forme*/
ctx.strokeStyle = "black"
ctx.fillStyle = "#6CB493"

ctx.lineWidth = 1

/* Dessiner une ligne*/
ctx.beginPath()

ctx.moveTo(400, 30 * Math.random())
ctx.lineTo(800,500)

ctx.closePath()
ctx.stroke()

ctx.strokeStyle = "#10CC7A"

/* Dessiner une deuxième ligne*/
ctx.beginPath()

ctx.moveTo(800, 50 * Math.random())
ctx.lineTo(800,500)


ctx.closePath()
ctx.stroke()

/* Desinner un rectangle*/
ctx.beginPath()
ctx.rect(800, 500, 300, 200)

ctx.fill()
ctx.stroke()

ctx.closePath()


ctx.fillStyle = "black"

/* Desinner un deuxième rectangle*/
ctx.beginPath()
ctx.rect(700, 600, 300, 200)
ctx.fillStyle = 'rgba(255, 0, 255, 0.75)';


ctx.fill()
ctx.stroke()

ctx.closePath()



