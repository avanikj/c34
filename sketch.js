const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bl1,bl2,bl3,bl4,bl5,bl6,bl7,bl8,bl9,bl10,
    bl11,bl12,bl13,bl14,bl15,bl16,bl17,bl18,bl19,bl20;
var engine,world;
var ground,rope;


function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
	world = engine.world;

//1 player
bl1 = new Box(900,100,70,70)
bl2 = new Box(900,100,70,70)
bl3 = new Box(900,100,70,70)
bl4 = new Box(900,100,70,70)
bl5 = new Box(900,100,70,70)
bl6 = new Box(900,100,70,70)
bl7 = new Box(800,100,70,70)

bl8 = new Box(800,100,70,70)
bl9 = new Box(800,100,70,70)
bl10 = new Box(800,100,70,70)
bl11 = new Box(800,100,70,70)
bl12 = new Box(800,100,70,70)
bl13 = new Box(700,100,70,70)
bl14 = new Box(700,100,70,70)
bl15 = new Box(700,100,70,70)
bl16 = new Box(700,100,70,70)

bl17 = new Box(700,100,70,70)
bl18 = new Box(700,100,70,70)
bl19 = new Box(700,100,70,70)
bl20 = new Box(700,100,70,70)
base = new Ground(600,600,1200,20)


ball = new Ball(200,200,80,80)

rope = new Rope(ball.body,{x:500,y:50})
}

function draw() {
background("purple"); 
Engine.update(engine);
base.display();
ball.display();
rope.display()

bl1.display();
bl2.display();
bl3.display();
bl5.display();
bl6.display();
bl7.display();


bl8.display();
bl9.display();
bl10.display();
bl11.display();
bl12.display();
bl13.display();


bl14.display();
bl15.display();
bl16.display();


bl17.display();


bl18.display();
bl19.display();
bl20.display();

  
}

function mouseDragged(){
Matter.Body.setPosition(ball,{x:mouseX , y:mouseY})
}

function mouseReleased(){
rope.fly();
}