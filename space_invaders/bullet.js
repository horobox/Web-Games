function Bullet(){
    this.x = ship.x;
    this.y = ship.y;
    this.radius = 5;

    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x + 10, this.y, this.radius,0, Math.PI*2, false);
        ctx.fillStyle = 'red';
        ctx.fill();
    }
    this.update = function(){
        this.y = this.y - 1 * 2;
    }
    this.fire = function(){
        for(let i = 0; i < bullets.length; i++){
            bullets[i].update();
            bullets[i].draw();
        }
        for(let i = 0; i < bullets.length; i++){
            if(bullets[i].y < 0){
                bullets.splice(i, 1);
            }
        }
    }
}
