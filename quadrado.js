class Square{
    constructor(x,y,w,h,color){
        this.sprite = createSprite(x,y,w,h);
        if(!color){
            this.sprite.shapeColor = "";
        }
        else{
            this.sprite.shapeColor = color;
        }
    }
    collide(otherX,otherY,otherSprite){
        if(!otherSprite){
            otherSprite = createSprite(otherX,otherY,1,1);
            otherSprite.visible = false;
        }
        if(otherSprite.isTouching(this.sprite)){
            return true;
        }
        else{
            return false;
        }
    }
    collideMouse(){
        var otherSprite = createSprite(World.mouseX,World.mouseY,1,1);
        otherSprite.visible = false;
        if(otherSprite.isTouching(this.sprite)){
            return true;
        }
        else{
            return false;
        }
    }
}