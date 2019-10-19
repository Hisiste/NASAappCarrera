let a,b,c;
function setup() {
  createCanvas(380, 100);
  noStroke();
  frameRate(5);
  a=color(255);
  b=color(255);
  c=color(255);
}
i=0;
function draw() {
  c=b;  
  b=a;
    clear();
    if(i%3==0){
        a=color(61);
      }
    else if(i%3==1){
        a=color(123);
      }
    else{
        a=color(255);
      }
  fill(a);
  ellipse(70,50,100,100);
  fill(b);
  ellipse(190,50,100,100);
  fill(c);
  ellipse(310,50,100,100);
  i=i+1;
}