class vector {
    constructor(x,y){
        this._x = x;
        this._y = y;
    }
    setX(value){
        this._x = value;
    }
    getX(){
        return this._x;
    }
    setY(value){
        this._y = value;
    }
    getY(){
        return this._y;
    }
    setAngle(angle){
        let length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }
    getAngle(){
        return Math.atan2(this._y,this._x);
    }
    setLength(length){
        let angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * lendth;
    }
    getLength(){
        return Math.sqrt(this._x * this._x + this._y * this._y);
    }

};