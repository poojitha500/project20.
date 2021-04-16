var garden, cat, mause, catImg, mouseImg, cat2, mouse2, cat3, mouse3 ;
function preload() {
    //load the images here
    garden = loadImage("images/garden.png");
    catImg = loadImage("images/cat1.png");
    mouseImg = loadImage("images/mouse1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    cat3 = loadImage("images/cat4.png");
    mouse3 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600,10,10);
    cat.addImage(catImg);
    cat.scale=0.1;
    mouse = createSprite(150,600,10,10);
    mouse.addImage(mouseImg);
    mouse.scale=0.1;
}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addImage("catlastImg",cat3);
        cat.changeImage("catlastImg");
        mouse.addImage("mouselastImg",mouse3);
        mouse.changeImage("mouselastImg");
        cat.velocityX=0;
        cat.x = 200;

    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     cat.velocityX = -2;
     cat.addAnimation("catRunning",cat2);
     cat.changeAnimation("catRunning");
     mouse.addAnimation("mouse",mouse2);
     mouse.changeAnimation("mouse");
 }
 

}
