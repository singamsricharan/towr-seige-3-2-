class polgon{
    constructor(x, y, r){
      var options={
        retitution=0.1,
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=bodies.rect(x,y,r,options);
    }
    display(){
      ellipseMode(CENTER);
      ellipse(x,y,r);
    }
  }
  