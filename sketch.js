
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var cuadro;
var cuerda1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	cuadro = new Ground(400,200,400,40);
	//Create the Bodies Here.

	bob1 = new Bob(360,575,40);
	bob2 = new Bob(300,575,40);
	bob3 = new Bob(420,575,40);
	bob4 = new Bob(480,575,40);
	bob5 = new Bob(260,575,40);
	cuerda1 = new Cuerda(bob1.body,cuadro.body,-40,0);
	cuerda2 = new Cuerda(bob2.body,cuadro.body,-80,0);
	cuerda3 = new Cuerda(bob3.body,cuadro.body,-0,0);
	cuerda4 = new Cuerda(bob4.body,cuadro.body,40,0);
	cuerda5 = new Cuerda(bob5.body,cuadro.body,-120,0);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

 // if(keyDown(UP_ARROW)){
//bob5.y=200;
  //}
  
  drawSprites();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  cuadro.display();

  cuerda1.display();
  cuerda2.display();
  cuerda3.display();
  cuerda4.display();
  cuerda5.display();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-20,y:-15})
  }
}

