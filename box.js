class Block {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':0.01
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 1){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5);
      stroke("cyan");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility -5;
        tint(255,this.body,this.Visibility);
        pop();
    }
      
    }

    score(){
      if(this.Visibility < 0 && this.Visibility > -105) {
        score++;
      }
    }
  };