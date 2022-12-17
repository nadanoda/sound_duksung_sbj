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
  wave2.freq(200);
  wave2.amp(0);
  
  //버튼만들기
  button=createButton('R');
  button.touchStarted(toggle);
  //
  
  // 슬라이더
  //colorMode(HSB);
  slider = createSlider(0, 360, 60, 40);
  slider.position(10, 10);
  slider.style('width', '80px');
  background(value);
  
}

function draw(){
  //wave1.freq(slider.value());
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

function touchStarted(){
  bvalue = 150;
  wave1.start();
  wave1.amp(100);
  playing= true;
  wave1.freq(slider.value());
  deviceMoved();
}

function touchEnded(){
  bvalue = 50;
  wave1.amp(0);
  playing=false;
}


function muti(){
  text(touches.length, 200, 200);
}




/*function touchStarted(){
  if(touches.length > 0 && touches.length < 2 ){
  bvalue = 150;
  wave1.start();
  wave1.amp(100);
  playing= true;
  wave1.freq(slider.value());
  deviceMoved();
  }
  else if(touches.length > 1 && touches.length < 3){
  bvalue = 250;
  wave2.start();
  wave2.amp(10);
  //playing= true;
  wave2.freq(slider.value());
  deviceMoved();
  }
  
}

function touchEnded(){
  if(touches.length > 0 && touches.length < 2 ){
  bvalue = 50;
  wave1.amp(0);
  playing=false;
  }
  else if(touches.length > 1 && touches.length < 3){
  bvalue = 0;
  wave2.amp(0);
  playing=false;
 }
}*/


