var bullet, wall; 

function setup() {
  createCanvas(1600,400);
  bullet= createSprite(100, 200, 20, 20);

  thickness= random(22,83);
  speed= random(223,321); 
  weight= random (30,52); 
  bullet.velocityX= speed; 

  wall= createSprite(1200, 200, thickness, height/2); 
}

function draw() {
  background(0);

 

  if (wall.x-bullet.x<wall.width/2+bullet.width/2){ 
    bullet.velocityX=0; 
    var damage= (0.5 * weight * speed * speed)/(thickness*t); 
    if (damage<=10){
      wall.shapeColor= color("green"); 
    }
    if (damage>10){
      bullet.shapeColor= color("red"); 
    }
  }



  drawSprites();
}