const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function preload() {
  getBackground();
}

function setup() {
  engine = Engine.create();
	world = engine.world;


  createCanvas(1000,400);
  
  ground1 = new Ground(500,height,1000,20);

  ground2 = new Ground(400,260,300,10);

  ground3 = new Ground(800,280,200,10)

  
  
  polygon1 = new Polygon(50,150,40,40);


  slingshot = new SlingShot(polygon1.body,{x:100,y:150})
 
//level1
  box1 = new Box(330,255,30,30,"blue");
  box2 = new Box(360,255,30,30,"blue");
  box3 = new Box(390,255,30,30,"blue");
  box4 = new Box(420,255,30,30,"blue");
  box5 = new Box(450,255,30,30,"blue");
  box10 = new Box(300,255,30,30,"blue");
  box12 = new Box(480,255,30,30,"blue");

  //level2
  box6 = new Box(360,195,30,30,"pink");
  box7 = new Box(390,195,30,30,"pink");
  box8 = new Box(420,195,30,30,"pink");
  box11 = new Box(330,195,30,30,"pink");
  box13 = new Box(450,195,30,30,"pink");

  //level3
  box9 = new Box(390,155,30,30,"green");
  box14 = new Box(360,155,30,30,"green")
  box15 = new Box(420,155,30,30,"green");
 
 //level4
 box16 = new Box(390,115,30,30,"grey");

 //level1.0
 box17 = new Box(730,275,30,30,"blue");
 box18 = new Box(760,275,30,30,"sea blue");
 box19 = new Box(790,275,30,30,"purple");
 box20 = new Box(820,275,30,30,"yellow");
 box21 = new Box(850,275,30,30,"red");

 //level2.0
 box22 = new Box(760,195,30,30,"grey");
 box23 = new Box(790,195,30,30,"green");
 box24 = new Box(820,195,30,30,"pink");

 //level3.0
 box25 = new Box(790,155,30,30,"orange")
}

function draw() {
  background("white");
  
  noStroke();
  textSize(35)
  fill("red")
  text("Score  " + score, 750, 40);

  Engine.update(engine);

  polygon1.display();
  ground1.display();
  ground2.display();
  ground3.display();
  slingshot.display();
  box1.display();
  box1.score();
  box2.display();
  box2.score();
  box3.display();
  box3.score();
  box4.display();
  box4.score();
  box5.display();
  box5.score();
  box6.display();
  box6.score();
  box7.display();
  box7.score();
  box8.display();
  box8.score();
  box9.display();
  box9.score();
  box10.display();
  box10.score();
  box11.display();
  box11.score();
  box12.display();
  box12.score();
  box13.display();
  box13.score();
  box14.display();
  box14.score();
  box15.display();
  box15.score();
  box16.display();
  box16.score();
  box18.display();
  box18.score();
  box19.display();
  box19.score();
  box20.display();
  box20.score();
  box21.display();
  box21.score();
  box17.display();
  box17.score();
  box22.display();
  box22.score();
  box23.display();
  box23.score();
  box24.display();
  box24.score();
  box25.display();
  box25.score();
  drawSprites();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x:mouseX , y:mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(polygon1.body);
  }
}
async function getBackground(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>6 && hour<18){
      background("yellow")
  }
  else{
  background("black");
  }
}