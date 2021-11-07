class Bob{
    constructor(x,y,r){
        var options ={
            'isStatic':false,
            'restitution':1.3,
           'friction':6,
            'density':2
        }
        this.x=x;
		this.y=y;
		this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2 , options);
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;
        push();
        translate(paperpos.x, paperpos.y);
        //Mode(CENTER);
        fill("black");
        ellipse(0,0,this.r,this.r);
        pop();


    }

}