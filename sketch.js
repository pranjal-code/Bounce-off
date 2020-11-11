function setup() {
  createCanvas(800,400);
  
  fixedRect=createSprite(400, 100, 50, 80);
  fixedRect.shapeColor="yellow";

  movingRect=createSprite(400, 800,80,30);
  movingRect.shapeColor="yellow";
}

function draw() {
  background(255,255,255);  

  movingRect.velocityX=-5;
  //movingRect.velocityY=5;
  
  fixedRect.velocityX=+5
  
  

  
  //if(istouching(movingRect,fixedRect))
 // {
   // fixedRect.shapeColor="black";
  //}
 //else
 // {
 // fixedRect.shapeColor="blue";
//  }

  bounceOff(movingRect,fixedRect);

 
  drawSprites();
}

function istouching(object1,object2)
{
  if(object1.x-object2.x < object1.width/2 + object2.width/2
    &&
    object2.x-object1.x < object1.width/2 + object2.width/2
    &&
    object1.y-object2.y < object1.height/2 + object2.height/2
    &&
    object2.y-object1.y < object1.height/2 + object2.height/2
  )

  {
    return true;
  }
  
  else
  {
    return false;
  }
}


function bounceOff(rect1,rect2)
{
  if (rect1.x - rect2.x < rect2.width/2 + rect1.width/2
    && rect2.x - rect1.x < rect2.width/2 + rect1.width/2) {
      rect1.velocityX = rect1.velocityX * (-1);
      rect2.velocityX = rect2.velocityX * (-1);
}
if (rect1.y - rect2.y < rect2.height/2 + rect1.height/2
  && rect2.y - rect1.y < rect2.height/2 + rect1.height/2){
    rect1.velocityY = rect1.velocityY * (-1);
    rect2.velocityY = rect2.velocityY * (-1);
}
}






