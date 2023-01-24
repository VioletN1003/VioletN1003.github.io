// Adapted from the example bar-clock

var xPos = 20; // starting x position to draw
var yPos = 20;  // starting y position to draw
var barHeight = 180; // height of each bar
var barMargin = 10; // space between each bar
var barMax = 760; // maximum width of each bar <-- this changes over time

var last_min = 0;

//this gets called only once in the very beginning
function setup() {
	createCanvas(800,600);
}

//this gets called every frame (about 60 frames per second)
function draw() {
  var h = map(hour(), 0, 24, 0, barMax); // Map the function hour() to values from 0 - barMax
  var m = map(minute(), 0, 60, 0, barMax);
  var s = map(second(), 0, 60, 0, barMax);

  //draw 3 background bars to indicate the max width
  noStroke();
  fill(255);
  rect(xPos,yPos,barMax,barHeight);
  rect(xPos,yPos + barHeight + barMargin,barMax,barHeight);
  rect(xPos,yPos + barHeight*2 + barMargin*2,barMax,barHeight);

  let hour_color =  map(hour(), 0, 24, 0, 255);
  fill(0, 0, hour_color, 80);
  rect(xPos,yPos,h,barHeight);   // Bar for hours

  let minute_color =  map(minute(), 0, 60, 0, 255);
  fill(minute_color, 41, 98, 80);
  rect(xPos,yPos + barHeight + barMargin,m,barHeight);   // Bar for minute

  let second_color = map(second(), 0, 60, 0, 255);
  fill(25, second_color, 111, 80);
  rect(xPos,yPos + barHeight*2 + barMargin*2,s,barHeight);   // Bar for second

  if (minute() != last_min){
    last_min = minute();
    console.log(last_min);
  }
}

