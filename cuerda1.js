class Cuerda{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.cuerda=Constraint.create(options)
        World.add(world,this.cuerda);
    }
    display(){
        var pos=this.cuerda.bodyA.position;
        var pos1=this.cuerda.bodyB.position;
        strokeWeight(5);
        line(pos.x,pos.y,pos1.x+this.offsetX,pos1.y+this.offsetY);
    }
}