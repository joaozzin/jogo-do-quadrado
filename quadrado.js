class Square{
    constructor(x,y,w,h){
        this.sprite = createSprite(x,y,w,h);
    }
    collides(otherX,otherY,otherSprite){
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
}