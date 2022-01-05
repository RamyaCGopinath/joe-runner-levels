var bgScene;
var screen = "Starting";
var logo, level1, level2, level3;
var logoImage, level1Image, level2Image, level3Image;
var boy, boyImage;
function preload(){
  logoImage = loadImage("assets/logo.png");
  level1Image = loadImage("assets/level1.png");
  level2Image = loadImage("assets/level2.png");
  level3Image = loadImage("assets/level3.png");
  boyImage = loadAnimation("boys/boy1.png", "boys/boy2.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);

// windowWidth/100 = 1%
// windowWidth/100*(10) = 10%
  // logo = createSprite(windowWidth/100*(50), 30, 100, 100);
  // logo.addImage("logo", logoImage);
  // level1 = createSprite(windowWidth/100*(25), height/2, 100, 100);
  // level1.addImage("level1", level1Image);
  // level2 = createSprite(windowWidth/100*(50), height/2, 100, 100);
  // level2.addImage("level2", level2Image);
  // level3 = createSprite(windowWidth/100*(75), height/2, 100, 100);
  // level3.addImage("level3", level3Image);

  logo = createImg("assets/logo.png");
  logo.position(windowWidth/100*(30),30);
  logo.size(300,50);
  level1 = createImg("assets/level1.png");
  level1.position(windowWidth/100*(45), 100);
  level1.size(100,100);
  level2 = createImg("assets/level2.png");
  level2.position(windowWidth/100*(45), 250);
  level2.size(100,100);
  level3 = createImg("assets/level3.png");
  level3.position(windowWidth/100*(45), 400);
  level3.size(100,100);
}

  function draw(){
    background(255);

    if(screen == "Starting"){

      

    }
    else if(screen == "End"){
        
    }

    drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}