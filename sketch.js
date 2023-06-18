var bola;
var mouse;
var level = 1;
var counter = 0;
var defaultBallSize = 100;

function preload(){
    bola = createSprite(300,300,100);
    bola.shapeColor = "red";
    mouse = createSprite(-1,-1,1,1);
    mouse.visible = false;
}
function setup(){
    createCanvas(600,600);
}
function draw(){
    if(level == 1){

        background('black');
        mouse.x = World.mouseX;
        mouse.y = World.mouseY;

        if(mouseOver(bola)){
            bola.width = defaultBallSize + 100;
            bola.height = defaultBallSize + 100;
        }
        else{
            bola.width = defaultBallSize;
            bola.height = defaultBallSize;
        }

        if(counter  == 200){
            bola.shapeColor = "#4AFF86";
            level++;
            counter = 100;
            defaultBallSize = 100;
            bola.width = defaultBallSize;
            bola.height = defaultBallSize;
        }
        
        push();
        
        fill("white");
        textSize(50);
        text(""+counter,50,50);
    
        pop();
    
        drawSprites();
    }
    if(level == 2){

        background('#5E88FF');
        mouse.x = World.mouseX;
        mouse.y = World.mouseY;

        if(mouseOver(bola)){
            bola.width = defaultBallSize + 100;
            bola.height = defaultBallSize + 100;
        }
        else{
            bola.width = defaultBallSize;
            bola.height = defaultBallSize;
        }
        
        if(Math.round(counter)  == 0){
            counter = 0;
            defaultBallSize = 100;
            bola.width = defaultBallSize;
            bola.height = defaultBallSize;
            bola.shapeColor = "#A6E9F4";
            level++;
        }
        else{
            counter -= 0.1;
            if(defaultBallSize > 0){
                defaultBallSize -= 0.1;
            }
            else{
                defaultBallSize += 200;
            }
        }
        push();
    
        fill("white");
        textSize(50);
        text(""+Math.round(counter),50,100);
        text("level " + level,50,50)
    
        pop();
    
        drawSprites();
    }
    if(level == 3){
        showText = false;
        background('#975AF4');
        mouse.x = World.mouseX;
        mouse.y = World.mouseY;

        if(mouseOver(bola)){
            showText = true;
        }

        if(counter == 1000){
            level++;
            counter = 0;
            defaultBallSize = 100;
            bola.width = defaultBallSize;
            bola.height = defaultBallSize;
            bola.shapeColor = "";
        }
        push();
    
        fill("white");
        textSize(50);
        text(""+counter,50,100);
        text("level " + level,50,50);
    
        pop();
    
        drawSprites();
    }
}
function mouseOver(sprite){
    if(mouse.isTouching(sprite)){
        return true;
    } 
}
function mouseClicked(){
    if(mouseOver(bola)){
        if(level == 1){
            counter += 5;
            defaultBallSize += 10.2;
        }
        if(level == 2){
            counter+=10;
            defaultBallSize += 10;
        }
    }
}