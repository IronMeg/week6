var  locateX;
var locateY;
var acTive;
var coLor = "Black"

var yourScore = 10;

function setup() {
 createCanvas(400,400); 
 
 boundary0 = 0;
 boundary1 = 100;
 
 locateX = int(random(25,375));
 locateY = int(random(25,375));

}

function draw() {
  background(255);
  for(var i=0;i<10;i++){
  fill(coLor);
  noStroke();
  ellipse(locateX,locateY,20);
  } 
  fill(0);
  var s = second();
  text("Current second: \n" + s, 5, 50);
  text("Lives remaining: " + yourScore, 5,80);
  
  // attack();
  
  if(locateX ==mouseX && locateY ==mouseY){
    yourScore = yourScore - 1;
    background ("Red");
    console.log("Attacked!");
  }
  
  if(acTive == true){
    fl0at();
  }if(acTive == false){
    attack();
  }
}

function mousePressed(){
  acTive = true;
  console.log("hit");
}

function mouseReleased(){
  acTive = false;
  console.log("release");
}

function attack(){
    if(locateX >mouseX){
      locateX = locateX -1;
    }else{
      locateX++;
    }
    
    if(locateY >mouseY){
      locateY = locateY -1;
    }else{
      locateY++;
    }
    
    coLor = "Red";
  
}

function fl0at(){
    if(locateX <mouseX){
      locateX = locateX -1;
    }else{
      locateX++;
    }
    
    if(locateY <mouseY){
      locateY = locateY -1;
    }else{
      locateY++;
    }
    
    coLor = "Green";
}


