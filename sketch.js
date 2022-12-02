let r,g,b;

function setup() {
  //createCanvas(displayWidth, displayHeight);
  createCanvas(displayWidth, displayHeight);
  //r=random(50,255);
  //g=random(0,200);
  //b=random(50,255);
}

function draw() {
  //background(r,g,b);
  //console.log('draw');
  //text("accelerationX+")
}

//function toggle()
function deviceMoved()
{
  background(accelerationX, accelerationY, accelerationZ);
  text(accelerationX+", "+ accelerationY+","+accelerationZ, 10 , 10);
  //r=map(accelerationX,-90,90,100,175);
  //g=map(accelerationX,-90,90,100,200);
  //b=map(accelerationX,-90,90,100,200);
}