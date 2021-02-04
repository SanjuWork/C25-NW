class Ball {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.5,
          'friction':1.0,
          'density':1.0
      }
      this.x=x;
      this.y=y;
      this.radius = radius;
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
     
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
    //  var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
    //  rotate(angle);
      /* updated code*/
    //  rectMode(CENTER)
			//strokeWeight(4);
      //ellipseMode(CENTER);
			imageMode(CENTER);
			image(this.image, 0,0,this.radius, this.radius)
   console.log("helo")
     // ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  