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
cercles();

// Cercles Marine
function cercles() {

    var items = 84;
    var r = 70;
    var cercleSize = 0.125;

    for(var i = 0; i < items; i++) {
    
        var x = centerX + r * Math.cos(2 * Math.PI * i / items);
        var y = centerY + r * Math.sin(2 * Math.PI * i / items);   
        
        ctx.beginPath();
        ctx.lineWidth="2";
        ctx.fillStyle="#FF4422"
        ctx.arc(x, y, cercleSize, 0, 2 * Math.PI);
        ctx.fill();

        // changement de taille du cercle
        console.log(cercleSize);
        if (cercleSize <= 2.625) {
            cercleSize+= 0.125;
        }
        else cercleSize = 0.125;
        

        
    }
}