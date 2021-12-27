class Connection {
    
    constructor(nodeFrom, nodeTo) {
        this.nodeFrom = nodeFrom;
        this.nodeTo = nodeTo;
    }

    draw(context) {
        context.beginPath();
        context.moveTo(this.nodeFrom.position.x, this.nodeFrom.position.y);
        context.lineTo(this.nodeTo.position.x, this.nodeTo.position.y);
        context.stroke();

        var distVec = new Vector2(
            this.nodeTo.position.x - this.nodeFrom.position.x,
            this.nodeTo.position.y - this.nodeFrom.position.y);

        var distance = Math.sqrt(distVec.x * distVec.x + distVec.y * distVec.y);
        var direction = distVec.divide(distance);        
        var arrowPoint = this.nodeTo.position.minus(direction.multiply(this.nodeTo.radius));
        var arrow1 = arrowPoint.minus(direction.rotate(Math.PI / 6.0).multiply(10.0)); 
        var arrow2 = arrowPoint.minus(direction.rotate(-Math.PI / 6.0).multiply(10.0));

        context.beginPath();
        context.moveTo(arrow1.x, arrow1.y);
        context.lineTo(arrowPoint.x, arrowPoint.y);
        context.stroke();

        context.beginPath();
        context.moveTo(arrow2.x, arrow2.y);
        context.lineTo(arrowPoint.x, arrowPoint.y);
        context.stroke();
    }

}