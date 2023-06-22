var quadrado;
var mouSe;
var level = 1;
var counter = 0;
var bgColor = "black";

function preload(){
    quadrado = new Square(300,300,50,50);
    mouSe = createSprite(300,300,50,50);
    mouSe.shapeColor = ""
}
function setup(){
    createCanvas(600,600);
}
function draw(){
    background(bgColor);
    drawSprites();
    if(quadrado.collides(World.mouseX,World.mouseY)){
        console.log("Quadrado");
    }
}