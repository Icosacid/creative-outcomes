let myCanvas
myCanvas = document.getElementsByTagName('canvas')[0]
myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight
let ctx = myCanvas.getContext('2d')

console.log(window.innerWidth)
let w = myCanvas.width,
    h = myCanvas.height,
    centerX = w / 2,
    centerY = h / 2

//Roselyne 

function curve() {
    ctx.strokeStyle = "#0D47A1"
    ctx.lineWidth = 5
    ctx.fillStyle = "#0D47A1"

<<<<<<< Updated upstream
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(500, 25, 100, 400);
    ctx.quadraticCurveTo(500, 40, 0, 100);
    ctx.closePath()
    ctx.stroke()
    ctx.fill()

    ctx.fillStyle = "#6200EA"
    ctx.strokeStyle = "#6200EA"
    ctx.beginPath()
    ctx.arc(1400, 700, 300, 0, 2 * Math.PI, false) 
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    
}
curve()

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
