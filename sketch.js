const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var stand1, stand2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var blocks1,blocks2,blocks3,blocks4,blocks5,blocks6,blocks7,blocks8,blocks9;

var ball, slingshot, polygonimg
var gameState = "onSling";
function preload(){
polygonimg = loadImage("polygon.png");
}

function setup(){

 var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

ground = new Ground(450,height-10,900,20);
stand1 = new Stand(390,300,250,10);
stand2 = new Stand(700,200,250,10);



// first level
block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(480,275,30,40);
// second level
block8 = new Block(330,235,30,40);
block9 = new Block(360,235,30,40);
block10 = new Block(390,235,30,40);
block11 = new Block(420,235,30,40);
block12 = new Block(450,235,30,40);
// third level
block13 = new Block(360,195,30,40);
block14 = new Block(390,195,30,40);
block15 = new Block(420,195,30,40);
// top level
block16 = new Block(390,155,30,40);

// first level small
blocks1 = new Block(640,175,30,40);
blocks2 = new Block(670,175,30,40);
blocks3 = new Block(700,175,30,40);
blocks4 = new Block(730,175,30,40);
blocks5 = new Block(760,175,30,40);
//second level small
blocks6 = new Block(670,135,30,40);
blocks7 = new Block(700,135,30,40);
blocks8 = new Block(730,135,30,40);
//third level small
blocks9 = new Block(700,95,30,40);


ball = Bodies.circle(50,200,20);
World.add(world, ball);
slingshot = new SlingShot(ball,{x:100, y:200});


}





function draw(){
    background("black");
    Engine.update(engine);

    ground.display();
    stand1.display();
    stand2.display();

    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();

    fill("grey");
    block16.display();

    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();

    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();

    fill("pink")
    blocks9.display(); 
    imageMode(CENTER);
    image(polygonimg, ball.position.x, ball.position.y,40,40);
    slingshot.display();
}

function mouseDragged(){
    if (gameState === "onSling"){
        Matter.Body.setPosition(ball,{x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    console.log("Released")
    if (gameState === "onSling"){
        slingshot.fly();
        gameState = "launched";
    }
}

function keyPressed(){
    if(keyCode === 32 && gameState==="launched"){
        console.log("SpaceBar")
        slingshot.attach(this.ball);
        gameState="onSling";
    }
  }