class Constraint{
    constructor(bodyA, bodyB){
        var constraintOptions = {
                stiffness : 0.5,
                bodyA : bodyA,
                bodyB : bodyB,
                legnth : 10
            }

        this.cons = Matter.Constraint.create(constraintOptions);
        World.add(world, this.cons);
        
    }

    showConstraints(){
        strokeWeight(5);

        line(this.cons.bodyA.position.x, this.cons.bodyA.position.y, this.cons.bodyB.position.x, this.cons.bodyB.position.y);
    }

    launched(){
        this.cons.bodyA = null;
    }
}