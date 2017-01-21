 var objA;
 var objB;
 var objC;

var radius = 20;
var radiusA;
var radiusB;
var radiusC;

 var length = 50;
 var breadth = 40;
 var height = 40;
 var objAleft = 50;
 var objAtop = 50;
 var objBleft;
 var objBtop;
 var objCleft;
 var objCtop;

 var ctx;
 var canvas;
var circles;
var triangles;
var rectangles;
 function init() {
     circles=[];
     triangles=[];
     rectangles=[];

     radiusA=radius;
     radiusB=radius;
     radiusC=radius;
     requestAnimationFrame= requestAnimationFrame||webkitRequestAnimationFrame;
     objA =1; //Math.floor(Math.random() * 3);
     objB =1; // Math.floor(Math.random() * 3);
     objC =1; // Math.floor(Math.random() * 3);
     canvas = document.getElementById('canvas');
     ctx = canvas.getContext('2d');
     objBtop = canvas.height - 100;
     objBleft = canvas.width - 100;
     objCleft = canvas.width / 2 + 70 - Math.floor(Math.random() * 200);
     objCtop = canvas.height / 2 + 70 - Math.floor(Math.random() * 200);

     draw();

     //for clicked on canvas
     canvas.addEventListener('click',function (e) {
    var clickedX = e.pageX - this.offsetLeft;
    var clickedY = e.pageY - this.offsetTop;

    for (var i = 0; i < circles.length; i++) {
        if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
//            alert ('Circle clicked ,clicked number ' + (i + 1));

            enlargecircle();



        }
    }
});

 }
function enlargecircle(){
    radius++;

    drawcircle(objCleft, objCtop, radius);
    console.log("radius:"+radius);
    requestAnimationFrame(enlargecircle);
}

 function draw() {
     switch (objA) {
         case 0:
             drawtriangle(objAleft, objAtop, height);
             break;
         case 1:
             drawcircle(objAleft, objAtop, radiusA);
             break;
         case 2:
             drawrectangle(objAleft, objAtop, length, breadth);
             break;
         default:
             drawcircle(objAleft, objAtop, radius);
             break;

     }
     console.log("beginning of checking objB");
     switch (objB) {
         case 0:
             drawtriangle(objBleft, objBtop, height);
             console.log("triangle drawn");
             break;
         case 1:
             drawcircle(objBleft, objBtop, radiusB);
             break;
         case 2:
             drawrectangle(objBleft, objBtop, length, breadth);
             break;
         default:
             drawcircle(objBleft, objBtop, radius);
             break;
     }
     switch (1) {
         case 0:
             drawtriangle(objCleft, objCtop, height);
             console.log("triangle drawn");
             break;
         case 1:
             dCircle(ctx, objCleft, objCtop, radiusC, circles) ;
             break;
         case 2:
             drawrectangle(objCleft, objCtop, length, breadth);
             break;
         default:
             drawcircle(objCleft, objCtop, radius);
             break;
     }


 }

 function drawcircle(x, y, r) {
//    ctx.beginPath();
//     ctx.arc(x, y, r, 0, 2 * Math.PI, false);
//     ctx.clip();
//     ctx.clearRect(0,0,canvas.height,canvas.width);
     ctx.beginPath();
     ctx.arc(x,y,r-1,0,2*Math.PI,false);
     ctx.lineWidth = 1;
     ctx.fillStyle='#f0f8ff';
     ctx.fill();
//     ctx.strokeStyle = '#f0f8ff';
//     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(x, y, r, 0, 2 * Math.PI, false);
     ctx.lineWidth = 1;
     ctx.strokeStyle = '#003300';
     ctx.stroke();

 }

 function drawtriangle(x, y, h) {
     ctx.beginPath();
     ctx.moveTo(x, y - h / 2);
     ctx.lineTo(x - h / 2, y + h / 2);
     ctx.lineTo(x + h / 2, y + h / 2);
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

 function drawrectangle(x, y, length, breadth) {
     //clearRect(x-length/2,y-breadth/2,length,breadth)
     ctx.rect(x - length / 2, y - breadth / 2, length, breadth);
     ctx.stroke();
 }
 window.onload = init;

 function buttonClicked() {
     location.reload(true);
 }


 var dcircle = function (ctx,x, y, r) {
     ctx.beginPath();
     ctx.arc(x, y, r, 0, 2 * Math.PI, false);
     ctx.lineWidth = 1;
     ctx.strokeStyle = '#003300';
     ctx.stroke();
     console.log("circle drawn at C")
 };
var Circle = function(x, y, r) {
    this.left = x - r;
    this.top = y - r;
    this.right = x + r;
    this.bottom = y + r;
};
var dCircle = function (ctx, x, y, r, circles) {
    dcircle(ctx, x, y, r);
    var circle = new Circle(x, y, r);
    circles.push(circle);
};



//$('.myCanvas').click(function (e) {
//    var clickedX = e.pageX - this.offsetLeft;
//    var clickedY = e.pageY - this.offsetTop;
//
//    for (var i = 0; i < circles.length; i++) {
//        if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
//            alert ('Circle clicked ,clicked number ' + (i + 1));
//        }
//    }
//});


var cutCircle=function(ctx,x,y,r){
    ctx.globalCompositeOperation='destination-out';
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.fill;
}
