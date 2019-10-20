let radius=15;
let systm,ship;
let start = false;


function setup() {
    var cnv = createCanvas(windowWidth-(windowWidth*0.1), windowHeight-(windowHeight*0.1));
    cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    frameRate(30);

    systm=new attractor (10,radius,0);
    systm.spawnMoons(9);

    ship=spawnShip(random(1,3),5,random(20,floor(width/4)),random(20,floor(height/4)));
    ship.vel=createVector(0,1);
}

function draw() {
    background(0);
    translate(width/2, height/2);

    ship.show();
    systm.show();

    if (clicked) {
        //console.log("clicking!");
        mouseDragged(ship,systm);
    }

    //  Hasta que se lanze la nave es cuando todo empieza a andar.
    if (start) {
        ship.update(systm);
        systm.orbit();
    }
}
