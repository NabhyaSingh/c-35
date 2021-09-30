var ball;
var database,position;


function setup(){
    database = firebase.database();
    var location = database.ref('ball/position');
    location.on("value",readop,showerr);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x:ball.x+x,
        y:ball.y+y
    })
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readop(data){
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;

}

function showerr(){

    console.log("error");
}