class Chain{
    constructor(bodyA,bodyB){
        var A = {
            bodyA:bodyA, bodyB:bodyB,stiffness:0.04,length:10
        }
        this.chain = Constraint.create(A)
        World.add(world,this.chain);
    }
    display(){
        strokeWeight(4);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyA.position.y)
    }
    
}