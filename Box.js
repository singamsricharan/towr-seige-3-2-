class Box{
  constructor(x, y, width, height){
    var options={
      retitution=0.1,
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=bodies.rect(x,y,width,height,options);
  }
  display(){
    rectMode(CENTER);
    rect(x,y,width,height);
  }
}
