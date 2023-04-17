function setup() {
createCanvas(600,600);

background(204,229,255); 
}

function draw(){
  //base hair
  strokeWeight(5);
  point(520,600);
  point(440,95);
  point(150,95);
  point(90,600);
  
  noFill();
  beginShape();
  fill(150, 75, 0);
  curveVertex(520,600);
  curveVertex(520,600);
  curveVertex(440,95);
  curveVertex(150,95);
  curveVertex(90,600);
  curveVertex(90,600);
  endShape();
  
  //neck
  fill(255,204,153);
  rect(245, 400, 110, 240);
  
  //face
  fill(255,204,153);
  ellipse(300,300,250,300);
  
  //left eye
  fill(102,51,0);
  ellipse(260,290,15,15);
  
  //right eye
  fill(102,51,0);
  ellipse(340,290,15,15);
  
  //mouth
  strokeWeight(4);
  fill(255,204,153);
  arc(300,330,40,45,0,PI);
}
  
