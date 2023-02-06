function setup() {
    createCanvas(windowWidth, windowHeight);  
  }
  
  function draw() {
    drawLines();
  }
  
  function drawLines() {
    let y = 0;
    let c = 1;
    
    // purple line
    for (let i = 0; i < windowWidth/3*2; i += 15) {
      stroke('rgba(156,124,226,0.7)');
      strokeWeight(2.5);
      line(i, y, i*2, i*2);
    }
    
    // pink line
    for (let i = windowHeight; i > 0; i -= 10) {
      stroke('rgba(221,42,193,0.7)');
      strokeWeight(1.5);
      line(i*4, i*4, y, i);
    }
    
    // green line
    for (let i = 0; i < windowHeight; i += 13) {
      stroke('#009688');
      strokeWeight(1);
      line(i, i, y, i*3.5);
    }
    
    // gradient line
    for (let i = 0; i < 300; i += 7) {
      stroke(c*i);
      strokeWeight(5);
      line(i, i, i*2, y);
    }
    
    // blue line
    for (let i = 200; i < windowWidth; i += 8) {
      stroke('rgba(42,183,221,0.7)');
      strokeWeight(1);
      line(i, i, i*2, y);
    }
    
    // white columns
    for (let i = 0; i < windowWidth; i += 20) {
      fill(250);
      rect(i, 0, 10, windowHeight);
    }
    
    // yellow columns
    for (let i = windowWidth/3*2; i < windowWidth; i += 15) {
      stroke('rgba(221,208,42,0.7)');
      line(i, y, i*4, i*2);
    } 
    
    // red rows
    for (let i = 0; i < windowWidth; i += 20) {
      fill('#FD7878')
      noStroke();
      for (let j = windowWidth/3; j < windowWidth; j += 20) {
        rect(j, j, windowWidth, 5);
      }
    }
  }
  
  // resize canvas
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }