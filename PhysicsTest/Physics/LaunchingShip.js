let moved = false;
let clicked = false;
let unlocked = true;

let timeStart;

function mousePressed() {
  //  Las coordenadas de nuestra nave son (550, 450)
  if (mouseX < 560 && mouseX > 540 &&
      mouseY < 460 && mouseY > 440) {
    clicked = true;
  }
}

function mouseDragged() {
  //  En caso de que previamente se haya clickeado la nave, se sabe
  //  que se acaba de definir una dirección.
  if (clicked && going) {
    moved = true;

    let v1 = createVector(150, 150);
    let v2 = createVector(mouseX - width/2, mouseY - height/2);

    let v3 = p5.Vector.sub(v1, v2)

    drawArrow(v1, v3, 'red');
    
    /*stroke(255, 0, 0);
    strokeWeight(4);
    line(v1.x, v1.y, v3.x + 150, v3.y + 150);
    strokeWeight(1);
    stroke(0);*/
    
  }
}

function mouseReleased() {
  //  En caso de que ya se haya definido la ruta, se prosigue a
  //  hacer que la nave siga la ruta.
  if (moved && unlocked) {
    let v1 = createVector(550, 450);
    let v2 = createVector(mouseX, mouseY);

    //  v3 es hacia donde será lanzada la nave.
    let v3 = p5.Vector.sub(v1, v2)

    //  Se reduce la potencia del lanzamiento a un décimo de su
    //  potencia :p.
    ship.vel = p5.Vector.mult(v3, 0.1);

    //  Los planetas y la nave se empiezan a mover. Así como se
    //  evita que la nave siga siendo lanzada hacia otra ruta.
    start = true;
    unlocked = false;
    timeStart = new Date();
  }

  //  En caso de que solamente haya sido clickeada, pero no definida
  //  la ruta, se hace reset y evitar bugs.
  clicked = false;
}

//  Función robada para dibujar flechas xd.
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}