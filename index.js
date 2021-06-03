document.addEventListener("DOMContentLoaded", domloaded, false);
function domloaded() {
  const vers = " v14";
  console.log("in consol+" + vers);
  // jQuery methods go here...
  //document.getElementById("div1").innerHTML = "Hello JavaScript!";

  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
  //rectangle vert
  const canvas1 = document.getElementById("canvas");
  // const ctx1 = canvas1.getContext("2d");
  var ctx1 = canvas1.getContext("2d");

  ctx1.fillStyle = "green";
  //ctx1.fillRect(10, 10, 150, 100);

  /**TODO draw color
   * https://www.w3schools.com/tags/canvas_lineto.asp
   */
  //var canvas1 = document.getElementById("myCanvas");
  //var ctx1 = canvas1.getContext("2d");
  ctx1.beginPath();
  ctx1.moveTo(0, 0);
  ctx1.lineTo(100, 100);
  //ctx1.stroke();

  ctx1.lineTo(100, 30);

  ctx1.lineTo(0, 30);

  ctx1.stroke();

  var p1 = new Point(1, 1);
  var p2 = new Point(29, 42);
  var p3 = new Point(70, 30);
  var pointsArray = [];
  //pointsArray[0] = p1;
  pointsArray.push(p1);
  pointsArray.push(p2);
  pointsArray.push(p3);
  //pointsArray[1] = p2;

  //pointsArray[2] = p3;
  //pointsArray.push("elt2");

  console.log("while AV size=" + pointsArray.length);
  var cpt = 0;
  while (cpt < pointsArray.length) {
    console.log("while=" + cpt);
    cpt++;
  }
  ctx1.beginPath();
  ctx1.moveTo(100, 0);
  ctx1.lineTo(0, 100);

  //https://www.html5canvastutorials.com/tutorials/html5-canvas-line-color/
  ctx1.lineWidth = 2;
  // set line color
  ctx1.strokeStyle = "#ff0000";
  ctx1.stroke();

  drawArrayOn(pointsArray, ctx1);
  
  cpt=-1;
  //~ do...while
  while(cpt++>0){
  console.log("while 1");
 ctx1.beginPath();
  ctx1.moveTo(0, 0+20*cpt);
  ctx1.lineTo(100, 10+20*cpt);
    
  ctx1.lineTo(0, 20+20*cpt);
    ctx1.stroke();
  }
}

/**just On draw from array Green*/
function drawArrayOn(arr, ctx1) {
  s = arr.length;
  //from part = left of segments : index-1
  if (s >= 1) {
    /**2=line : */
    if (s >= 2) {
      for (let index = 0; index < s - 1; index++) {
        console.log("index=");
        console.log(index);

        const pointFrom = arr[index];
        const pointTo = arr[index + 1];
        ctx1.beginPath();
        //console.log("pointFrom.x=" + (pointFrom.x).toString;
        //%O https://stackoverflow.com/questions/7912576/console-log-showing-contents-of-array-object
        console.log("pointFrom.x=");
        console.log(pointFrom.x);

        ctx1.moveTo(pointFrom.x, pointFrom.y);

        console.log("pointTo.x=");
        console.log(pointTo.x);
        console.log("pointTo.y=");
        console.log(pointTo.y);

        ctx1.lineTo(pointTo.x, pointTo.y);
        //https://www.html5canvastutorials.com/tutorials/html5-canvas-line-color/
        ctx1.lineWidth = 2;
        // set line color
        ctx1.strokeStyle = "#00ff00";
        ctx1.stroke();
      }
    } else {
      console.log("no Points enough");
    }
  }
}

//just draw last line
function drawArrayDiff() {}

var sizeArrayMaxSize = 10;

//just draw last line AND delete first line White + update array
function drawArrayUpdate(sizeArrayMaxSizee) {}

//appends Point to end Of any Array
function addPointToEnd(pointt) {}

//update Array (head + tail pop()) regarding  sizeArrayMaxSize
function addPointToEndIf(pointt) {}

class Point {
  x;
  y;
  constructor(xx, yy) {
    this.x = xx;
    this.y = yy;
  }
}

//https://www.w3schools.com/js/js_object_prototypes.asp
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

var myFather = new Person("John", "Doe", 50, "blue");

//https://www.w3schools.com/js/js_classes.asp
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
let myCar1 = new Car("Ford", 2014);
