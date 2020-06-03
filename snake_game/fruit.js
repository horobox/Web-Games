function Fruit() {
    this.x;
    this.y;

    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * rows)) * scale;
        this.y = (Math.floor(Math.random() * columns)) * scale;
    }
    this.draw = function(){
        ctx.fillStyle = "tomato";
        ctx.fillRect(this.x, this.y, scale, scale);
    }
}
