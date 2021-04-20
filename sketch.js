
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	

function preload()
{
var engine;
var world;
var ball;
var bin;
var line;
var line2;


}

function setup() {
	createCanvas(900, 500);

	

	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	ball=createSprite(50,380,10,10);
	bin=createSprite(610,400,80,10);
	line1=createSprite(575,380,10,30);
	line2=createSprite(645,380,10,30);
	line=createSprite(450,420,900,5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.x=mouseX;
  ball.y=mouseY;
  
	

  drawSprites();
 
}



