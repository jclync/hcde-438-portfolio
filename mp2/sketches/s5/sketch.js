let fft, x, h, sent;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  song = loadSound('OMG.mp3');
  fft = new p5.FFT();
  
  // create a new Amplitude analyzer
  analyzer = new p5.Amplitude();

  // Patch the input to an volume analyzer
  analyzer.setInput(song);
  song.amp(0.5);
}


function draw() {
  background(0);
  fill(255);
  let title = 'OMG by NewJeans';
  text(title, windowWidth/5*3, windowHeight/4)
  
  changeText();
  
  // Get the average (root mean square) amplitude
  let rms = analyzer.getLevel();
  
  spectrum = fft.analyze();
  
  noStroke();
  fill('rgba(255,0,183,1)');
  circle(windowWidth/5*3 - title.length, windowHeight/4 - title.length/2, 10+rms*200);
  fill('rgba(255,0,183,1)');
  for (let i = 0; i< spectrum.length; i++) {
    x = map(i, 0, spectrum.length, 0, width);
    h = -height + map(spectrum[i], 0, 255, height, 0);
    //rect(x, height, width / spectrum.length*2, h )
    rect(x, height, width/spectrum.length, h)
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}

function changeText() {
    if (song.isPlaying()) {
    sent = '🎶 song is playing';
    text(sent, windowWidth/5*3 - sent.length*2, windowHeight/3)
  } else {
    sent = '👆 tap to play music';
    text(sent, windowWidth/5*3 - sent.length*2, windowHeight/3)
  }
}

// resize canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}