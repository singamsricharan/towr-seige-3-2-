const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  polygon1=new polgon(200,200,10);
  b1=new Box();
  b2=new Box();
  b3=new Box();
  b4=new Box();
  b5=new Box();
  b6=new Box();
  b7=new Box();
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