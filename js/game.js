 var objA;
 var objB;
 var tolerance = 5;
 var objC;
 var animationTime = 20;
 var radius = 20;
 var radiusA;
 var radiusB;
 var radiusC;

 var length = 50;
 var breadth = 40;
 var lengthA;
 var lengthB;
 var breadthA;
 var breadthB;


 var height = 40;
 var heightA;
 var heightB;


 var objAleft = 50;
 var objAtop = 50;
 var objBleft;
 var objBtop;
 var objCleft;
 var objCtop;
 var distancetoA;
 var distancetoB;

 var ctx;
 var canvas;

 var circleA;
 var circleB;
 var rectangleA;
 var rectangleB;
 var triangleA;
 var triangleB;

 var gameStatus = true;



 function init() {

     circleA = [];
     circleB = [];
     rectangleA = [];
     rectangleB = [];
     triangleA = [];
     triangleB = [];


     //assigning radius for circles
     radiusA = radius;
     radiusB = radius;
     radiusC = radius;

     //assigning length and breadth for rectangles
     lengthB = length;
     lengthA = length;
     breadthA = breadth;
     breadthB = breadth;

     //assigning height for triangles
     heightA = height;
     heightB = height;

     requestAnimationFrame = requestAnimationFrame || webkitRequestAnimationFrame;
     objA = Math.floor(Math.random() * 2 + 1);
     objB = Math.floor(Math.random() * 2 + 1);
     objC = 1; // Math.floor(Math.random() * 3);
     canvas = document.getElementById('canvas');
     ctx = canvas.getContext('2d');

     //for positionong object B
     objBtop = canvas.height - 100;
     objBleft = canvas.width - 100;

     //for positioning target C
     objCleft = canvas.width / 2 + 70 - Math.floor(Math.random() * 200);
     objCtop = canvas.height / 2 + 70 - Math.floor(Math.random() * 200);

     ctx.font = "15px serif"
     ctx.fillText('Intersect both here', objCleft - radiusC - 40, objCtop + radiusC + 20);
     ctx.fillText('Click to create ripple', objAleft - radiusC - 20, objAtop + radiusC + 20);
     ctx.fillText('Click to create ripple', objBleft - radiusC - 50, objBtop + radiusC + 20);
     //to check the clicked
     distancetoA = Math.floor(Math.sqrt(Math.pow(objAleft - objCleft, 2) + Math.pow(objAtop - objCtop, 2)));
     console.log("distance to a is :" + distancetoA);

     distancetoB = Math.floor(Math.sqrt(Math.pow(objBleft - objCleft, 2) + Math.pow(objBtop - objCtop, 2)));
     console.log("distance to b is :" + distancetoB);

     draw();


     //for clicked on canvas
     canvas.addEventListener('click', function (e) {
         var clickedX = e.pageX - this.offsetLeft;
         var clickedY = e.pageY - this.offsetTop;

         if (clickedX < (objAleft + 40) && clickedY < (objAtop + 40)) { // for checking in objA area

             switch (objA) {
                 case 0:

                     break;
                 case 1:
                     if (clickedX < circleA[0].right && clickedX > circleA[0].left && clickedY > circleA[0].top && clickedY < circleA[0].bottom) {
                         //setInterval(enlargecircleA,animationTime);
                         enlargecircleA();
                         checkcollision();
                     }
                     break;
                 case 2:
                     if (clickedX < rectangleA[0].right && clickedX > rectangleA[0].left && clickedY > rectangleA[0].top && clickedY < rectangleA[0].bottom) {
                         //setInterval(enlargerectangleA,animationTime);
                         enlargerectangleA();
                         checkcollision();
                     }
                     break;
                 default:
                     break;
             }
         } else { //for checking in other area which is objB

             switch (objB) {
                 case 0:
                     break;
                 case 1:
                     if (clickedX < circleB[0].right && clickedX > circleB[0].left && clickedY > circleB[0].top && clickedY < circleB[0].bottom) {
                         //setInterval(enlargecircleB,animationTime);
                         enlargecircleB();
                         checkcollision();
                     }
                     break;
                 case 2:
                     if (clickedX < rectangleB[0].right && clickedX > rectangleB[0].left && clickedY > rectangleB[0].top && clickedY < rectangleB[0].bottom) {
                         //setInterval(enlargerectangleB,animationTime);
                         enlargerectangleB();
                         checkcollision();
                     }
                     break;
                 default:
                     break;
             }
         }

         //    for (var i = 0; i < circles.length; i++) {
         //        if (clickedX < circles[i].right && clickedX > circles[i].left && clickedY > circles[i].top && clickedY < circles[i].bottom) {
         ////            alert ('Circle clicked ,clicked number ' + (i + 1));
         //            switch(i){
         //                case 0:
         //                    setInterval(enlargecircleA,animationTime);
         //                    break;
         //                case 1:
         //                    setInterval(enlargecircleB,animationTime);
         //                    break;
         //                case 2:
         //                    alert("you cannot click on the target :P ");
         //                    break;
         //            }
         //
         //
         //
         //
         //
         //        }
         //    }

     });

 }

 function enlargecircleA() {

     radiusA++;
     drawcircle(objAleft, objAtop, radiusA);
     //checkcollision();
     console.log("radiusA:" + radiusA);
     requestAnimationFrame(enlargecircleA);
 }

 function enlargecircleB() {

     radiusB++;
     drawcircle(objBleft, objBtop, radiusB);
     console.log("radiusB:" + radiusB);
     //checkcollision();
     requestAnimationFrame(enlargecircleB);
 }

 function enlargerectangleA() {
     lengthA+=2;
     breadthA+=2;
     drawrectangle(objAleft, objAtop, lengthA, breadthA);
     //checkcollision();
     requestAnimationFrame(enlargerectangleA);
 }

 function enlargerectangleB() {
     lengthB+=2;
     breadthB+=2;
     drawrectangle(objBleft, objBtop, lengthB, breadthB);
     //checkcollision();
     requestAnimationFrame(enlargerectangleB);
 }

 function draw() {
     switch (objA) {
         case 0:
             drawtriangle(objAleft, objAtop, height);
             break;
         case 1:
             dCircle(ctx, objAleft, objAtop, radiusA, circleA);
             break;
         case 2:
             dRectangles(ctx, objAleft, objAtop, lengthA, breadthA, rectangleA);
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
             dCircle(ctx, objBleft, objBtop, radiusB, circleB);
             //drawcircle(objBleft, objBtop, radiusB);
             break;
         case 2:
             dRectangles(ctx, objBleft, objBtop, lengthB, breadthB, rectangleB);
             //drawrectangle(objBleft, objBtop, length, breadth);
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
             drawcircle(objCleft, objCtop, radiusC);
             //ctx.font = "30px Arial";
             //ctx.fillText("Intersect here",120,125);
             //ctx.rect(objCleft-radiusC,objCtop+radiusC,100,20);



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

     ctx.beginPath();
     ctx.arc(x, y, r - 1, 0, 2 * Math.PI, false);
     ctx.lineWidth = 1;
     ctx.fillStyle = '#f0f8ff';
     ctx.fill();
     //     ctx.strokeStyle = '#f0f8ff';
     //     ctx.stroke();
     ctx.closePath();

     ctx.beginPath();
     ctx.arc(x, y, r, 0, 2 * Math.PI, false);
     ctx.lineWidth = 1;
     // ctx.strokeStyle = '#003300';
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

     ctx.beginPath();
     ctx.rect(x - length / 2, y - breadth / 2, length, breadth);
     ctx.closePath();
     ctx.fillStyle = '#f0f8ff';
     ctx.fill();
     //ctx.stroke();

     ctx.beginPath();
     ctx.rect(x - length / 2, y - breadth / 2, length, breadth);
     ctx.closePath();
     //  ctx.fill();
     ctx.stroke();



 }
 window.onload = init;

 function buttonClicked() {
     location.reload(true);
 }



 //for circles;
 // var dcircle = function (ctx,x, y, r) {
 //     ctx.beginPath();
 //     ctx.arc(x, y, r, 0, 2 * Math.PI, false);
 //     ctx.lineWidth = 1;
 //     ctx.strokeStyle = '#003300';
 //     ctx.stroke();
 //     console.log("circle drawn at C")
 // };
 var Circle = function (x, y, r) {
     this.left = x - r;
     this.top = y - r;
     this.right = x + r;
     this.bottom = y + r;
 };
 var dCircle = function (ctx, x, y, r, circles) {
     //dcircle(ctx, x, y, r);
     drawcircle(x, y, r);
     var circle = new Circle(x, y, r);
     circles.push(circle);
     //ctx.rect(x - w / 2, y - h / 2, w, h);
     //     ctx.stroke();
 };

 //for rectangles
 //var drectangle = function (ctx,x, y,w,h) {
 ////     ctx.rect(x - w / 2, y - h / 2, w, h);
 ////     ctx.stroke();
 //     ctx.beginPath();
 //     ctx.rect(x - w / 2, y - h / 2, w, h);
 //     ctx.closePath();
 //    ctx.lineWidth=1;
 //   //  ctx.fill();
 //     ctx.stroke();
 //
 // };
 var Rectangles = function (x, y, w, h) {
     this.left = x - w / 2;
     this.top = y - h / 2;
     this.right = x + w / 2;
     this.bottom = y + h / 2;
 };
 var dRectangles = function (ctx, x, y, w, h, rectangles) {
     //drectangle(ctx, x, y, w,h);
     drawrectangle(x, y, w, h);
     var rectangle = new Rectangles(x, y, w, h);
     rectangles.push(rectangle);
 };



 //for checking collision or failed result
 function checkcollision() {

     if (gameStatus) {
         console.log("collision checked");
         if (checkfailedA() || checkfailedB()) {
             alert("better try again HA! HA! HA!");
             gameStatus = false;
             location.reload();

         } else if (checksuccessA() && checksuccessB()) {

             alert("Congratulation, YOU WIN");
             gameStatus = false;
             location.reload();
         }

         requestAnimationFrame(checkcollision);
     }
 }

 function checkfailedA() {
     switch (objA) {
         case 0:
             break;
         case 1:
             if (radiusA > (distancetoA + radiusC + tolerance))
                 return true;
             else
                 return false;
             break;
         case 2:
             if ((objAleft + lengthA / 2 > objCleft + radiusC + tolerance) && (objAtop + breadthA / 2 > objCtop + radiusC + tolerance))
                 return true;
             else
                 return false;
             break;

             break;
         default:
             break;
     }
 }

 function checkfailedB() {
     switch (objB) {
         case 0:
             break;
         case 1:
             if (radiusB > (distancetoB + radiusC + tolerance))
                 return true;
             else
                 return false;
             break;
         case 2:
             if ((objBleft - lengthB / 2 < objCleft - radiusC - tolerance) && (objBtop - breadthB / 2 < objCtop - radiusC - tolerance))
                 return true;
             else
                 return false;
             break;
         default:
             break;
     }

 }

 function checksuccessA() {
     switch (objA) {
         case 0:
             break;
         case 1:
             if (radiusA < (distancetoA + radiusC) && radiusA > (distancetoA - radiusC))
                 return true;
             else
                 return false;
             break;
         case 2:
             if ((objAleft + lengthA / 2 < objCleft + radiusC) && (objAleft + lengthA / 2 > objCleft - radiusC))
                 return true;
             else
                 return false;
             break;

             break;
         default:
             break;
     }
 }

 function checksuccessB() {
     switch (objB) {
         case 0:
             break;
         case 1:
             if (radiusB < (distancetoB + radiusB) && radiusB > (distancetoB - radiusC))
                 return true;
             else
                 return false;
             break;
         case 2:
             if ((objBleft - lengthB / 2 < objCleft + radiusC) && (objBleft - lengthB / 2 > objCleft - radiusC))
                 return true;
             else
                 return false;
             break;
         default:
             break;
     }

 }
