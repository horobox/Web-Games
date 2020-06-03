const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var ship = new Ship();
var LEFT, RIGHT = false;

(function setup(){
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ship.move();
    }, 1);
}());

document.onkeydown = function(e){
    if(e.keyCode === 37) LEFT = true;
    if(e.keyCode === 39) RIGHT = true;
}
document.onkeyup = function(e){
    if(e.keyCode === 37) LEFT = false;
    if(e.keyCode === 39) RIGHT = false;
}
