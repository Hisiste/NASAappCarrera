let radius=50;
let ssystem;
let ship;

function setup() {
    createCanvas(800, 600);
    frameRate(30);

    //Systema con 3 planetas, masa del sol=5
    ssystem=new attractor (5,radius,0);
    ssystem.spawnMoons(3);

    //Cuerpo orbital masa=1, radio=5, pos=(150,150)
    ship=new aBody (1,5,150,150);

    //Velocidad inicial de con magnitud 5 en dirección 45°
    ship.vel=createVector(5,0);
    ship.vel.rotate(3.141516/4);
}

function draw() {
    background(0);

    translate(width/2, height/2);

    //Actualiza la velocidad orbital de la nave y la dibuja
    ship.update(ssystem);
    ship.show();

    //Muestra el systema y lo hace orbitar
    ssystem.show();
    ssystem.orbit();
}
