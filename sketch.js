
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	paper = new Paper(200,600,40);
	ground = new Ground(800,690,1600,70);

	binr = new Dustbin(1200,645);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();    
  paper.display();
  ground.display();
  
  binr.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-100});   
	 }
   } 
 
