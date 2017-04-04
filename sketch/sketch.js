var b = p5.board('/dev/cu.usbmodem1421', 'arduino');

var led;
// var lightStatus = false;
// var cfade3 = 138;
// var cfade2 = 20;
// var cfade1 = 58;
// var fade = 'fade';
var tone;



function preload(){
  tone = loadSound("assets/sounds/ominous_tone.mp3")
}

function setup() {
 // led = b.pin(9, 'LED');
 createCanvas(windowWidth,windowHeight)
 background(70,70,70)
 // tone.loop()
}

function draw(){
  if (keyIsDown(65)){
    led.off();
    tone.stop()
    background(255,0,0)
    console.log("Key is down!");
    // lightStatus = true;
  } else {
    led.on();
    led.write(200)
    tone.play()
    background(0,0,0)
    console.log("Key is up!");
    // lightStatus = false;
  }
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}
