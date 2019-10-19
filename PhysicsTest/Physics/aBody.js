

class aBody {
    //El constructor recibe masa, radio, (x,y)
    constructor(m,r,x,y){
        this.pos = createVector(x,y);
        this.radius= r;

        this.mass = m;
        this.vel=createVector(0,0);
        this.acc=createVector(0,0);
    }

    show() {
        fill(0,255,0);
        ellipse(this.pos.x, this.pos.y, this.radius*2, this.radius*2);

        //Lo comentado abajo muestra la flecha de atracción gravitacional

        stroke(255, 0, 0);
        strokeWeight(4);
        line(this.pos.x,this.pos.y,this.vel.x,this.vel.y);
        strokeWeight(1);
        stroke(0);
    }

    update(rel) {
        //Constante gravitacional
        var g=0.01;

        //Calcula la distancia del objeto a el atractor "Sol" toma la norma y lo normaliza
        var dist=p5.Vector.sub(rel.pos, this.pos);
        var d=dist.mag();
        dist.normalize();

        //Ley de gravitción universal vectorial
        var F=dist.mult((g*this.mass*rel.mass)/d*d);

        //Leyes de movimiento
        this.acc=F.mult(1/this.mass);
        this.vel.add(this.acc);

        //Repite el proceso para todos los planetas y lunas
        for (let i=0; i<rel.planets.length; i++)
        {
            dist = p5.Vector.sub(rel.planets[i].pos, this.pos);
            d=dist.mag();
            dist.normalize();
            F=dist.mult((g*this.mass*rel.planets[i].mass)/d*d);
            this.acc=F.mult(1/this.mass);
            this.vel.add(this.acc);
        }

        //Cambia la pocisión en base a la suma total de las fuerzas
        this.pos.add(this.vel);
    }
}
