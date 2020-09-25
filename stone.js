class Stone{
    constructor(x,y,radius){
    var options={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
    }
      this.y=y;
      this.x=x;
      this.radius=radius/2;
      
     this.body= Matter.Bodies.circle(this.x,this.y,this.radius/2, options)
      World.add(world,this.body);
}
display() {
  var pos=this.body.position;
  push();
  
  translate(pos.x,pos.y);
  strokeWeight(4);
  stroke("black");
  fill("purple");
  ellipse(0,0,this.radius);
  
  pop();

}
}