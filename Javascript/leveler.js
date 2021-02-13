class Leveler {
    constructor(){
        this.body = Bodies.circle(2000, -28500, 50, {isStatic: true});
        World.add(world, this.body);
    }

    start(){
        World.remove(world, this.body);
        this.body = Bodies.circle(2000, -30500, 50, {isStatic: false});
        World.add(world, this.body);
    }

    startFor2(){
        World.remove(world, this.body);
        this.body = Bodies.circle(2000, -38500, 50, {isStatic: false});
        World.add(world, this.body);
    }

    restart(){
        this.body = Bodies.circle(2000, -38500, 50, {isStatic: true});
        World.add(world, this.body);
    }

    startFor3(){
        World.remove(world, this.body);
        this.body = Bodies.circle(2000, -38500, 50, {isStatic: false});
        World.add(world, this.body);
    }

    destroy(){
        World.remove(world, this.body);
    }
}