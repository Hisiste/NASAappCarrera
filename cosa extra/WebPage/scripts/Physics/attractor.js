// Standard Normal variate using Box-Muller transform.
function randn_bm() {
    var u = 0, v = 0;
    while(u === 0) u = Math.random(); //Converting [0,1) to (0,1)
    while(v === 0) v = Math.random();
    return Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v );
    //return 10
}

class attractor {
    //constructor recibe masa, radio y distancia
	constructor(m,r,d) {
		this.mass = m;
        //La posición de todos los atractores es el origen. Hay que cambiar esto
		this.pos = createVector(0,0);
        this.radius = r;

        this.distance = d;
		//this.angle = random(0, 6.28);
		this.angle = 0;
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
        var distance = 0;
		let ograd=floor(this.radius);
		for (var i = 0; i < Total; i++) {
            //Genera una masa aleatoria para los objetos.
            var mass = random(floor(this.mass*0.05),floor(this.mass*0.1));
            //var mass = random(floor(this.mass*12),floor(this.mass*15));
			//distance = distance + random(abs(floor((ograd/2)+(randn_bm()+5)*20)),abs(floor((ograd/2)+(randn_bm()+5)*30)));
            distance = distance + random(ograd+30,ograd+50);

			//	Mientras más grande sea "ratio", mayor será la diferencia en tamaños de los planetas de los extremos.
			//	Evita un valor tal que si "distance = 100", el valor "radius" se haga negativo (usa Wolfram para checar ésto).
			var ratio = 0.11;

			//	La variable del coseno hiperbólico es la distancia. (ratio*distance/20) determina lo rápido que decrece la
			//	función. (- ratio*20) mueve la función para que su punto máximo sea cuando "distance = 200", el punto medio.
			var x = (ratio*distance/10) - ratio*20;
			/*
				"randn_bm()" se aproxima a una v.a. de distribución normal estándar (Z con dist. N(0, 1)). Luego se tiene
				que la v.a. X = Zs + m tiene distribución N(m, s^2). Al final se le suma +10 para que el punto máximo de la
				función sea exactamente 9.
			*/
			var radius = randn_bm() + -(Math.exp(x)+Math.exp(-x))/2 + ograd/2;
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
