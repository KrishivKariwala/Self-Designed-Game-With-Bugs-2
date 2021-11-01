var mouse;
var cat, cat2, cat3;
var cheese1, cheese2, cheese3, cheeseIMG;
var wall1, wall2, wall3, wall4, wall5, wall5, wall6, wall7, wall8, wall9,
 wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var wallGroup;
var mouseIMG1, mouseAnimation1, catAnimation1, catIMG2;
var catAnimation1right;
var startIMG, start, level2, level2IMG;
var score = 0;
var gameState = "level0";

function preload(){
  mouseIMG1 = loadImage("mouse4.png");
  mouseAnimation1 = loadAnimation("mouse2.png", "mouse3.png");

  catAnimation1 = loadAnimation("cat2.png", "cat3.png");
  catAnimation1right = loadAnimation("cat2right.png", "cat3right.png");
  catIMG2 = loadImage("cat4.png");

  cheeseIMG = loadImage("cheese.png");

  startIMG = loadImage("startButton.png")
}

function setup() {
  createCanvas(1000,500);

  wallGroup = createGroup();

  wall1 = new Wall(500,25, 1000, 50);
  wall2 = new Wall(25, 300, 50, 400);
  wall3 = new Wall(175, 225, 250, 50);
  wall4 = new Wall(125, 100, 50, 100);
  wall5 = new Wall(200, 125, 100, 50);
  wall6 = new Wall(425, 125, 250, 50);
  wall7 = new Wall(725, 125, 250, 50);
  wall8 = new Wall(950, 125, 100, 50);
  wall9 = new Wall(325, 300, 50, 300);
  wall10 = new Wall(525, 175, 50, 50);
  wall11 = new Wall(150, 325, 100, 50);
  wall12 = new Wall(125, 425, 50, 150);
  wall13 = new Wall(225, 425, 50, 150);
  wall14 = new Wall(575, 225, 350, 50);
  wall15 = new Wall(725, 300, 50, 100);
  wall16 = new Wall(525, 375, 50, 150);
  wall17 = new Wall(600, 325, 100, 50);
  wall18 = new Wall(625, 400, 50, 100);
  wall19 = new Wall(425, 375, 50, 250);
  wall20 = new Wall(725, 425, 150, 50);
  wall21 = new Wall(825, 325, 50, 350);
  wall22 = new Wall(925, 350, 50, 300);
  wall23 = new Wall(625, 100, 50, 100);
  wall24 = new Wall(725, 375, 50, 50)

  mouse = createSprite(25, 75, 30, 30);
  mouse.addImage(mouseIMG1);
  mouse.scale = 0.04;
  mouse.debug = false;
  mouse.setCollider('rectangle', 0, 0, 30, 30);

  cat = createSprite(675,75,20,20);
  cat.addAnimation("catProtectingCheeseRight", catAnimation1right);
  cat.addAnimation("catProtectingCheese", catAnimation1);
  cat.scale = 0.04;
  cat.velocityX = 3;

  cat2 = createSprite(75, 275, 20, 20);
  cat2.addAnimation("catProtectingCheeseRight", catAnimation1right);
  cat2.addAnimation("catProtectingCheese", catAnimation1);
  cat2.scale = 0.04;
  cat2.velocityX = 3;

  cat3 = createSprite(475, 475, 20, 20);
  cat3.addAnimation("catProtectingCheeseRight", catAnimation1right);
  cat3.addAnimation("catProtectingCheese", catAnimation1);
  cat3.scale = 0.04;
  cat3.velocityX = 3;

  cheese1 = createSprite(975, 475, 30, 30);
  cheese1.addImage(cheeseIMG);
  cheese1.scale = 0.06;

  cheese2 = createSprite(475, 175, 30, 30);
  cheese2.addImage(cheeseIMG);
  cheese2.scale = 0.06;

  cheese3 = createSprite(775, 475, 30, 30);
  cheese3.addImage(cheeseIMG);
  cheese3.scale = 0.06;

  start = createSprite(500, 400, 50, 50);
  start.addImage(startIMG);
  start.scale = 0.3;

}

