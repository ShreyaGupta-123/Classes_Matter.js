const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var world,engine,bodies;
var box1, box2,ground;


function setup(){
var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;
box1=new Box(200,200,50,50);
box2=new Box(500,100,50,60);
ground=new Ground(600,380,1200,30,{isStatic:true});
}

function draw() {
  background(0,0,0); 
  Engine.update(engine) ;
  box1.display();
 box2.display();
 ground.display();
}