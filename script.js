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

function lines() {


    for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "white"
        ctx.moveTo(i * 20, 20);
        ctx.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx.lineTo((i * 20) + 2, 20);
        ctx.stroke();
    }


    ctx.lineWidth = 9
    ctx.fillStyle = "black"
    ctx.strokeStyle = "black"
    ctx.beginPath();
    ctx.setLineDash([10, 35]);
    ctx.arc(1400, 700, 200, 0, 2 * Math.PI, false)
    ctx.closePath()
    ctx.stroke()



}

lines()

// --- variables globales de Marine ---
var nbDeDisques = 10
var maxLine = 21
var items = maxLine * 4
var r = 70
    
var cercleSize = 0.125

var currentItem = 0

var palette = ["#4A90E2", "#4D8ADC", "#4F84D6", "#527DD0", "#5477CA", "#5771C5", "#596BBF", "#5C64B9", "#5E5EB3", "#6158AD", "#6352A7", "#664BA1", "#68459B", "#6B3F95", "#6D398F", "#70328A", "#722C84", "#75267E", "#772078", "#7A1972", "#7C136C"]
var posPalette = 0
// -----------------




//Roselyne 

function curve() {
    ctx.strokeStyle = "#0D47A1"
    ctx.lineWidth = 5
    ctx.fillStyle = "#0D47A1"

<<<<<<< Updated upstream
=======
<<<<<<< HEAD

=======
>>>>>>> af2182379d022a2c1a8bf3659c5c50cb723b85c7
>>>>>>> Stashed changes
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
createAllCercles()

<<<<<<< Updated upstream

=======

<<<<<<< HEAD
function lines() {

    
   for (var i = 0; i < 10; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "white"
        ctx.moveTo(i*20, 20);
        ctx.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx.lineTo((i*20)+2, 20);
        ctx.stroke();
    }


    ctx.lineWidth = 9
    ctx.fillStyle = "black"
    ctx.strokeStyle = "black"
    ctx.beginPath();
    ctx.setLineDash([10, 35]);
    ctx.arc(1400, 700, 200, 0, 2 * Math.PI, false)
    ctx.closePath()
    ctx.stroke()


    
}

lines()


createAllCercles();

=======
>>>>>>> af2182379d022a2c1a8bf3659c5c50cb723b85c7
>>>>>>> Stashed changes

// Cercles Marine
function createAllCercles() {

    for(var i = 0; i < nbDeDisques; i++) {
        
        console.log("disque " + i + ":")
        drawCercle();
        currentItem++;
        cercleSize++;
        r+=100 // distance des disques
    }
    
}
<<<<<<< Updated upstream

function drawCercle() {

=======

function drawCercle() {

>>>>>>> Stashed changes
    // faire un disque
    for(var i = 0; i < items; i++) {
    
        console.log("current item: " + currentItem)
        console.log("taille du cercle: " + cercleSize)

        // calcul de la position
        var x = centerX + r * Math.cos(2 * Math.PI * i / items);
        var y = centerY + r * Math.sin(2 * Math.PI * i / items);   
        
        // repart au début de la palette
        if (posPalette >= maxLine) 
        {
            posPalette = 0;
        }

        // dessin du point
        drawDot(x, y, cercleSize, palette[posPalette]);
        posPalette++;

        // changement de taille du point
        if (currentItem < maxLine-1) {
            currentItem++
            cercleSize+= 0.125
        }
        else {
            currentItem = 0
            cercleSize = 0.125
        }

    }
}


function drawDot(x, y, cercleSize, couleur) {
    ctx.beginPath();
    ctx.fillStyle = couleur
    ctx.arc(x, y, cercleSize, 0, 2 * Math.PI);
    ctx.fill();
}