function draw() {
  // background("black");

  if(gameState === "level0"){
    background("lightgreen");
    cat.visible = false;
    cat2.visible = false;
    cat3.visible = false;

     cheese2.visible = false;
     cheese3.visible = false;

    wallGroup.setVisibleEach(false);

    mouse.scale = 0.4;
    mouse.x = 160;
    mouse.y = 250;

    cheese1.scale = 0.4;
    cheese1.x = 800;
    cheese1.y = 250;

    textSize(20);
    fill("white")
    text("Hello! Welcome to my game!\n Help hungry Jerry to get to his cheese.\n BEWARE OF CATS!\n Instuctions:\n * Get the cheese in order\n * Secret teleports in the game\n *Unlock level 2 and\n help Jerry to marry Ms. Brownie.", 300, 120);

    if(mousePressedOver(start)) {
      gameState = "level1";
    }
  }

  if(gameState === "level1"){

  background("black");
  wallGroup.setVisibleEach(true);

  mouse.x = 25;
  mouse.y = 75;
  mouse.scale = 0.04;

  start.destroy()
  cheese1.x = 975;
  cheese1.x = 475;
  cheese1.scale = 0.06
  }

  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  wall13.display();
  wall14.display();
  wall15.display();
  wall16.display();
  wall17.display();
  wall18.display();
  wall19.display();
  wall20.display();
  wall21.display();
  wall22.display();
  wall23.display();
  wall24.display();

  if(keyIsDown(RIGHT_ARROW)){
    mouse.x = mouse.x + 4;
    if(wallGroup.isTouching(mouse)){
      mouse.x = mouse.x - 8;
    }
  }

  if(keyIsDown(LEFT_ARROW)){
    mouse.x = mouse.x - 4;
    if(wallGroup.isTouching(mouse)){
      mouse.x = mouse.x + 8;
    }
  }

  if(keyIsDown(UP_ARROW)){
    mouse.y = mouse.y - 4;
    if(wallGroup.isTouching(mouse)){
      mouse.y = mouse.y + 8;
    }
  }

  if(keyIsDown(DOWN_ARROW)){
    mouse.y = mouse.y + 4;
    if(wallGroup.isTouching(mouse)){
      mouse.y = mouse.y - 8;
    }
  }

  if(mouse.x < 0 && mouse.y < 100){
    mouse.x = 980;
    mouse.y = 80;
  }

  if(cat.x > 975){
    cat.velocityX = -3
    cat.changeAnimation("catProtectingCheese", catAnimation1);
  }

  if(cat.x < 675){
    cat.velocityX = +3
    cat.changeAnimation("catProtectingCheeseRight", catAnimation1right);
  }

  if(cat2.x > 275){
    cat2.velocityX = -3
    cat2.changeAnimation("catProtectingCheese", catAnimation1);
  }

  if(cat2.x < 75){
    cat2.velocityX = +3
    cat2.changeAnimation("catProtectingCheeseRight", catAnimation1right);
  }

  if(cat3.x > 725){
    cat3.velocityX = -3
    cat3.changeAnimation("catProtectingCheese", catAnimation1);
  }

  if(cat3.x < 475){
    cat3.velocityX = +3
    cat3.changeAnimation("catProtectingCheeseRight", catAnimation1right);
  }

  if(mouse.isTouching(cheese1)){
    mouse.x = 75;
    mouse.y = 475;
    cheese1.destroy();
  }

  if(mouse.isTouching(cheese2)){
    mouse.x = 675;
    mouse.y = 375;
    cheese2.destroy();
  }

  if(mouse.isTouching(cheese3)){
    cheese3.destroy();
    wallGroup.destroyEach();
    cat1.destroy();
    cat2.destroy();
    cat3.destroy();
    background("white")
    textSize(40);
    stroke("black");
    text("Congratulations! You won!", 500, 250);
  }

  drawSprites();

  textSize(30);
  stroke("white")
  text("score: " + score, 500, 30);
}