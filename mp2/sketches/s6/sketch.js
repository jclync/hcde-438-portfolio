// The midi notes for happy birthday
//let bNotes = [60, 60, 62, 60, 65, 64, 60, 60, 62, 60, 67, 65, 60, 60, 72, 69, 65, 64, 62, 70, 70, 69, 65, 67, 65]
// let lyrics = ['you', 'ha', 'py', 'birth', 'day', 'to', 'you', 'ha', 'py', 'birth', 'day', 'to', 'you', 'ha', 'py', 'birth', 'day', 'dear', 'youuu', 'youuu', 'ha', 'py', 'birth', 'day', 'to']

// The midi notes for twinkle twinkle little star
let midiNotes = [60, 60, 67, 67, 69, 69, 67, 65, 65, 64, 64, 62, 62, 60, 67, 67, 65, 65, 64, 64, 62, 67, 67, 65, 65, 64, 64, 62, 60, 60, 67, 67, 69, 69, 67, 65, 65, 64, 64, 62, 62, 60]

let notes = [60, 62, 64, 65, 67, 69]

let lyrics = ['are ⭐️', 'twin-', '-kle', 'twin-', '-kle', 'lit-', '-tle', 'star', 'how', 'I', 'won-', '-der', 'what', 'you', 'are', 'up', 'a-', '-bove', 'the', 'world', 'so', 'high', 'like', 'a', 'dia-', '-mond', 'in', 'the', 'sky', 'twin-', '-kle', 'twin-', '-kle', 'lit-', '-tle', 'star', 'how', 'I', 'won-', '-der', 'what', 'you']

// The index of the note we will play
let noteIndex = 0;
let midiVal, freq, sent;


// Initialize variables here so they can be reused
let osc, squareSize, squareX, squareY, val;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);

  env = new p5.Envelope();  
  
  // Create our oscillator
  osc = new p5.TriOsc();
  
  // Initial values for our square
  squareSize = windowWidth/6;
  squareX = windowWidth / 2 - squareSize / 2;
  squareY = windowHeight / 2 - squareSize / 2;

  strokeWeight(2);
}

function draw() {
  background(0);
  fill(255);
  
  // text
  textAlign(CENTER);
  text('tap ◻️ to play notes and view lyrics', windowWidth / 2, windowHeight / 11 * 2);
  text('press keys ⌨️ to play notes', windowWidth / 2, windowHeight / 11 * 8);
  text('keys: 1, 1, 8, 8, 0, 0, 8, 6, 6, 5, 5, 3, 3, 1, 8, 8 , 6, 6, 5, 5, 3, 8, 8, 6, 6, 5, 5, 3, 1, 1, 8, 8, 0, 0, 8, 6, 6, 5, 5, 3, 3, 1', windowWidth / 2, windowHeight / 11 * 9);
  textAlign(LEFT);
  text('lyrics: ', windowWidth / 3*1.1, windowHeight / 11 * 3);

  changeColor();

  // Draw the square
  square(squareX, squareY, squareSize, 20);
}

function playNote(note) {
  // start audio
  osc.start();
  
  // play note
  freq = midiToFreq(note);
  osc.freq(freq);
  env.ramp(osc, 0, 1.5, 0);
}

function changeColor() {
  if (hover(squareX, squareY, squareSize)) {
    // If mouse is over the circle, change the color
    if (mouseIsPressed) {
      // If the mouse is pressed make the fill more saturated
      fill(255);
      text(lyrics[noteIndex], windowWidth/2, windowHeight / 11 * 3);
      fill('rgb(255,0,172)');
    } else {
      // If we are just hovering, it is not as saturated
      fill('rgb(255,128,214)');
    }
  } else {
    // When mouse is not over the circle it is white
    fill(230);
  }  
}

function hover(x, y, size) {
  const disX = (x+squareSize/2) - mouseX;
  const disY = (y+squareSize/2) - mouseY;
  if (sqrt(sq(disX) + sq(disY)) < size / 2) {
    return true;
  } else {
    return false;
  }
}

function mousePressed() {
  // Only play the note if we are clicking on the circle
  if (hover(squareX, squareY, squareSize)) {
    // Play the note
    playNote(midiNotes[noteIndex]);
    // Increment it by one, modulo to wrap around when we reach the end
    noteIndex = (noteIndex+1) % midiNotes.length
  }
}

function keyPressed() {
  // key '1' pressed
  if (keyCode === 49) {
    //pink
    stroke('rgb(255,0,172)');
    playNote(notes[0]);
  // key '3' pressed
  } else if (keyCode === 51) {
    // purple
    stroke('rgb(144,0,255)');
    playNote(notes[1])
  // key '5' pressed
  } else if (keyCode === 53) {
    // blue
    stroke('rgb(0,244,255)');
    playNote(notes[2])
  // key '6' pressed
  } else if (keyCode === 54) {
    // green
    stroke('rgb(0,255,18)');
    playNote(notes[3])
  // key '8' pressed
  } else if (keyCode === 56) {
    // yellow
    stroke('rgb(241,255,0)');
    playNote(notes[4])
  // key '0' pressed
  } else if (keyCode === 48) {
    // orange
    stroke('rgb(255,129,0)');
    playNote(notes[5])
  // any other key pressed
  } else {
    // black
    stroke(0);
  }
}

// resize canvas
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}