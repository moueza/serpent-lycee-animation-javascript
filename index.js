document.addEventListener("DOMContentLoaded", domloaded, false);
function domloaded() {
  const vers = " v14";
  console.log("in consol+" + vers);
  // jQuery methods go here...
  //document.getElementById("div1").innerHTML = "Hello JavaScript!";

  //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
  //rectangle vert
  const canvas1 = document.getElementById("canvas");
  const ctx1 = canvas1.getContext("2d");

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
}

//just On draw from array
function drawArrayOn() {

}

//just draw last line
function drawArrayDiff() {

}

var sizeArrayMaxSize=10;

//just draw last line AND delete first line White + update array
function drawArrayUpdate(sizeArrayMaxSizee) {

}

//appends Point to end Of any Array
function addPointToEnd(Point p) {

}

//update Array (head + tail pop()) regarding  sizeArrayMaxSize
function addPointToEndIf(sizeArrayMaxSizee) {

}