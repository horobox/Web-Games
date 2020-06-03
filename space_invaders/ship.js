function Ship(){
    this.x = canvas.width/2;
    this.y = canvas.height - 50;
    this.scl = 2;
    this.shipSize = 20;
    this.xSpeed = this.scl * 1;

    this.draw = function(){
        ctx.fillStyle = "#69dbe0";
        ctx.fillRect(this.x, this.y, this.shipSize, this.shipSize);
    }
    this.checkWalls = function(){
        if(this.x > canvas.width - this.shipSize){
            this.x = canvas.width - this.shipSize;
        }
        if(this.x < 0){
            this.x = 0;
        }
    }
    this.changeDir = function(dir){
        this.xSpeed = dir * this.scl;
        this.x += this.xSpeed * 0.5;
    }
    this.move = function(){
        if(LEFT){
            ship.changeDir(-1);
        }
        if(RIGHT){
            ship.changeDir(1);
        }
        ship.checkWalls();
        ship.draw();
    }
}
