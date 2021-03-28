class Slingshot{
    constructor(body1,point2,length,stiffness){
        var options = {
            bodyA: body1,
            pointB: point2,
            length: length,
            stiffness: stiffness
        }
        this.pointB = point2
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
        this.slingimage = loadImage("sprites/slingshot.png")
        this.sling3 = loadImage("sprites/sling3.png")
    }
    display(){
        push();
        imageMode(CENTER);

        if(this.sling.bodyA){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        if(pointA.x<220){
        strokeWeight(3);
        stroke(48,22,8)
        line(pointA.x-20,pointA.y,pointB.x-20,pointB.y+25)
        line(pointA.x-20,pointA.y,pointB.x+10,pointB.y+25)
        
        image(this.sling3,pointA.x-20,pointA.y,10,20)
    
            }
            else{
                strokeWeight(3);
                stroke(48,22,8)
                line(pointA.x+20,pointA.y+10,pointB.x-20,pointB.y+25)
                line(pointA.x+20,pointA.y+10,pointB.x+10,pointB.y+25)
                
                image(this.sling3,pointA.x+25,pointA.y+10,10,20)
            
            }
        }
        image(this.slingimage,190,190,80,180)
        pop();
}

 fly(){
this.sling.bodyA = null;
}
}