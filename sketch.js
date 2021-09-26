const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var sunrise,sunset;
var bg ;

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);
    

    Engine.update(engine);

    // write code to display time in correct format here

    async function getBackgroundImg(){ 
        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
         var responseJSON = await response.json();
          var datetime = responseJSON.datetime;
           var hour = datetime.slice(11,13);
            if(hour<=06 && hour>=19){ 
                bg = "sunrise1.png";
             } else{
                  bg = "sunrise2.jpg";
                 }
                
                 async function getBackgroundImg(){ 
                    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
                     var responseJSON = await response.json();
                      var datetime = responseJSON.datetime;
                       var hour = datetime.slice(11,13);
                        if(hour<=06 && hour>=19){ 
                 bg = "sunrise3.png";
                } else{
                     bg = "sunrise4.jpg";
                    }
                    async function getBackgroundImg(){ 
                        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
                         var responseJSON = await response.json();
                          var datetime = responseJSON.datetime;
                           var hour = datetime.slice(11,13);
                            if(hour<=06 && hour>=19){ 
                    bg = "sunrise5.png";
                } else{
                     bg = "sunrise6.jpg";
                    }
                    async function getBackgroundImg(){ 
                        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
                         var responseJSON = await response.json();
                          var datetime = responseJSON.datetime;
                           var hour = datetime.slice(11,13);
                            if(hour<=06 && hour>=19){ 
                    bg = "sunset7.png";
                } else{
                     bg = "sunset8.jpg";
                    }
                    async function getBackgroundImg(){ 
                        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
                         var responseJSON = await response.json();
                          var datetime = responseJSON.datetime;
                           var hour = datetime.slice(11,13);
                            if(hour<=06 && hour>=19){ 
                    bg = "sunset9.png";
                } else{
                     bg = "sunset10.jpg";
                    }
                    async function getBackgroundImg(){ 
                        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
                         var responseJSON = await response.json();
                          var datetime = responseJSON.datetime;
                           var hour = datetime.slice(11,13);
                            if(hour<=06 && hour>=19){ 
                    bg = "sunset11.png";
                } else{
                     bg = "sunset12.jpg";
                    }
                