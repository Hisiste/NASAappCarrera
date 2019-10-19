let a,b,c;
function setup() {
  let myCanvas=createCanvas(380, 100);
  myCanvas.parent("widgetHolder");
  myCanvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);

  noStroke();
  frameRate(3);
  a=color(255, 253, 166);
  b=color(255, 253, 166);
  c=color(255, 253, 166);
}
i=0;
function draw() {
  c=b;
  b=a;
    clear();
    if(i%3==0){
        a=color(255, 253, 166);
      }
    else if(i%3==1){
        a=color(255/3, 253/3, 166/3);
      }
    else{
        a=color(255/6, 253/6, 166/6);
      }
  fill(a);
  ellipse(70,50,100,100);
  fill(b);
  ellipse(190,50,100,100);
  fill(c);
  ellipse(310,50,100,100);
  i=i+1;
}
