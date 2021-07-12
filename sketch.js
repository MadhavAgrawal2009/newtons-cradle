
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof, bob1, bob2, bob3 ,bob4 ,bob5 ,bob6, rope1, rope2, rope3 ,rope4 ,rope5 ,rope6
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof =  new Roof(width/2, height/4, 250, 20);
	var startx = width/2;
	var starty = height/4 + 400;
	bob1 = new Bob(startx - 40,starty,20);
	bob2 = new Bob(startx - 20,starty,20);
	bob3 = new Bob(startx,starty,20);
	bob4 = new Bob(startx + 20,starty,20);
	bob5 = new Bob(startx + 40,starty,20);
    rope1 = new Rope(bob1.body, roof.body, -80, 0);
	rope2 = new Rope(bob2.body, roof.body, -40, 0);
	rope3 = new Rope(bob3.body, roof.body, 0, 0);
	rope4 = new Rope(bob4.body, roof.body, 40, 0);
	rope5 = new Rope(bob5.body, roof.body, 80, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed() { 
	if (keyCode === UP_ARROW) {
		 Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	}
 }



