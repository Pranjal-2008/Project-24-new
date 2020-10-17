
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground;

function preload()
{
	      
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(600,600,1200,20,{isStatic:true});
	World.add(world,ground);
	
	

	//Create the Bodies Here.
	
	paper1 = new Paper(50,500,20);
	box1 = new Dustbin(1100,540,20,100);
	box2 = new Dustbin(1025,580,150,20);
	box3 = new Dustbin(950,540,20,100);


	Engine.run(engine);
  
}


function draw() {
	background(0);
  rectMode(CENTER);
  fill("yellow");
  rect(ground.position.x,ground.position.y,1200,20);
  
  paper1.display();
  box1.display();
  box3.display();
  box2.display();
  
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

}
}



