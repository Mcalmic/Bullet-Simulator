var bullet, wall;
var speed, weight, thickness;
function setup() {
  createCanvas(1600, 400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 80, 20)
  wall = createSprite(1200, 200, 60, height/2);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);  

  text("Speed: " + round(speed) + "     " + "Weight: " + round(weight), 1300, 50)

  if(bullet.isTouching(wall)){
    bullet.velocityX = 0;
    damage = (weight*speed*speed*0.5)/(thickness*thickness*thickness)
    if(damage > 10){

      bullet.shapeColor = "red";

    } else {

      bullet.shapeColor = "green";

    }
    console.log(damage)

  }

  drawSprites();
}