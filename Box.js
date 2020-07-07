class Box {
    constructor(x, y, width, height,color) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.color = color;
      this.Visiblity = 255;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
     if(this.body.speed<5){
        angleMode(RADIANS);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
     }

     else{
       World.remove(world,this.body);
       this.Visiblity=this.Visiblity-10;
     }
    }
      
     score(){
      if (this.Visiblity < 0 && this.Visiblity > -100){
        score++;
      }
    }
  
  
       
     
     
    
  }
  