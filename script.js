let myCanvas

myCanvas = document.getElementsByTagName('canvas')[0]

myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight

let ctx = myCanvas.getContext('2d')
//ctx.imageSmoothingEnabled = true
//ctx.globalCompositeOperation = 'lighter'

/*couleur de la ligne*/
ctx.strokeStyle = "white"

/*couleur pour remplir forme*/
ctx.fillStyle = "hsl(200, 50%, 60%)"

/*epaisseur de la ligne*/
ctx.lineWidth = 6

/*dessiner une ligne*/
ctx.beginPath()
ctx.moveTo(20, 50)
ctx.lineTo(100, 600)
ctx.stroke()
ctx.closePath()

/*dessiner un rectangle*/
ctx.beginPath()
ctx.rect(10, 50, 20, 30)
ctx.fill()
ctx.stroke()
ctx.closePath()

/*couleur pour remplir forme*/
ctx.fillStyle = "hsl(100, 50%, 60%)"

/*dessiner une ligne*/
ctx.beginPath()
ctx.moveTo(300, 20)
ctx.lineTo(10, 80)
ctx.stroke()
ctx.closePath()

/*dessiner un rectangle*/
ctx.beginPath()
ctx.rect(20, 30, 10, 90)
ctx.fill()
ctx.stroke()
ctx.closePath()