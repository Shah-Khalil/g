const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
const topButton = document.querySelector('.top');
const bottomButton = document.querySelector('.bottom');

// let rightBtn = 0


//create the unit 

const box = 32;

//load images

const ground = new Image();
ground.src = "../img/ground.png";
console.log(ground)
const foodImg = new Image();
foodImg.src = "../img/foodd.png";
const pixelSnake = new Image();
pixelSnake.src  = "../img/flytrap.png"
// create sanke 

//load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let left = new Audio();
let right = new Audio();
let down = new Audio();

dead.src = '../audio/dead.mp3'
eat.src = '../audio/eat.mp3'
up.src = '../audio/up.mp3'
right.src = '../audio/right.mp3'
left.src = '../audio/left.mp3'
down.src = '../audio/down.mp3'

let snake = []; 
snake[0] = {
    x : 9 * box,
    y : 10 * box
}
console.log(snake)

// creat food 

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box,
}
let pixel = []
pixel[0] = {
    x: 9 * box,
    y : 10 * box
}

// create the score var 

let score = 0;

// control the sanke 

let d;

document.addEventListener("keydown", direction);

let Button = 'TRUE';
leftButton.addEventListener('click', function(e){Button = "LEFT"; console.log(Button)})
rightButton.addEventListener('click', function(e){Button = "RIGHT"; console.log(Button)})
topButton.addEventListener('click', function(e){Button = "UP"; console.log(Button)})
bottomButton.addEventListener('click', function(e){Button = "DOWN"; console.log(Button)})

function direction(event){
    if(event.keyCode == 37  && d != "RIGHT"){
        left.play();
        d = "LEFT"
    }
    if(event.keyCode == 38  && d != "DOWN"){
        up.play();
        d = "UP"
    }
    if(event.keyCode == 39  && d != "LEFT"){
        right.play();
        d = "RIGHT"
    }
    if(event.keyCode == 40  && d != "UP"){
        down.play();
        d = "DOWN"
    }
    

    if( Button != "RIGHT"){
        left.play();
        Button = "LEFT"
    }
    if( Button != "DOWN"){
        up.play();
        Button = "UP"
    }
    if( Button != "LEFT"){
        right.play();
        Button = "RIGHT"
    }
    if(Button != "UP"){
        down.play();
        Button = "DOWN"
    }
    
}

// check collision function 




function collision(head, array){
    for (let i = 0; i <array.length ; i++ ){
        if(head.x == array[i].x && head.y == array[i].y){
            return true
        }
    }
    return false
}



// draw everything to canvas

function draw(){
    ctx.drawImage(ground,0,0);
    
    for( let i = 0; i < snake.length ; i++){
        ctx.fillStyle = (i == 0)? "rgb(167, 247, 88)" : "green";
       
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        ctx.strokeRect(snake[i].x,snake[i].y,box,box)
        console.log()
    }
    //  $(pixelSnake).css("transform", "rotate(90deg)")

    ctx.drawImage(pixelSnake,snake[0].x,snake[0].y)

    ctx.drawImage(foodImg, food.x, food.y);


    // old position

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;


    if( Button == "LEFT" ) snakeX -= box;
    if( Button == "UP" ) snakeY -= box;
    if( Button == "RIGHT" ) snakeX += box;
    if( Button == "DOWN" ) snakeY += box;


    if( d == "LEFT" ) snakeX -= box;
    if( d == "UP" ) snakeY -= box;
    if( d == "RIGHT" ) snakeX += box;
    if( d == "DOWN" ) snakeY += box;
    
    
    // if the snake eats the food 

    if (snakeX == food.x && snakeY == food.y ){
        score++;
        eat.play();
        food = {
            x : Math.floor(Math.random()*17+1) * box,
            y : Math.floor(Math.random()*15+3) * box,
        }
        // we dont remove the tail

    }else{
        //remove the tail 
        //remove the tail
        snake.pop();
    }

// add new head

let newHead = {
    x : snakeX,
    y : snakeY
}

    // game over

    if(snakeX < box || snakeX > 17 * box || snakeY < 3*box || snakeY > 17 * box || collision(newHead,snake)){
        clearInterval(game)
        dead.play();
    }

    
    

    snake.unshift(newHead)

    ctx.fillStyle = "white";
    ctx.font = "45px Change one ";
    ctx.fillText(score,2*box,1.6*box);
    
}

// call draw function every 100 ms

let game = setInterval(draw,200)
