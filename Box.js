class Box{
  constructor(x, y, width, height){
    var options={
      restitution:1,
      density:1.2,
    }
    this.body=Bodies.rectangle(x,y,30,40,options);
    this.x=x;
    this.y=y;
    this.width=width=30;
    this.height=height=40;
    World.add(world,this.body)
  }
  display(){
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
  }
}
