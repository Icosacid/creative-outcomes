let myCanvas
myCanvas = document.getElementsByTagName('canvas')[0]
myCanvas.width = window.innerWidth
myCanvas.height = window.innerHeight
let ctx = myCanvas.getContext('2d')

let w = myCanvas.width,
    h = myCanvas.height,
    centerX = w / 2,
    centerY = h / 2



cercles();

// Cercles Marine
function cercles() {

    var items = 20;
    var r = 50;

    for(var i = 0; i < items; i++) {
    
        var x = centerX + r * Math.cos(2 * Math.PI * i / items);
        var y = centerY + r * Math.sin(2 * Math.PI * i / items);   
        
        ctx.beginPath();
        ctx.lineWidth="2";
        ctx.fillStyle="#FF4422"
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}