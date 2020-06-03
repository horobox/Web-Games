const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext("2d");

const scale = 20;
const rows = canvas.height/scale;
const columns = canvas.width/scale;

var snake;
var fruit;
(function setup(){
    snake = new Snake();
    fruit = new Fruit();
    fruit.pickLocation();

    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        fruit.draw();
        snake.update();
        snake.draw();

        if(snake.eat(fruit)){
            fruit.pickLocation();
        }

        snake.checkCollision();
        document.getElementById('number')
        .innerText = snake.total;
    }, 180);
}());

let d;
document.addEventListener('keydown', direction);

function direction(event){
    let key = event.keyCode;
    if (key === 37 && d !== "Right"){
        d = "Left";
    }
    else if (key === 38 && d !== "Down"){
        d = "Up";
    }
    else if (key === 39 && d!=="Left"){
        d = "Right";
    }
    else if (key === 40 && d!=="Up"){
        d = "Down";
    }
    snake.changeDir(d);
}
