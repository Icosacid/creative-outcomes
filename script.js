let myCanvas;

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

console.log (myCanvas)

let ctx = myCanvas.getContext('2d')

/* remplir une forme*/
ctx.strokeStyle = "black"
ctx.fillStyle = "#6CB493"

ctx.lineWidth = 1

/* Dessiner une ligne*/
ctx.beginPath()

ctx.moveTo(200, 50 * Math.random())
ctx.lineTo(500,500)

ctx.closePath()
ctx.stroke()

ctx.strokeStyle = "#10CC7A"

/* Dessiner une deuxième ligne*/
ctx.beginPath()

ctx.moveTo(500, 50 * Math.random())
ctx.lineTo(500,500)


ctx.closePath()
ctx.stroke()

/* Desinner un rectangle*/
ctx.beginPath()
ctx.rect(500, 500, 300, 200)

ctx.fill()
ctx.stroke()

ctx.closePath()


ctx.fillStyle = "black"

/* Desinner un deuxième rectangle*/
ctx.beginPath()
ctx.rect(400, 600, 300, 200)

ctx.fill()
ctx.stroke()

ctx.closePath()



for (let i = 0; i <20; i++){
// Dessiner un cercle 
ctx.beginPath()
ctx.arc(200, i * 50, 80, 0, 2 * Math.PI, false) // Coordonnée du centre, coordonée du centre , dimention du diameètre, Cercle fermé 
ctx.fillStyle = "#6CB493"
ctx.strokeStyle = "white"
ctx.lineWidth = 10
ctx.closePath()
ctx.fill()
ctx.stroke()
}