var bgImg;
var cat, catImg1, catImg2;
var mouse, mouseImg1, mouseImg2;

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2","images/cat3")
    mouseImg2=loadAnimation("images/mouse2","images/mouse3");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse=createSprite(100,730);
    mouse.addAnimation("mouseImg1",mouseImg1);
    mouse.scale=0.1;

    cat=createSprite(900,700);
    cat.addAnimation("catImg1",catImg1);
    cat.scale=0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(keyDown(LEFT_ARROW)){
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.changeAnimation("mouseTeasing");
        mouse.frameDealy=25;
        cat.addAnimation("running",catImg2);
        cat.changeAnimation("running");
        cat.velocityX=-3;
        
    }
    if(cat.x-MouseEvent.x < (cat.width-mouse.width)/2){
        mouse.addAnimation("mouseImg1",mouseImg1);
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  /*if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.changeAnimation("mouseTeasing",mouseImg2);
    mouse.frameDealy=25;
    cat.velocityX=-3;
    
}*/

}
