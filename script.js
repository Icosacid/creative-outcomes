let myCanvas
myCanvas = document.getElementsByTagName('canvas')[0]
let ctx = myCanvas.getContext('2d')








function CartToPol(x, y, r, o) {

    r = Math.sqrt(x*x + y*y)
    o = Math.atan2(y,x) * 180 / Math.PI;
}

function PolToCart(x, y, r, o) {
    var x = r * Math.cos(o)
    var y = r* Math.sin(o)

    console.log(x)
    console.log(y)
}
