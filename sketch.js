var osc;
var playing = false;
var value = 0;
var x= 100;
var y = 100;

function setup() {
	createCanvas(windowWidth,windowHeight)
	rectMode(CENTER);
	textAlign(CENTER);
	backgroundColor = color(129, 130, 128)

	osc = new p5.Oscillator();
	osc.setType('sine');
	osc.freq(240);
	osc.amp(0);
	osc.start();
	frameRate(5)
}

function redScreen(){
	if (keyIsDown(65)) {
		if (!playing) {
			osc.amp(5,0.5);
			playing = true;
			backgroundColor = color(255,0,0);
		} else {
			osc.amp(0, 0.5);
			playing = false;
			backgroundColor = color(0,0,0);
		}
	}
}

function draw(){
	// ellipse(windowWidth/2,windowHeight/2,50,50)
	background(backgroundColor)


// ========= TOGGLES RED SCREEN AND SINE
redScreen()

// ============= FOR MOVING OBJECT ON SCREEN (NEEDS FRAMERATE ADJUSTED)
	// if (keyIsDown(LEFT_ARROW))
  //   x-=5;
	//
  // if (keyIsDown(RIGHT_ARROW))
  //   x+=5;
	//
  // if (keyIsDown(UP_ARROW))
  //   y-=5;
	//
  // if (keyIsDown(DOWN_ARROW))
  //   y+=5;
	//
  // clear();
  // fill(255, 0, 0);
  // ellipse(x, y, 50, 50);

}





//===============Quick flashes
// function keyPressed() {
//   if (keyCode === 65) {
//     background(255,0,0) = 255;
//   } else if (keyCode === RIGHT_ARROW) {
//     background(0,0,255)
//   }
// }

function windowResized(){
	resizeCanvas(windowWidth,windowHeight)
}
