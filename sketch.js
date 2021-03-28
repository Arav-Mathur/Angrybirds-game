//namespacing in programming

//Engine-used to create the physics engine
const Engine = Matter.Engine 
//used to add physical objects to world
const World = Matter.World 
//used to create the physical object which inhabit the world
const Bodies = Matter.Bodies

const Constraint= Matter.Constraint;

const Body = Matter.Body

var engine,world,ground,bird;
var box1,box2,box3,box4,box5;
var piggy1,piggy2,log1,log2,log3,log4;
var bg,bgimage, platform

var constrainedLog;
var sling;

function preload(){
  bgimage = loadImage("sprites/rground.png")
}

function setup() {
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world;

  var object_options={
    isStatic:true
  }
  box1=new Box(500,300,70,70);
  box2=new Box(700,300,70,70);
  box3=new Box(500,150,70,70);
  box4=new Box(700,150,70,70);
  box5=new Box(600,50,70,70);
  piggy1 = new Pig(600,350);
  piggy2 = new Pig(600,200);
  log1 = new Log(600,250,300,PI/2);
  log2 = new Log(600,70,300,PI/2);
  log3 = new Log(650,30,150,-PI/7.5);
  log4 = new Log(550,30,150,PI/7.5);

  bird=new Bird(100,100);

  //ground creation
  ground = new Ground(600,400,1100,30)
  platform = new Platform(150,300,180,80)


  sling= new Slingshot(bird.body,{x:200, y:100},10,0.02)
}

function draw() {
  background(bgimage);
  Engine.update(engine);
// structure creation
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  piggy1.display();
  piggy2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird.display();
//world creation
  platform.display();
  //ground.display();
  sling.display();
  }

  function mouseDragged() {
    Matter.Body.setPosition(bird.body,{x:mouseX, y:mouseY});
  }
  function mouseReleased(){
    sling.fly();
  }