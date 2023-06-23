var quadrado;
var mouSe;
var level;
var levelCount = 1;
var counter = 0;
var bgColor = "black";

function preload(){
    quadrado = new Square(300,300,50,50);
    level = new Level1(level);
}
function setup(){
    createCanvas(600,600);
}
function draw(){
    level.draw();
}