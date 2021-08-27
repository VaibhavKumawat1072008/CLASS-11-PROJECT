var ship,ship_running;

function preload(){
ship_running = loadAnimation("ship-1.png")
}

function setup(){
  createCanvas(1200,600);
  ship = createSprite(400,400,100,100);
  ship.addAnimation(ship_running);
  ship_running.scale = 1;
  ship.x=1000;
}

function draw() {
  background("blue");
 drawSprites();
}