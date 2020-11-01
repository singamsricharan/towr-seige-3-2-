const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  polygon1=new polgon(400,200,100);
  b1=new Box(200,200);
  b2=new Box(200,200);
  b3=new Box(200,200);
  b4=new Box(200,200);
  b5=new Box(200,200);
  b6=new Box(200,200);
  b7=new Box(200,200);
}

function draw() {
  background("brown"); 
  Engine.update(engine);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  polygon1.display();
  drawSprites();
}