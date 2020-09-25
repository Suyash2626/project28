class Tree{
    constructor(x,y){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,120,200/2,options);
    this.width=45;
    this.height=220;
    
    World.add(world, this.body);
}

display() {
    var pos=this.body.position;
    push(); 
    
    translate(pos.x,pos.y);
    rectMode(CENTER);
    
    rect(0,0,this.width,this.height);
    
    pop();
}

}

    
   
