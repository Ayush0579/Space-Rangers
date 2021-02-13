class Player {
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.body = Bodies.circle(2000, 1200, 100, {isStatic: true});
        World.add(world, this.body);
        this.image = loadImage("Assets/still.png");
        this.image2 = loadImage("Assets/flying.png");
    }

    destroy(){
        World.remove(world, this.body);
    }

    start(){
        World.remove(world, this.body);
        this.body = Bodies.circle(2000, 1200, 100);
        World.add(world, this.body);
    }

    stop(){
        World.remove(world, this.body);
        this.body = Bodies.circle(2000, 1200, 100, {isStatic: true});
        World.add(world, this.body);
    }

    left(){
        Matter.Body.applyForce(this.body, this.body.position, {x: -0.05, y: 0});
    }

    right(){
        Matter.Body.applyForce(this.body, this.body.position, {x: 0.05, y: 0});
    }

    jump(){
        Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: -0.05});
    }

    displayNone(){}

    displayStill(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, 200, 200);
    }

    displayFly(){
        imageMode(CENTER);
        image(this.image2, this.body.position.x, this.body.position.y, 200, 200);
    }
}