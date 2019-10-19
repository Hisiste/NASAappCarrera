class attractor {
    //constructor recibe masa, radio y distancia
	constructor(m,r,d) {
		this.mass = m;
        //La posición de todos los atractores es el origen. Hay que cambiar esto
		this.pos = createVector(0,0);
        this.radius = r;

        this.distance = d;
		this.angle = random(0, 6.28);
        this.planets = [];
        this.orbitSpeed = random(0.01, 0.03);
	}


    orbit() {
		this.angle = this.angle + this.orbitSpeed;
		this.pos = createVector(this.distance * cos(this.angle), this.distance * sin(this.angle))
		if (this.planets != null) {
			for (var i = 0; i < this.planets.length; i++){
				this.planets[i].orbit();
			}
		}
	}

	spawnMoons(Total) {
		for (var i = 0; i < Total; i++) {
			var radius = this.radius/10 - i;
            var mass = random (25,30);
			var distance = random(100, 300);
            //Cambia "new Planets" por "new attractor"
			this.planets[i] = new attractor(mass,radius, distance);
		}
	}

	show() {
        // Las funciones "push()" y "pop()" son para evitar que
		// los "translate()" de los planetas se afecten entre sí.
		/*push();
		rotate(this.angle);
        // El "translate()" es para dibujar los elipses en
        // coordenadas relativas a lo que se dibujó anteriormente.
		translate(this.distance, 0);*/
		fill(255);
		ellipse(this.distance * cos(this.angle), this.distance * sin(this.angle), this.radius*2, this.radius*2);
		if (this.planets != null)
        {
			for (var i = 0; i < this.planets.length; i++)
            {
				this.planets[i].show();
			}
		}
		//pop();
	}

    //Funcion para solo mostrar el sol
	_show() {
        //log(this.pos);
		ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
	}

}
