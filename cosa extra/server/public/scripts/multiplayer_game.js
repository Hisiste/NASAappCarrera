let radius=15;
let planet1;
let planet2;
let start = false;

let ship;
let angle1=0;
let rotvec=createVector(0,0);

function setup() {
    var cnv = createCanvas(windowWidth-(windowWidth*0.1), windowHeight-(windowHeight*0.1));
    cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    frameRate(30);

    planet1=new attractor (45,25,width*0.45,-0.002,PI/2);
    planet2=new attractor (50,35,width*0.85,-0.0004,0.6);

    ship=new aBody(10,5,planet1.pos.x-planet1.radius-10,planet1.pos.y-planet1.radius-10);

    //socket=io.connect('http://localhost:3000');
    //socket.on('mouse',newBall);
}

function draw() {
    background(0);

    rotvec=createVector(0,0);

    if (!start) {
        angle=angle+0.001;
        rotvec=createVector(cos(angle),sin(angle));
        ship.pos=p5.Vector.add(planet.pos,rotvec);
    }

    ship.show();
    planet1.show();
    planet2.show();

    if (clicked) {
        mouseDragged();
    }

    if (start) {
        ship.update(planet1);
        ship.update(planet2);
    }

    planet1.orbit();
    planet2.orbit();
}
