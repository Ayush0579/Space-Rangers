class Borders {
    constructor(){
        this.left = Bodies.rectangle(-10, 750, 20, 2000, {isStatic: true});
        this.right = Bodies.rectangle(4010, 750, 20, 2000, {isStatic: true});
        World.add(world, [this.left,this.right]);
    }
}