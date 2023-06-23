class Level1{
    constructor(itSelf){
        this.itSelf = itSelf; 
    }
    draw(bg){
        if(!bg){
            background("")
        }
        else{
            background(bg)
        }
    }
    takeOff(){
        level = new Square();
    }
}