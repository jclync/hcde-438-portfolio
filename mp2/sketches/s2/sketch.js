function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
  }
  
  function draw() {
    drawRects();
    noLoop();
  }
  
  function drawRects() {
    for (let i = 0; i < 15; i++) {
      let y = random(0, windowHeight/2);
      let x = random(0, windowHeight/2);
      
      let a = sqrt(x);
      let b = random(0, 10);
      let c = random(0, 5);
      
      let re = random(0, 255);
      let gr = random(0, 255);
      let bl = random(0, 255);
      stroke(255);
      fill(re, gr, bl);
      push();
      translate(width/4, height/10);
      rect(x, y, x, y, a, b, c, b*b);
      pop();
    }
  }
  
  // resize canvas
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }