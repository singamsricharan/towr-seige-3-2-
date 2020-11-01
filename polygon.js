class polgon{
    constructor(x, y, r){
      var options={
        restitution:0.1,
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.image=loadImage("polygon.png")
      this.body=Bodies.circle(x,y,r,options);
    }
    display(){
        image(this.image,this.x,this.y,this.r);
      ellipseMode(CENTER);
      ellipse(x,y,r);
    }
  }
  