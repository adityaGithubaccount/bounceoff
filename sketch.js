var fixedRect,movingRect;
var g1 , g2 , g3 , g4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1 = createSprite(100, 100, 50, 80);
  g1.shapeColor = "green";
  g2 = createSprite(200, 100, 50, 80);
  g2.shapeColor = "green";
  g3 = createSprite(300, 100, 50, 80);
  g3.shapeColor = "green";
  g4 = createSprite(500, 100, 50, 80);
  g4.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
 
if(isTouching(movingRect,g1)) {
  g1.shapeColor = "red";
  movingRect.shapeColor = "red";
}

else {
g1.shapeColor = "green";
movingRect.shapeColor = "green";
}

  drawSprites();
}



  
