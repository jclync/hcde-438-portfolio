function setup() {
    createCanvas(windowWidth, windowHeight);
    colorMode(HSB, height, height, height);
    background(0);
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill(mouseY, height, height);
      circle(mouseX, mouseY, 50);
    } else {
      fill('white');
      circle(mouseX, mouseY, 25);
    }
  }
  
  // resize canvas
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }