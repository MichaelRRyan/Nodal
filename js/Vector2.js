class Vector2 {

    constructor(x = 0.0, y = 0.0) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }

    minus(vector) {
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }

    multiply(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }

    divide(scalar) {
        return new Vector2(this.x / scalar, this.y / scalar);
    }

    rotate(radians) {
        return new Vector2(
            this.x * Math.cos(radians) - this.y * Math.sin(radians),
            this.x * Math.sin(radians) + this.y * Math.cos(radians));
    }

}