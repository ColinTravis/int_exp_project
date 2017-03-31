var smallImage;
var x = 100;
var y = 100;
var blurAmount = 0.1;
var blurSlow = 0;

function preload(){
  smallImage = loadImage('/images/pizza.png')
  // LOAD IN SMALLER IMAGE FOR BLURRING
}

function setup() {
	createCanvas(windowWidth,windowHeight)
  imageMode(CENTER)
  frameRate(10)
}

function draw(){
  background(119, 119, 119)
  portrait()

  blurSlow+= blurAmount

  image(smallImage, x, y, 100, 100)
  if (keyIsDown(65)){
    // x-=5;
    filter(BLUR, blurSlow);
    console.log(blurSlow);
}
  if (keyIsDown(66)){
    // x+=5;
  }
  // x = windowWidth/2
  // y = windowHeight/2
}

function portrait(){
  background(255,0,0)
}

function blah(){
  background(0,255,0)
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}
