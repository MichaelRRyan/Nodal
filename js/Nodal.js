/**
 * @Author Michael Rainsford Ryan
 * @Date 27/12/2021
 */

class Nodal {

    constructor() {

        this.canvas = null;
        this.initialiseCanvas();

        this.node1 = new Node(200.0, 200.0);
        this.node1.text = 'Nodal';

        this.node2 = new Node(600.0, 300.0);
        this.node2.text = 'Graph Maker';

        this.connection = new Connection(this.node1, this.node2);

        // Binds the update function to its context.
        this.boundRecursiveUpdate = () => this.update(this);

        this.update();
    }

    initialiseCanvas()
    {
        this.canvas = document.createElement('canvas');

        this.canvas.id = 'mycanvas';
        this.canvas.width = window.innerWidth - 20.0;
        this.canvas.height = window.innerHeight - 20.0;

        document.body.appendChild(this.canvas);
    }

    /**
     * Updates the game and its contents.
     */
     update() {
        var now = Date.now(); // Gets the current time.

        // Works out the delta time using previous time.
        var deltaTime = now - this.previousTime;

        this.previousTime = now; // Sets the previous time.

        // Draw the game world.
        this.draw();

        // Call the update function again when the window is ready to render.
        window.requestAnimationFrame(this.boundRecursiveUpdate);
    }

    /**
     * Draws the game to a canvas.
     */
     draw() {
        // Clears the canvas to white.
	    var context = this.canvas.getContext('2d');
        context.clearRect(0,0,this.canvas.width, this.canvas.height);

        this.connection.draw(context);

        this.node1.draw(context);
        this.node2.draw(context);
    }

}