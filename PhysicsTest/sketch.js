let radius=10;
let ssystem;
let ship;
let start = false;

function setup() {
    createCanvas(800, 600);
    frameRate(30);

    //Systema con 3 planetas, masa del sol=5
    ssystem=new attractor (5,radius,0);
    ssystem.spawnMoons(9);

    //Cuerpo orbital masa=1, radio=5, pos=(150,150)
    ship=new aBody (1,5,150,150);

    //Velocidad inicial de con magnitud 5 en dirección 45°
    ship.vel=createVector(5,0);
    ship.vel.rotate(3.141516/4);
}

function draw() {
    background(0);

    translate(width/2, height/2);

    //  Dibuja la nave.
    ship.show();

    //  Muestra el sistema.
    ssystem.show();

    if (clicked) {
        mouseDragged();
    }

    //  Hasta que se lanze la nave es cuando todo empieza a andar.
    if (start) {
        ship.update(ssystem);
        ssystem.orbit();
    }
}
