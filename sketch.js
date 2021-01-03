var canvas;
var music;
var surface1, surface2, surface3, surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
   
    //create 4 different surfaces
   surface1 = createSprite(100,580,150,35);
   surface1.shapeColor = "red";
   surface2 = createSprite(275,580,150,35);
   surface2.shapeColor = "yellow";
   surface3 = createSprite(450,580,150,35);
   surface3.shapeColor = "green";
   surface4 = createSprite(625,580,150,35)
   surface4.shapeColor = "blue";

    //create box sprite and give velocity
   box = createSprite(random(20,750),100,40,40);
   box.shapeColor = rgb(255,255,255);
   box.velocityY = 8;
   box.velocityX = 7;
  
}

function draw() {
    background(rgb(169,169,169));
   edges =  createEdgeSprites();

    box.bounceOff(edges);
  

    if(surface1.isTouching(box) && box.bounceOff(surface1)){ 
        box.shapeColor = "red";
    }
    if(surface2.isTouching(box) && box.bounceOff(surface2)){ 
        box.velocityX=0;
        box.velocityY=0;
        box.shapeColor = "yellow";
        music.stop();
    }
    if(surface3.isTouching(box) && box.bounceOff(surface3)){ 
        box.shapeColor = "green";
    }
    if(surface4.isTouching(box) && box.bounceOff(surface4)){ 
        box.shapeColor = "blue";
        music.play();
    }
    

    drawSprites();

    //add condition to check if box touching surface and make it box
}
