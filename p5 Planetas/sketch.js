let sun;

function setup() {
  // put setup code here
  createCanvas(400, 400);
  sun = new Planet(100, 0);
}

function draw() {
  // put drawing code here
  background(0);
  sun.show();
}

class Planet {
	constructor(r, d) {
		this.radius = r;
		this.distance = d;
		this.angle = 0;
	}

	show() {
		ellipse(0, 0, this.radius*2, this.radius*2);
	}
}