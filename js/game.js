 var objA;
var objB;
var objC;
var radius=20;
var length=50;
var breadth=40;
var height=40;
    var objAleft=50;
    var objAtop = 50;
    var objBleft;
    var objBtop;
    var objCleft;
    var objCtop;

    var ctx;
    var cannvas;
function init() {

    objA = Math.floor(Math.random() * 3);
    objB = Math.floor(Math.random() * 3);
    objC = Math.floor(Math.random() * 3);
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    objBtop=canvas.height - 100;
    objBleft=canvas.width -100;
    objCleft=canvas.width/2+70-Math.floor(Math.random()*200);
    objCtop=canvas.height/2+70-Math.floor(Math.random()*200);

    draw();

}

function draw() {
    switch (objA) {
        case 0:
           drawtriangle(objAleft,objAtop,height);
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
    console.log("beginning of checking objB");
    switch (objB) {
         case 0:
            drawtriangle(objBleft,objBtop,height);
            console.log("triangle drawn");
            break;
        case 1:
           drawcircle(objBleft,objBtop,radius);
            break;
        case 2:
            drawrectangle(objBleft,objBtop,length,breadth);
            break;
        default:
            drawcircle(objBleft,objBtop,radius);
            break;
    }
     switch (objC) {
         case 0:
            drawtriangle(objCleft,objCtop,height);
            console.log("triangle drawn");
            break;
        case 1:
           drawcircle(objCleft,objCtop,radius);
            break;
        case 2:
            drawrectangle(objCleft,objCtop,length,breadth);
            break;
        default:
            drawcircle(objCleft,objCtop,radius);
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
function drawtriangle(x,y,h){
     ctx.beginPath();
    ctx.moveTo(x,y-h/2);
    ctx.lineTo(x-h/2,y+h/2);
    ctx.lineTo(x+h/2,y+h/2);
    ctx.closePath();
    ctx.stroke();


//            var path = new Path2D();
//            path.moveTo(x,y-h/2);
//            path.lineTo(x-h/2,y+h/2);
//            ctx.stroke(path);
//            path.lineTo(x+h/2,y+h/2);
//
//            path.moveTo(x+h/2,y+h/2);
//            path.lineTo(x-h/2,y+h/2);
//            ctx.stroke(path);

}
function drawrectangle(x,y,length,breadth){
    //clearRect(x-length/2,y-breadth/2,length,breadth)
    ctx.rect(x-length/2,y-breadth/2,length,breadth);
    ctx.stroke();
}
window.onload=init;

function buttonClicked(){
    location.reload(true);
}
