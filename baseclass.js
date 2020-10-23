class BaseClass{
    constructor(x, y, width, height, radius) {
        var options = {
            'restitution':0.8,
            'friction':0.5,
            'density':1.0
        }
        
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("bin.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}