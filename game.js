const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var left = false;
var right = false;
var up = false;
var ok = true;
var score = 0;
var state = "Start It";
var level = 1;
var gameState = "Story";

function preload(){
    starter = loadImage("Assets/StartingPage.png");
    instructor = loadImage("Assets/Instructions.png");
    over = loadImage("Assets/GameOver.png");
    won = loadImage("Assets/WinPage.png");
    lavaI = loadImage("Assets/LavaImage.png");
}

function setup(){
    createCanvas(4000, 2000);
    engine = Engine.create();
    world = engine.world;

    player = new Player();

    level1 = new Level1();
    level2 = new Level2();
    level3 = new Level3();

    end = new Leveler();

    lava = new Lava();
    barrier = new Borders();
}

function draw(){
    if(gameState === "Story"){
        draw1();
    }else if(gameState === "Instruct"){
        draw2();
    }else if(gameState === "Game"){
        draw3();
    }else if(gameState === "End"){
        draw4();
    }else if(gameState === "Win"){
        draw5();
        score = 0;
        level = 1;
    }else if(gameState === "StoryRestart"){
        draw6();
    }else if(gameState === "InstructRestart"){
        draw7();
    }
}

function draw1(){
    image(starter, 0, 0);
}

function draw2(){
    image(instructor, 0, 0);
}

function draw3(){
    background(0);
    Engine.update(engine);

    if(score === 0){
        state = "Start It";
    }else if(score > 0 && score < 500){
        state = "Good";
    }else if(score > 500 && score < 1500){
        state = "Great";
    }else if(score > 1500 && score < 3000){
        state = "Excellent";
    }else if(score > 3000 && score < 4000){
        state = "Insane";
    }else{
        state = "Miracle";
    }

    if(end.body.position.y > 2500){
        ok = true;
        player.stop();
        level += 1;
        if(level === 2){
            level1.destroy();
            level1.displayNone();
        }else if(level === 3){
            level2.destroy();
            level2.displayNone();
        }else if(level >= 4){
            level3.destroy();
            gameState = "Win";
        }
        end.destroy();
        end.restart();
    }

    if(player.body.position.y > 1749){
        gameState = "End";
        level1.destroy();
        level2.destroy();
        level3.destroy();
        player.destroy();
        player.stop();
        ok = true;
        score = 0;
        state = "Start It";
        level = 1;
    }else if(player.body.position.y < 1749 && ok === false){
        score ++;
    }

    image(lavaI, 2000, 1000);
    level1.display();
    level2.display();
    level3.display();
    lava.display();

    if(left === true && player.body.position.y < 1749){
        player.left();
        player.displayFly();
    }else if(right === true && player.body.position.y < 1749){
        player.right();
        player.displayFly();
    }else if(up === true && player.body.position.y < 1749){
        player.jump();
        player.displayFly();
    }else if(player.body.position.y < 1749){
        player.displayStill();
    }else{
        player.displayNone();
    }

    fill("white");
    textSize(50);
    text("Score: " + score, 0, 50);
    text("Level: " + state, 0, 100);

    if(ok === true){
        if(level === 1){
            fill("white");
            textSize(100);
            text("Welcome", 1800, 900);
            text("Level-1", 1850, 1500);
        }else if(level === 2){
            fill("white");
            textSize(100);
            text("Level-2", 1850, 900);
        }else if(level === 3){
            fill("white");
            textSize(100);
            text("Level-3", 1850, 900);
        }
    }
}

function draw4(){
    image(over, 2000, 1000);
}

function draw5(){
    image(won, 2000, 1000);
}

function draw6(){
    image(starter, 2000, 1000);
}

function draw7(){
    image(instructor, 2000, 1000);
}

function keyPressed(){
    if(keyCode === 32 && gameState === "Story"){
        gameState = "Instruct";
    }else if(keyCode === 13 && gameState === "Instruct"){
        gameState = "Game";
    }else if(keyCode === 8 && gameState === "End"){
        gameState = "Game";
    }else if(keyCode === 17 && gameState === "Win"){
        gameState = "StoryRestart";
    }else if(keyCode === 32 && gameState === "StoryRestart"){
        gameState = "InstructRestart";
    }else if(keyCode === 13 && gameState === "InstructRestart"){
        gameState = "Game";
    }
}