class Ground{
    constructor(x,y,width,height){
        this.ground = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/rground.png")
        World.add(world,this.ground);
    }
    display(){
        rectMode(CENTER);
        var pos=this.ground.position;
        var angle=this.ground.angle;
        push();
        fill("brown");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}