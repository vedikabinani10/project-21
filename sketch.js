var bullet, wall, thickness;
var bulletSpeed, bulletWeight;
var damage;

function setup() {
  createCanvas(1600,400);
  bulletSpeed=random(223,321);
  bulletWeight=random(30,52);
  bullet = createSprite(50,200,100,20);
  bullet.shapeColor="blue";
  bullet.velocityX = bulletSpeed;
  thickness = random(22,83);
  wall = createSprite(1200,200,thickness,100);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(wall.x-bullet.x <= (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    damage = 0.5*bulletWeight*bulletSpeed*bulletSpeed/wall.width*wall.width*wall.width;
  }
    if(bulletWeight==32 && bulletSpeed==223 && wall.width==70 && damage==3.68)
    {
      wall.shapeColor="green";
    }
    else if(bulletWeight==32 && bulletSpeed==223 && wall.width==40 && damage==12.43)
    {
      wall.shapeColor="red";
    }
    text("Damage : " + damage, 340,30);
    
}