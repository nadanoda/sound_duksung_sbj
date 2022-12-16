let slider; // 슬라이더 생성
var wave1; // 라
var wave2; // 시
var button;
var playing=false;
var value = 0; // 흔들리면 색이 바뀌기
let bvalue = 0; // 버튼 누르기

function setup(){
  createCanvas(windowWidth,windowHeight);
  //라
  wave1=new p5.Oscillator();
  wave1.setType('sine');
  wave1.freq(440);
  wave1.amp(0);
  //시
  wave2=new p5.Oscillator();
  wave2.setType('sine');
  wave2.freq(490);
  wave2.amp(0);
  
  //버튼만들기
  button=createButton('R');
  button.mousePressed(toggle);
  //
  
  // 슬라이더
  //colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
  background(value);
  
}

function draw(){
  wave1.freq(slider.value());
  if(playing){
    background(255,0,255);
  }
  else{
    background(51);
  }
  background(value);
  console.log('draw');
  fill(0,255,0);
  //fill(0,255,255);
  textAlign(CENTER,CENTER);
  textSize(25);
  
  let val = slider.value();
  background(val, 100, 100, 1);
  
  value=constrain(value -2,0,200)
  
    if (value > 10) {
        text("Moving Device", width / 2, height / 2);
    } else {
        text("Device is Relaxed ", width / 2, height / 2);
    }
  
  fill(bvalue);
  rect(25, 25, 150, 150);
  //describe('50-by-50 black rect turns white with touch event.');
  
  for(var i=0;i<touches.length;i++){
    muti();  
  }
}

function toggle(){
  /*if(!playing){
    wave1.start();
    wave1.amp(0.5,1);
    playing=true;
    }
  else{
    wave1.amp(0,1);
    playing=false;
  }*/
}

function deviceMoved(){
   value = constrain(value + 5, 0, 255)
}

/*function mousePressed() {
  if (value === 0) {
    value = 250;
    wave1.start();
    wave1.amp(0.5);
  } else {
    value = 0;
    wave1.amp(0);
  }
}*/

function touchStarted(){
  value = 250;
  wave1.start();
  wave1.amp(0.5);
  plating= true;
}

function touchEnded(){
  value = 0;
  wave1.amp(0);
}

function muti(){
  text(touches.length, 200, 200);
  text(touches[0].x, 200, 220);
  text(touches[0].y, 200, 240);
  text(touches[1].x, 200, 260);
  text(touches[1].y, 200, 280);
}

/*function mousePressed() {
  
    if(!playing){
    wave1.start();
    wave1.amp(0.5,1);
    playing=true;
    }
  } else {
    wave1.amp(0,1);
    playing=false;
    
  }
}

function mousePressed() {
  if (bvalue === 0) {
    bvalue = 100;
    wave1.start();
    wave1.amp(0.5);
    /*if(!playing){
    wave1.start();
    wave1.amp(0.5,1);
    playing=true;
    }
  } else {
    //wave1.amp(0,1);
    //playing=false;
    bvalue = 255;
    wave1.amp(0);
  }
}*/