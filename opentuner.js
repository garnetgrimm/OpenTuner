let cw = 1200;
let ch = 400;

let neckColor = null;
let margin = 0.3;
let marginPx = margin * ch;
let neckSpace = ch - 2 * marginPx;

let stringNum = 6;
let stringMarginPx = marginPx + 15;
let stringSpace = ch - (2 * stringMarginPx);
let stringWeight = [1, 1, 2, 3, 4, 5]

let fretNum = 20;

let singleDot = [3, 5, 7, 9, 12, 15, 17, 19, 21];

let notes = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"]
let tuning = ["E", "B", "G", "D", "A", "E"];
let music_scale = []

function setup() {
  neckColor = color('#e7c5ac');
  var canvas = createCanvas(cw, ch);
  canvas.parent('picture');
}

function draw() {
  background(220);
  
  fill(neckColor);
  rect(cw / fretNum, marginPx, cw, neckSpace);
  
  strokeWeight(5);
  stroke('gray');
  for(let i = 0; i < fretNum; i++) {
    let x = ((i+1) * cw) / fretNum;
    line(x, marginPx, x, neckSpace + marginPx);
  }
  
  stroke('black')
  for(let i = 0; i < stringNum; i++) {
    let y = ((i * stringSpace) / (stringNum-1)) + stringMarginPx;
    strokeWeight(stringWeight[i]);
    line(0, y, cw, y);
  }
  
  fill('black');
  strokeWeight(0);
  for(let i = 0; i < singleDot.length; i++) {
    let x = ((singleDot[i]+0.5) * cw) / fretNum;
    let y = marginPx + neckSpace + 10;
    ellipse(x, y, 10 ,10);
	if(singleDot[i] == 12) {
		ellipse(x, y + 15, 10, 10);
	}
  }
  
  strokeWeight(0);
  textAlign(CENTER, CENTER);
  for(let string = 0; string < stringNum; string++) {
    for(let fret = 0; fret < fretNum; fret++) {
      let x = ((fret + 0.5) * cw) / fretNum;
      let y = ((string * stringSpace) / (stringNum-1)) + stringMarginPx;
      let idx = notes.indexOf(tuning[string]);
      let note = notes[(idx + fret) % notes.length];
      let func = music_scale.indexOf(note);
      if(func >= 0 || fret == 0) {
		if(func % 2 == 0) { 
			fill('white');
		} else {
			fill('gray');
		}
        ellipse(x, y, 30);
        fill('black');
		if(fret != 0)
			text(func + 1, x, y);
		else
			text(note, x, y);
      }
    }
  }
}