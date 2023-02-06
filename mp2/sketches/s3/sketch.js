let xPosRect, xPosCircle;
let goRightRect, goRightCircle = true;
let diameter;

// Create a new canvas to the browser size
function setup () {
  createCanvas(windowWidth, windowHeight);
  xPosRect = 0;
  diameter = 50;
  xPosCircle = diameter/2;
  yPos = 0;
  colorMode(HSB, height, height, height);
}

// Render loop that draws shapes with p5
function draw() {
  background(0);
  rect(xPosRect, windowHeight/7*2, 50, 50, 15);
  rect(xPosRect, windowHeight/7*5, 50, 50, 15);
  circle(xPosCircle, windowHeight/7*4, diameter);
  fill(xPosRect % 600, height, height);
  
  // rectangle
  if (xPosRect < 0) {
    goRightRect = true;
  } else if (xPosRect > windowWidth - 50) {
    goRightRect = false;
  }

  if (goRightRect) {
    xPosRect += 3;
  } else {
    xPosRect -= 3;
  }

  // circle
  if (xPosCircle < 0 + diameter/2) {
    goRightCircle = true;
  } else if (xPosCircle > windowWidth - diameter/2) {
    goRightCircle = false;
  }

  if (goRightCircle) {
    xPosCircle += 5;
  } else {
    xPosCircle -= 5;
  }
}

// resize canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}