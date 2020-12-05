const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,bar1,bar2,bar3;
var engine,world;


function preload(){
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800,725);

	engine=Engine.create();
	world=engine.world;
	 
	var ground_options = {
		isStatic: true
	}
  
	var package_options = {
		isStatic: true,
		restitution:0.5	
	}

	var bar1_options = {
		 isStatic: true	
	}

	var bar2_options = {
		isStatic: true	
   }

   var bar3_options = {
	isStatic: true	
}
  
	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	bar1=createSprite(width/2,height-50,200,20);
	bar1.shapeColor=color(255,0,0)

	bar2=createSprite(290,height-140,20,200);
	bar2.shapeColor=color(255,0,0)

	bar2=createSprite(510,height-140,20,200);
	bar2.shapeColor=color(255,0,0)

	packageBody = Bodies.circle(width/2 , 200 ,5 , package_options );
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 ,ground_options );
 	World.add(world, ground);


	bar1Body = Bodies.rectangle(width/2,600,200,20,bar1_options);
	World.add(world, bar1);

	bar2Body = Bodies.rectangle(width/2,500,20,200,bar2_options);
	World.add(world, bar2);

	bar3Body = Bodies.rectangle(width/2,500,20,200,bar3_options);
	World.add(world, bar2);
}


function draw() {

  background(0);
  Engine.update(engine);

  rectMode(CENTER);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;

 drawSprites();
 
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    
  
  Matter.Body.setStatic(packageBody,false);
    
  }
}