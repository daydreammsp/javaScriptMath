class particle{
    constructor(x,y,speed,direction, grav){
        this.position = null;
        this.velocity = null;
        this.gravity = null;
        this.position = new vector(x,y);
        this.velocity = new vector(0,0);
        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
        this.gravity = new vector(0, grav || 0);
    }
    
    update(){
        this.velocity.addTo(this.gravity);
        this.position.addTo(this.velocity);
    }
}