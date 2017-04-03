// var b = p5.board('/dev/cu.usbmodem1421', 'arduino');
var express = require('express')
var app = express();
//
var port = process.env.PORT || 4000
var server = require('http').Server( app )
server.listen(port, function(){
  console.log("App is running on port" + port);
})

app.use ( express.static('sketch') )


var led;
var lightStatus = false;
var cfade3 = 138;
var cfade2 = 20;
var cfade1 = 58;
var fade = 'fade';
var tone;




function preload(){
  tone = loadSound("assets/sounds/ominous_tone.mp3")
}

function setup() {
 // led = b.pin(9, 'LED');
 createCanvas(windowWidth,windowHeight)
 background(70,70,70)
 tone.loop()
}

// function draw(){
//   console.log(lightStatus);
//   if (lightStatus === true) {
//     background(58, 20, 138)
//   }else if (lightStatus === false){
//     background(0,0,0)
//   }else if (lightStatus === fade) {
//     background(cfade1,cfade2,cfade3)
//     if (cfade3 <= 0) {
//       cfade3 = 138;
//       cfade2 = 20;
//       cfade1 = 58;
//     }else {
//     cfade1--
//     cfade2--
//     cfade3--
//   }
// }
//
// }

function draw(){
  if (keyIsDown(65)){
    // led.off();
    tone.stop()
    background(255,0,0)
    // lightStatus = true;
  } else {
    // led.on();
    // led.write(200)
    tone.play()
    background(0,0,0)
    // lightStatus = false;
  }
}


function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}
