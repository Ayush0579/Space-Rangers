class Level2 {
    constructor(){
        this.image = loadImage("Assets/asteroid.png");
        this.body1 = Bodies.circle(2203, -500, 100, {isStatic: true});
        this.body2 = Bodies.circle(1043, -2500, 100, {isStatic: true});
        this.body3 = Bodies.circle(928, -4500, 100, {isStatic: true});
        this.body4 = Bodies.circle(3173, -6500, 100, {isStatic: true});
        this.body5 = Bodies.circle(343, -8500, 100, {isStatic: true});
        this.body6 = Bodies.circle(2568, -10500, 100, {isStatic: true});
        this.body7 = Bodies.circle(3656, -12500, 100, {isStatic: true});
        this.body8 = Bodies.circle(2792, -14500, 100, {isStatic: true});
        this.body9 = Bodies.circle(1546, -16500, 100, {isStatic: true});
        this.body10 = Bodies.circle(2571, -18500, 100, {isStatic: true});
        this.body11 = Bodies.circle(2584, -20500, 100, {isStatic: true});
        this.body12 = Bodies.circle(1001, -22500, 100, {isStatic: true});
        this.body13 = Bodies.circle(2045, -24500, 100, {isStatic: true});
        this.body14 = Bodies.circle(699, -26500, 100, {isStatic: true});
        this.body15 = Bodies.circle(2768, -28500, 100, {isStatic: true});
        this.body16 = Bodies.circle(2374, -30500, 100, {isStatic: true});
        this.body17 = Bodies.circle(1503, -32500, 100, {isStatic: true});
        this.body18 = Bodies.circle(477, -34500, 100, {isStatic: true});
        this.body19 = Bodies.circle(3434, -36500, 100, {isStatic: true});
        this.body20 = Bodies.circle(3011, -38500, 100, {isStatic: true});
        World.add(world, [this.body1, this.body2, this.body3, this.body4, this.body5, this.body6, this.body7, this.body8, this.body9, this.body10, this.body11, this.body12, this.body13, this.body14, this.body15, this.body16, this.body17, this.body18, this.body19, this.body20]);
    }

    start(){
        world.gravity.y = 1.2;
        World.remove(world, [this.body1, this.body2, this.body3, this.body4, this.body5, this.body6, this.body7, this.body8, this.body9, this.body10, this.body11, this.body12, this.body13, this.body14, this.body15, this.body16, this.body17, this.body18, this.body19, this.body20]);
        this.body1 = Bodies.circle(2203, -500, 100, {isStatic: false});
        this.body2 = Bodies.circle(1043, -2500, 100, {isStatic: false});
        this.body3 = Bodies.circle(928, -4500, 100, {isStatic: false});
        this.body4 = Bodies.circle(3173, -6500, 100, {isStatic: false});
        this.body5 = Bodies.circle(343, -8500, 100, {isStatic: false});
        this.body6 = Bodies.circle(2568, -10500, 100, {isStatic: false});
        this.body7 = Bodies.circle(3656, -12500, 100, {isStatic: false});
        this.body8 = Bodies.circle(2792, -14500, 100, {isStatic: false});
        this.body9 = Bodies.circle(1546, -16500, 100, {isStatic: false});
        this.body10 = Bodies.circle(2571, -18500, 100, {isStatic: false});
        this.body11 = Bodies.circle(2584, -20500, 100, {isStatic: false});
        this.body12 = Bodies.circle(1001, -22500, 100, {isStatic: false});
        this.body13 = Bodies.circle(2045, -24500, 100, {isStatic: false});
        this.body14 = Bodies.circle(699, -26500, 100, {isStatic: false});
        this.body15 = Bodies.circle(2768, -28500, 100, {isStatic: false});
        this.body16 = Bodies.circle(2374, -30500, 100, {isStatic: false});
        this.body17 = Bodies.circle(1503, -32500, 100, {isStatic: false});
        this.body18 = Bodies.circle(477, -34500, 100, {isStatic: false});
        this.body19 = Bodies.circle(3434, -36500, 100, {isStatic: false});
        this.body20 = Bodies.circle(3011, -38500, 100, {isStatic: false});
        World.add(world, [this.body1, this.body2, this.body3, this.body4, this.body5, this.body6, this.body7, this.body8, this.body9, this.body10, this.body11, this.body12, this.body13, this.body14, this.body15, this.body16, this.body17, this.body18, this.body19, this.body20])
    }

    destroy(){
        World.remove(world, [this.body1, this.body2, this.body3, this.body4, this.body5, this.body6, this.body7, this.body8, this.body9, this.body10, this.body11, this.body12, this.body13, this.body14, this.body15, this.body16, this.body17, this.body18, this.body19, this.body20]);
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.image, this.body1.position.x, this.body1.position.y, 100, 100);
        image(this.image, this.body2.position.x, this.body2.position.y, 100, 100);
        image(this.image, this.body3.position.x, this.body3.position.y, 100, 100);
        image(this.image, this.body4.position.x, this.body4.position.y, 100, 100);
        image(this.image, this.body5.position.x, this.body5.position.y, 100, 100);
        image(this.image, this.body6.position.x, this.body6.position.y, 100, 100);
        image(this.image, this.body7.position.x, this.body7.position.y, 100, 100);
        image(this.image, this.body8.position.x, this.body8.position.y, 100, 100);
        image(this.image, this.body9.position.x, this.body9.position.y, 100, 100);
        image(this.image, this.body10.position.x, this.body10.position.y, 100, 100);
        image(this.image, this.body11.position.x, this.body11.position.y, 100, 100);
        image(this.image, this.body12.position.x, this.body12.position.y, 100, 100);
        image(this.image, this.body13.position.x, this.body13.position.y, 100, 100);
        image(this.image, this.body14.position.x, this.body14.position.y, 100, 100);
        image(this.image, this.body15.position.x, this.body15.position.y, 100, 100);
        image(this.image, this.body16.position.x, this.body16.position.y, 100, 100);
        image(this.image, this.body17.position.x, this.body17.position.y, 100, 100);
        image(this.image, this.body18.position.x, this.body18.position.y, 100, 100);
        image(this.image, this.body19.position.x, this.body19.position.y, 100, 100);
        image(this.image, this.body20.position.x, this.body20.position.y, 100, 100);
        pop();
    }

    displayNone(){}
}