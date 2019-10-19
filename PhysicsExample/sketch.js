let a=[];
let b;
var g=0.01;

function setup() {
    createCanvas(800, 600);
    frameRate(30);
    a.push(new attractor(10,50,400,300));
    a.push(new attractor(15,25,712,500));
    b = new aBody (1,10,150,150);
    b.vel=createVector(2,0);
    b.vel.rotate(3.141516/2);
}

function draw() {
    background(0);
    b.update(a);
    for (let i=0;i<a.length;i++)
    {
        a[i]._show();
    }
    b.show();
}

class aBody {
    constructor(m,r,x,y){
        this.pos = createVector(x,y);
        this.radius= r;

        this.mass = m;
        this.vel=createVector(0,0);
        this.acc=createVector(0,0);
    }

    show() {
        console.log(this.pos);
        ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
    }

    update(rel) {
        for (let i=0; i<rel.length; i++)
        {
            var dist= p5.Vector.sub(rel[i].pos, this.pos);
            var d=sqrt(dist.x*dist.x+dist.y*dist.y);
            var r=dist.mult(1/d);
            var F=r.mult((g*this.mass*rel[i].mass)/d*d);
            this.acc=F.mult(1/this.mass);
            this.vel.add(this.acc);
        }
        this.pos.add(this.vel);
    }
}

class attractor {
	constructor(m,r,x,y) {
		this.mass = m;
		this.pos = createVector(x,y);
        this.radius = r;
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

	_show() {
        log(this.pos);
		ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);
	}

    /*updatePos() {

    }*/
}
