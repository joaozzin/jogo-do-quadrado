let cores = ["red", "blue", "green", "yellow", "orange", "purple", "gray", "black", "cyan", "brown", "lime", "aquamarine", "white"];
let corDaBorda = "black";
let cubo;
let semprePreto = false;
let bordas = createGroup()

function setup() {
    createCanvas(400, 400);
  
    // Define a cor de fundo inicial
    background("gray"); 
}

function draw() {

    // Desenhar a borda preta
    fill(corDaBorda);
    noStroke();

    var sprite;
    // Retângulo superior
    sprite = createSprite(0, 0, width, 10);
    bordas.add(sprite);

    // Retângulo inferior
    sprite = createSprite(0, height - 10, width, 10);
    bordas.add(sprite);

    // Retângulo esquerdo
    sprite = createSprite(0, 0, 10, height);
    bordas.add(sprite);

    // Retângulo direito
    sprite = createSprite(width - 10, 0, 10, height);
    bordas.add(sprite);

    //desnha os sprites
    drawSprites();
    // Resto do código aqui    
}

function mouseClicked() {
    // Escolhe uma cor aleatória da lista
    let corAleatoria = random(cores); 
    if(corAleatoria == "black"){
        corDaBorda = "lightGray";
        cubo = createSprite(200,200,50,50);
        cubo.shapeColor = "lightGray";
        semprePreto = true;
    }
    else if(!semprePreto){
        corDaBorda = "black"
    }
    
    // Muda a cor de fundo para a cor aleatória escolhida
    if(!semprePreto){    
        background(corAleatoria); 
    }
    else{
        background(0);
    }
}