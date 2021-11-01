class Wall{
constructor(x,y,w,h){
    this.x = x,
    this.y = y,
    this.width = w,
    this.height = h
    this.wall = createSprite(x,y,w,h)
    // var wallGroup = new Group();
    wallGroup.add(this.wall);
}

display(){
    this.wall.shapeColor = rgb(252, 44, 3);
}

}