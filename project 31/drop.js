class Rain{
    constructor(x,y,r){
       var options ={
            //'restitution':1,
            'friction':0.8,
            'density':1,
            'isStatic':false
        }

        this.x = x;
        this.y = y;
        this.r = 5;
        this.body = Bodies.circle(this.x,this.y,(this.r)/2,options);
        World.add(world,this.body);
    }
    display(){
        var droppos = this.body.position;
        push()
        translate(this.body.position.x,this.body.position.y)
        ellipseMode(CENTER)
     fill("blue");
     ellipse(droppos.x, droppos.y, this.r, this.r);
     pop()
}
updateY(){     
    if(this.body.position.y > 700){

        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
}
}