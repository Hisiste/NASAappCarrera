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

    ssystem.collition(ship, ssystem);

    if (clicked) {
        mouseDragged();
    }

    if (!going) {
        fill(123);
        textSize(50);
        text("Your time was", -200, -50);
        text(FinishingTime, -50, 0);
        text("seconds!",-150, 50);
    }

    //  Hasta que se lanze la nave es cuando todo empieza a andar.
    if (start) {
        ship.update(ssystem);
        ssystem.orbit();

        TimeRecord();

        if (OutOfCanvas(ship.pos)) {
            fill(123);
            textSize(20);
            text("LO SIENTO CARNAL FALLASTE XD.", -100, -30);
        }
    }
}
