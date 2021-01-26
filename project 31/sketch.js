const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var umbrella, thunder, thunderImg, thGrp, rainsound, thSound;
var drops = [];

function preload(){
    //thunderImg = loadAnimation("tb1.png", "tb2.png", "tb3.png", "tb4.png");
    
}

function setup(){
  createCanvas(400, 700);
  engine = Engine.create();
  world = engine.world;
    
  umbrella = new Umbrella(200,500)
  umbrella.debug = true;
//creating drops 
if(frameCount% 50 === 0){
  for(var i = 0; i<170; i++){
    drops.push(new Rain(random(0,400),random(0,400)))
  }
}
 
 thGrp = createGroup();
}

function draw(){
  background(0)
  //rainsound.play();
  //Engine.run(engine);
  Engine.update(engine);

  umbrella.display();

  for(var i = 0; i<100; i++){
    drops[i].display()
    drops[i].updateY()
  }
  
 

 // makeThunder();
drawSprites();
  
}

function makeThunder(){
  if(frameCount % 200 === 0){
    thunder = createSprite(200, 100, 30, 30)
    thunder.addAnimation("light",thunderImg);
    thunder.scale = 0.5;
    thSound.play();
    thGrp.add(thunder);
  }else{
    thGrp.destroyEach();
  }
  
}

