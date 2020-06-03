const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

var ship = new Ship();
var bullet = new Bullet(ship.x, ship.y);
var bullets = [];
var LEFT, RIGHT = false;

(function setup(){
    window.setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ship.move();
        bullet.fire();
    }, 1);
}());

document.onkeydown = function(e){
    if(e.keyCode === 37) LEFT = true;
    if(e.keyCode === 39) RIGHT = true;
    if(e.keyCode === 32){
        if(bullets.length < 3){
            bullets.push(new Bullet(ship.x, ship.y));
        }
    }
}
document.onkeyup = function(e){
    if(e.keyCode === 37) LEFT = false;
    if(e.keyCode === 39) RIGHT = false;
}
