class Bob {
    constructor(x,y,radius) {
        var options = {
            isStatic:false,
            restitution:1,
            friction: 0,
            density:0.5
        }
       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world,this.body);
    }   
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        fill("cyan");
        ellipse(0,0,this.radius,this.radius);
        pop(); 
    }
   }