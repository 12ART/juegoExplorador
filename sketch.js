var bg_img, explorer;
var guerrero;
var piramide;
var invisibleground;
var fireImg;

function preload(){

  piramide = loadImage("assets/piramide.jpg");
  guerreroImg = loadImage("assets/guerrero.png");
  fireImg = loadImage("assets/fire.png")
}



function setup() {
  createCanvas(1800, 800);
  guerrero = createSprite(700,600,100,100);
  guerrero.addImage(guerreroImg);
  guerrero.scale = 0.5;

  invisibleground = createSprite(200,780,2800,10);
  invisibleground.visible=false

}

function draw() {
    background(piramide);

    if(keyDown(RIGHT_ARROW)){
    guerrero.x = guerrero.x + 4;
    }

    if(keyDown(LEFT_ARROW)){
      guerrero.x = guerrero.x - 4;
    }
    
    if(keyDown("space")){
      guerrero.velocityY = -10;
    }
    guerrero.velocityY = guerrero.velocityY +0.8;
    guerrero.collide(invisibleground);

    spawnFire();
    drawSprites();
  }  

  function spawnFire(){
    if(frameCount % 60===0){
      fire=createSprite(600,765,40,10);
      fire.velocityX=-3
      fire.scale= 0.3
      fire.addImage(fireImg)
      fire.x=Math.round(random(0,1500))
      
    }
  }