document.addEventListener("keydown", function(e){
    if(e.key === "ArrowLeft" && gameState === "Game"){
        left = true;
    }else if(e.key === "ArrowRight" && gameState === "Game"){
        right = true;
    }else if(e.key === "ArrowUp" && gameState === "Game"){
        up = true;
    }else if(e.key === "d" && gameState === "Game"){
        right = true;
    }else if(e.key === "a" && gameState === "Game"){
        left = true;
    }else if(e.key === "w" && gameState === "Game"){
        up = true;
    }else if(e.key === "ArrowDown" && ok === true && gameState === "Game"){
        ok = false;
        player.start();

        if(level === 1){
            level1.start();
            end.start();
        }else if(level === 2){
            level2.start();
            end.startFor2();
        }else if(level === 3){
            level3.start();
            end.startFor3();
        }
    }else if(e.key === "s" && ok === true && gameState === "Game"){
        ok = false;
        player.start();

        if(level === 1){
            level1.start();
            end.start();
        }else if(level === 2){
            level2.start();
            end.startFor2();
        }else if(level === 3){
            level3.start();
            end.startFor3();
        }
    }
})

document.addEventListener("keyup", function(e){
    if(e.key === "ArrowLeft"){
        left = false;
    }else if(e.key === "ArrowRight"){
        right = false;
    }else if(e.key === "ArrowUp"){
        up = false;
    }else if(e.key === "d"){
        right = false;
    }else if(e.key === "a"){
        left = false;
    }else if(e.key === "w"){
        up = false;
    }else{
        left = false;
        right = false;
        up = false;
    }
})