
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4;
var stone;
var tree;
var launcher;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	body=createSprite(450,620,35,95);
	
	
	ground = new Ground(350,652,800,15);
	
	stone = new Stone(450,610,15);

	tree = new Tree(530,620);

	mango1 = new Mango(520,630,15);
	mango2 = new Mango(530,620,15);
	mango3 = new Mango(500,635,15);
	mango4 = new Mango(520,640,15);
	
	launcher = new Launcher(stone.body,{x:520,y:620})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  tree.display();

  stone.display();
  ground.display();

  launcher.display()

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);


  drawSprites();
 
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
		launcherObject.attach(stoneObj.body);
	}
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased() {
launcher.fly();
}

