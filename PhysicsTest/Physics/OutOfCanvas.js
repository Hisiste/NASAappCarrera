let timer;
let timer2 = 0;
let going = true;

let timeFinish;
let FinishingTime;

let diff;

function OutOfCanvas(coords) {
	if (coords.x > width/2 || coords.x < -width/2 ||
		coords.y > height/2 || coords.y < -height/2) {
		if (frameCount % 30 == 0 && timer >= 0) {
			timer--;
		}

		else if (timer < 0) {
			GameOver();
		}
	}

	else {
		timer = 6;
	}

	fill(123);
	textSize(100);
	if (timer < 6)
		text(timer, 0, 0);

	return false;
}

function TimeRecord() {
	if (frameCount % 30 == 0 && going)
		timer2++;

	fill(255);
	textSize(30);
	text(timer2, 300, height/2);
}

function GameOver() {
	//if (going) {
		timeFinish = new Date();

		diff = new Date(timeFinish - timeStart);
	    
	    var FinishingTime = diff.getHours() + ":" +
	                        diff.getMinutes() + ":" +
	                        diff.getSeconds();
	//}

    going = false;
	start = false;
}