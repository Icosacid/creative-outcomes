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



// --- variables globales de Marine ---
var nbDeDisques = 11
var maxLine = 21
var items = maxLine * 4
    
var sizeMultiplier = 0.25
var startSize = sizeMultiplier
var currentDotSize = sizeMultiplier

var currentDistance = 70

var currentItem = 0


var palette1 = ["#4A90E2", "#4D8ADC", "#4F84D6", "#527DD0", "#5477CA", "#5771C5", "#596BBF", "#5C64B9", "#5E5EB3", "#6158AD", "#6352A7", "#664BA1", "#68459B", "#6B3F95", "#6D398F", "#70328A", "#722C84", "#75267E", "#772078", "#7A1972", "#7C136C"]
var palette2 = ["#E2C14A", "#DFB849", "#DCAE49", "#D9A548", "#D59B47", "#D29246", "#CF8946", "#CC7F45", "#C97644", "#C66C43", "#C36343", "#BF5A42", "#BC5041", "#B94740", "#B63D40", "#B3343F", "#B02B3E", "#AC213D", "#A9183D", "#A60E3C", "#7A1972"]
var posPalette = 0
var palettes = [palette1, palette2]
var chosenPalette
// -----------------




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


var delay = 1000;
var max = 10;
var i = 0
function Loop() {
    setTimeout(function () {
        ctx.beginPath();
        ctx.strokeStyle = "white"
        ctx.moveTo(i * 20, 20);
        ctx.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx.lineTo((i * 20) + 2, 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = "white"
        ctx.moveTo(i * 50, 50);
        ctx.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx.lineTo((i * 50) + 2, 50);
        ctx.stroke();

        i++;

        if (i < max) {
            Loop();
        }
    }, delay)
}
Loop()

function Looping() {
    setTimeout(function () {
        ctx.lineWidth = 9
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"
        ctx.beginPath()
        ctx.setLineDash(10, 35);
        ctx.arc(1400, 700, 200, 0, 2 * Math.PI, false)
        ctx.closePath()
        ctx.stroke()
        ctx.fill()

        i++;
        if (i < max) {
            Looping();
        }
    }, delay)

}
Looping()






createAllCercles();



// Cercles Marine
function createAllCercles() {

    chosenPalette = paletteSelector(palettes);
    
    for(var i = 0; i < nbDeDisques; i++) {
        
        console.log("disque " + i + ":")
        console.log("rayon: " + currentDistance)
        drawCercle();

        currentItem++;

        startSize+= sizeMultiplier;
        currentDotSize += currentDotSize + sizeMultiplier; // taille des points

        currentDistance = currentDistance * 1.14 + 5 // distance des disques
    }
    
}



function drawCercle() {


    // faire un disque
    for(var i = 0; i < items; i++) {
    

        // calcul de la position
        var x = centerX + currentDistance * Math.cos(2 * Math.PI * i / items);
        var y = centerY + currentDistance * Math.sin(2 * Math.PI * i / items);   
        
        // repart au début de la palette
        if (posPalette >= maxLine) 
        {
            posPalette = 0;
        }

        // dessin du point
        drawDot(x, y, currentDotSize, chosenPalette[posPalette]);
        posPalette++;

        // changement de taille du point
        if (currentItem < maxLine-1) {
            currentItem++
            currentDotSize += sizeMultiplier
        }
        else {
            currentItem = 0
            currentDotSize = startSize
        }

    }
}


function drawDot(x, y, currentDotSize, couleur) {
    ctx.beginPath();
    ctx.fillStyle = couleur
    ctx.arc(x, y, currentDotSize, 0, 2 * Math.PI);
    ctx.fill();
}

// sélectionne une palette de couleur aléatoire
function paletteSelector (palettes)
{
    return palettes[Math.floor(Math.random() * (palettes.length - 0) + 0)];
}