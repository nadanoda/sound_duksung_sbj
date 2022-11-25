var wave;
var playing = false;
var button;
function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(600,480);
  wave = new p5.Osciliator();
  wave.setType('sine');
  wave.start();
  wave.freq(440);
  wave.amp(0);

  button = createButton('play/pause');
  button.mousePressed(toggle);
}

function draw() {
}

function toggle(){
  if(!playing){
    wave.amp(0.5,1);
    playing = true;
  }
  else{
    wave.amp(0,1);
    playing= false;
  }
}