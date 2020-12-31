var myEngine, myWorld, ground , ball ;

function setup() {
  createCanvas(800,400);

 myEngine =  Matter.Engine.create() ;

 myWorld  = myEngine.world;

 ground  = Matter.Bodies.rectangle(400,380,800,20, {isStatic:true});
 Matter.World.add(myWorld,ground );

 ball  = Matter.Bodies.circle(200,50, 20, {restitution: 0.3});
 Matter.World.add(myWorld,ball );
 console.log(ground);

  
}

function draw() {
  background(0);  
  Matter.Engine.update(myEngine)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  circle(ball.position.x, ball.position.y,40 );



}