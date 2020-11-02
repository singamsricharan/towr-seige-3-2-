const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon;
function preload(){
  polygonImg=loadImage("polygon.png")
}
function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  b1=new Box(200,200);
  b2=new Box(200,200);
  b3=new Box(200,200);
  b4=new Box(200,200);
  b5=new Box(200,200);
  b6=new Box(200,200);
  b7=new Box(200,200);
  b8=new Box(330,235);
  b9=new Box(360,235);
  b10=new Box(390,235);
  b11=new Box(420,235);
  b12=new Box(420,235);
  b13=new Box(360,195);
  b14=new Box(390.195);
  b15=new Box(420,195);
  b16=new Box(390,155);
  b17=new Box(200,200);
  b18=new Box(200,200);
  b19=new Box(200,200);
  b20=new Box(200,200);
  b20=new Box(200,200);
  ground1=new Ground(600,390,1200,20);
  ground2=new Ground(400,300,200,20);
  ground3=new Ground();
  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  chain1=new SlingShot(this.polygon,{x:100,y:200});
}
function draw() {
  background(255,255,255); 
  Engine.update(engine);
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  ground1.display();
  ground2.display();
  ground3.display();
  imageMode(CENTER);
  image(polygonImg,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  chain1.fly();
}