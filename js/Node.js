class Node {

    constructor(x = 0.0, y = 0.0) {
        this.position = new Vector2(x, y);
        this.radius = 100.0;
        this.text = '';
    }

    draw(context) {
        this.drawCircle(context, this.position.x, this.position.y, this.radius, 'white', 'black', 2);

        context.fillStyle = 'black';
        context.font = '24px cursive';
        context.textBaseline = 'middle';

        var textWidth = context.measureText(this.text).width;

        context.fillText(this.text,
            this.position.x - (textWidth / 2.0),
            this.position.y);
    }

    drawCircle(ctx, x, y, radius, fill, stroke, strokeWidth) {
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false)
        if (fill) {
          ctx.fillStyle = fill
          ctx.fill()
        }
        if (stroke) {
          ctx.lineWidth = strokeWidth
          ctx.strokeStyle = stroke
          ctx.stroke()
        }
    }

}