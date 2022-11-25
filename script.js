let myCanvas
myCanvas = document.getElementsByTagName('canvas')[0]
myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight
let ctx = myCanvas.getContext('2d')

let w = myCanvas.width,
    h = myCanvas.height,
    centerX = w / 2,
    centerY = h / 2

//Roselyne 
console.log("hello")

function curve() {
    ctx.strokeStyle = "#FBC02D"
    ctx.lineWidth = 5
    ctx.fillStyle = "#FBC02D"

<<<<<<< Updated upstream
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(500, 25, 100, 400);
    ctx.quadraticCurveTo(500, 40, 0, 100);
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.moveTo(0, 700)
    ctx.quadraticCurveTo(-280, 950, 150, 500);
    ctx.closePath()
    ctx.stroke()
    ctx.fill()
    
}
curve()
cercles();
=======
createAllCercles();
>>>>>>> Stashed changes

// Cercles Marine
function createAllCercles() {

    var items = 84
    var r = 70
    var cercleSize = 0.125
    var currentItem = 0

    for(var i = 0; i < items; i++) {
    
        var x = centerX + r * Math.cos(2 * Math.PI * i / items);
        var y = centerY + r * Math.sin(2 * Math.PI * i / items);   
        
        drawDot(x, y, cercleSize);

        if (currentItem <= 21) {
            currentItem ++
            cercleSize+= 0.125
        }
        else {
            currentItem = 0
            cercleSize = 0.125
        }

    }
}




function drawDot(x, y, cercleSize) {
    ctx.beginPath();
        ctx.fillStyle="#FF4422"
        ctx.arc(x, y, cercleSize, 0, 2 * Math.PI);
        ctx.fill();
}