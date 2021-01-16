
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
ground = createSprite(400,350,100000000000,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  obstaclegroup=createGroup();
  bananagroup=createGroup();
  score=0;
}


function draw() {
background(" lightblue");
 
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  obstaclespawn();
  bananaspawn();
  if(monkey.isTouching(obstaclegroup)){
    monkey.velocityX=0;
     obstaclegroup.setVelocityXEach(0);
    bananagroup.setVelocityXEach(0);
    
  }
  if(monkey.isTouching(bananagroup)){
    bananagroup.destroyEach();
    score=score+1;
  } text("Score: "+ score, 500,50);
  score = score + Math.round(getFrameRate()/60);
    
 drawSprites() ;
}
function obstaclespawn(){
if (frameCount % 60 === 0){
   var obstacle = createSprite(400,330,10,40);
   obstacle.velocityX = -6;
    
  
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.1;
  obstaclegroup.add(obstacle);
  obstaclegroup.setLifetimeEach(500);
}
}
function bananaspawn(){
if (frameCount % 60 === 0){
   var banana=createSprite(400,230,10,40);
   banana.velocityX=-6
    
  
  banana.addImage(bananaImage);
  banana.scale=0.1;
  bananagroup.add(banana);
  bananagroup.setLifetimeEach(500);
}
}





