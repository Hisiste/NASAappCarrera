let sun;

function setup() {
  createCanvas(400, 400);
  sun = new Planet(30, 0);
  sun.spawnMoons(5);
}

function draw() {
  background(0);
  translate(width/2, width/2)
  sun.show();
  sun.orbit();
  // adios mundo.
}


class Planet {
	constructor(r, d) {
		this.radius = r;
		this.distance = d;
		this.angle = random(0, 6.28);
        this.planets = [];
        this.orbitSpeed = random(0.01, 0.03);
		//let planets = new Planet[3]
	}

	orbit() {
		this.angle = this.angle + this.orbitSpeed;
		if (this.planets != null) {
			for (var i = 0; i < this.planets.length; i++){
				this.planets[i].orbit();
			}
		}
	}

	spawnMoons(Total) {
		for (var i = 0; i < Total; i++) {
			var radius = 10 - i;
			var distance = random(35, 100);
			this.planets[i] = new Planet(radius, distance);
		}
	}

	show() {
		// Las funciones "push()" y "pop()" son para evitar que
		// los "translate()" de los planetas se afecten entre sí.
		push();
		rotate(this.angle);
		// El "translate()" es para dibujar los elipses en
		// coordenadas relativas a lo que se dibujó anteriormente.
		translate(this.distance, 0);
		fill(255);
		ellipse(0, 0, this.radius*2, this.radius*2);
		if (this.planets != null) {
			for (var i = 0; i < this.planets.length; i++) {
				this.planets[i].show();
			}
		}
		pop();
	}
}