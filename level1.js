var bgScene;
var gameState = "Play";
var boy, boyImage;
var score = 0;
function preload(){
  boyImage = loadAnimation("boys/boy1.png", "boys/boy2.png");
  stoneImage = loadImage("./assets/stone.png");
coinImage = loadImage("./assets/coin.png");
birdImage = loadAnimation("./bird/redBirdReal1.png","./bird/redBirdReal2.png","./bird/redBirdReal3.png","./bird/redBirdReal4.png","./bird/redBirdReal5.png","./bird/redBirdReal6.png","./bird/redBirdReal7.png","./bird/redBirdReal8.png");

  
scene0 = loadImage("./background/s2.jpg");
scene1 = loadImage("./background/s1.png");
scene2 = loadImage("./background/scene2.png");
coinSound = loadSound("./sound/coinSound.wav");
gameOverSound = loadSound("./sound/gameOver.mp3");
gameOverImage = loadImage("./assets/gameOverBlue.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  scene0.resize(width,height);
  scene1.resize(width,height);//270
  scene2.resize(width,height);//100
  backgroundScene0 = createSprite(width/2, height/2, width, height);
  backgroundScene0.shapeColor = "pink";
  backgroundScene0.addImage("level0", scene0);
  backgroundScene0.addImage("level1", scene1);
  backgroundScene0.addImage("level2", scene2);
 // backgroundScene0.velocityX = -5-(score*0.001);

  stoneGroup = createGroup();
  coinGroup = createGroup();
  birdGroup = createGroup();
  
  
  backgroundScene1 = createSprite(width+width/2, height/2, width, height);
  backgroundScene1.shapeColor = "lightblue";
  backgroundScene1.addImage("level0", scene0);
  backgroundScene1.addImage("level1", scene1);
  backgroundScene1.addImage("level2", scene2);
  
 // backgroundScene1.velocityX = -5-(score*0.001);

  boy = createSprite(60, height-((height/100)*(30)), 20,60);
  boy.addAnimation("Joe",boyImage);
  boy.scale = 1.3;
 boyColliderLine = createSprite(50,height-((height/100)*(10)),100,1);
 boyColliderLine.visible = false;

 gameOver = createSprite(width/2,height/2);
  gameOver.addImage("Game Over",gameOverImage);
  gameOverImage.resize(width,height);
  gameOver.scale  = 1;
  gameOver.visible = false;
}

  function draw(){
    background(0);

    if(gameState == "Play"){
      backgroundScene0.velocityX = -5-(score/1000);
      backgroundScene1.velocityX = -5-(score/1000);
      if(backgroundScene0.x<=-width/2)
    {
         backgroundScene0.x = backgroundScene1.x+width;
    }
    if(backgroundScene1.x<=-width/2)
    {
         backgroundScene1.x = backgroundScene0.x+width;
    }

    if(touches.length > 0 || keyDown("space") )
    {
            boy.velocityY = -15;
            touches = [];
    }
    boy.velocityY = boy.velocityY + 0.8;
    boy.collide(boyColliderLine);


    var r = Math.round(random(1,4));

   if(frameCount%100 == 0)
    {
    if(r==1)
    {
      createStone();
        
    }

    else if(r==2)
    {
      createBird();
      //createCoin();
    }
    else if(r==3){
      createCoin();
    }
    else{
      createCoin();
       // createCoin();
    }
  }

  boy.overlap(coinGroup,removeCoin);

  if(stoneGroup.isTouching(boy) || birdGroup.isTouching(boy)){
    gameOverSound.play();
  gameState = "End";
  }


    }
    else if(gameState == "End"){
        boy.destroy();
        birdGroup.destroyEach();
        stoneGroup.destroyEach();
        coinGroup.destroyEach();
        backgroundScene0.destroy();
        backgroundScene1.destroy();
        
        gameOver.visible=true;
    }

    drawSprites();
    textSize(25);
    fill(0);
    textFont("Georgia");
    text("Score : "+score,80,35);
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function createStone()
{

  var stone = createSprite(width+30,height-((height/100)*(13)), 10, 10);
  stone.addImage("stone",stoneImage);
  stone.scale=0.5;
  stone.velocityX = -5-(score/1000);
  stone.lifetime =(width+100)/5;
  stoneGroup.add(stone);

}

function createBird()
{
  var r1 = Math.round(random((height/100)*(20),(height/100)*(50)));
  var bird = createSprite(width+30,r1, 10, 10);
  bird.addAnimation("bird",birdImage);
  bird.scale=0.8;
  bird.velocityX = -5-(score/1000);
  bird.lifetime =(width+100)/5;
  birdGroup.add(bird);
}

function createCoin()
{
  var r2 = Math.round(random((height/100)*(20),(height/100)*(80)));
  var coin = createSprite(width+30,r2, 10, 10);
  coin.addAnimation("coin",coinImage);
  coin.scale=0.2;
  coin.velocityX = -5-(score/1000);
  coin.lifetime =(width+100)/5;
  coinGroup.add(coin);
}

function removeCoin(boy, coin){
  score+=1;
  console.log(coin.velocityX);
  coinSound.play();
  coin.remove();
  coin.destroy();
  }