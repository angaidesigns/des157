// JavaScript Document

window.onload = function() {

  console.log('loaded');
		// Get a reference to the canvas object
		var canvas = document.getElementById('myCanvas');
		// Create an empty project and a view for the canvas:
		paper.setup(canvas);
		// Create a Paper.js Path to draw a line into it:
		var path = new paper.Path();
		// Give the stroke a color
		path.strokeColor = 'black';
		var start = new paper.Point(100, 100);
		// Move to start and draw a line from there
		path.moveTo(start);
		// Note that the plus operator on Point objects does not work
		// in JavaScript. Instead, we need to call the add() function:
		path.lineTo(start.add([ 200, -50 ]));
		// Draw the view now:
		paper.view.draw();
	}
  /*

    var count = 10;

    // Create a symbol, which we will use to place instances of later:
    var path = new Path.Circle({
        center: new Point(0, 0),
        radius: 50,
        fillColor: 'white',
        strokeColor: 'black'
    });

    var symbol = new SymbolDefinition(path);

    // Place the instances of the symbol:
    for (var i = 0; i < count; i++) {
        // The center position is a random point in the view:
        var center = Point.random() * view.size;
        var placed = symbol.place(center);
        var scale = (i + 1) / count;
        placed.scale(scale);
        placed.data.vector = new Point({
            angle: Math.random() * 360,
            length : scale * Math.random() / 5
        });
    }

    var vector = new Point({
        angle: 45,
        length: 0
    });

    var mouseVector = vector.clone();

    function onMouseMove(event) {
        mouseVector = view.center - event.point;
    }

    // The onFrame function is called up to 60 times a second:
    function onFrame(event) {
        vector = vector + (mouseVector - vector) / 10000;

        // Run through the active layer's children list and change
        // the position of the placed symbols:
        for (var i = 0; i < count; i++) {
            var item = project.activeLayer.children[i];
            var size = item.bounds.size;
            var length = vector.length / 10 * size.width / 10;
            item.position += vector.normalize(length) + item.data.vector;
            keepInView(item);
        }
    }

    function keepInView(item) {
        var position = item.position;
        var itemBounds = item.bounds;
        var bounds = view.bounds;
        if (itemBounds.left > bounds.width) {
            position.x = -item.bounds.width;
        }

        if (position.x < -itemBounds.width) {
            position.x = bounds.width + itemBounds.width;
        }

        if (itemBounds.top > view.size.height) {
            position.y = -itemBounds.height;
        }

        if (position.y < -itemBounds.height) {
            position.y = bounds.height  + itemBounds.height / 2;
        }
    }

    */
