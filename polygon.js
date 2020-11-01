class polgon{
    constructor(x, y, r){
      var options={
        retitution=0.1,
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("polygon.png")
      this.body=bodies.rect(x,y,r,options);
    }
    display(){
        image(this.image,this.x,this.y,this.r);
      ellipseMode(CENTER);
      ellipse(x,y,r);
    }
  }
  