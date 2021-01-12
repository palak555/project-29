
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,grond2,ground3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var polygon;
var chain;


function setup(){
    createCanvas(1700,680);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(400,680,2600,40);
    ground2 = new Ground(780,550,370,13);
    ground3 = new Ground(1395,380,280,13);

   box1= new BlueBox(1320,350);
   box2= new BlueBox(1360,350);
   box3= new BlueBox(1400,350);
   box4= new BlueBox(1440,350);
   box5= new BlueBox(1480,350);
   box6= new GreenBox(1360,300);
   box7= new GreenBox(1400,300);
   box8= new GreenBox(1440,300);
   box9= new WhiteBox(1400,250);

   box10= new GreenBox(660,520);
   box11= new GreenBox(700,520);
   box12= new GreenBox(740,520);
   box13= new GreenBox(780,520);
   box14= new GreenBox(820,520);
   box15= new GreenBox(860,520);
   box16= new GreenBox(900,520);
   box17= new PinkBox(700,470);
   box18= new PinkBox(740,470);
   box19= new PinkBox(780,470);
   box20= new PinkBox(820,470);
   box21= new PinkBox(860,470);
   box22= new WhiteBox(740,420);
   box23= new WhiteBox(780,420);
   box24= new WhiteBox(820,420);
   box25= new BlueBox(780,370);
   

   polygon = new Polygon(190,480);


   chain =new SlingShot(polygon.polygon,{x:170,y:480})
     
    
    
    
    

    






    Engine.run(engine)

}


function draw(){
    rectMode(CENTER);
    background(25,3,10);

    ground1.display();
    ground2.display();
    ground3.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();






    polygon.display();

   
    














    drawSprites();
}


function mouseDragged(){
	Matter.Body.setPosition(polygon.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	chain.fly();
}