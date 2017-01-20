 var objA;
    var objB;
var radius=20;
var length=50;
var breadth=40;
var height=20;
    var objAleft = 50;
    var objAtop = 50;
    var objBleft = 550;
    var objBtop = 550;
    var ctx;
    var cannvas;
function init() {

    objA = Math.floor(Math.random() * 3);
    objB = Math.floor(Math.random() * 3);
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    draw();

}

function draw() {
    switch (objA) {
        case 0:
            drawtrinagle(objAleft,objAtop,height);
            break;
        case 1:
           drawcircle(objAleft,objAtop,radius);
            break;
        case 2:
            drawrectangle(objAleft,objAtop,length,breadth);
            break;
        default:
            drawcircle(objAleft,objAtop,radius);
            break;

    }
    switch (objB) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
        default:
            break;
    }


}

function drawcircle(x,y,r){
    ctx.beginPath();
           ctx.arc(x, y, r, 0, 2 * Math.PI, false);
           ctx.lineWidth = 1;
           ctx.strokeStyle = '#003300';
           ctx.stroke();

}
function drawtrinagle(x,y,h){
            var path = new Path2D();
            path.moveTo(x,y-h/2);
            path.lineTo(x-h/2,y+h/2);
            ctx.stroke(path);
            path.lineTo(x+h/2,y+h/2);

            path.moveTo(x+h/2,y+h/2);
            path.lineTo(x-h/2,y+h/2);
            ctx.stroke(path);

}
function drawrectangle(x,y,length,breadth){

    ctx.rect(x-length/2,y-breadth/2,length,breadth);
    ctx.stroke();
}
window.onload=init;
