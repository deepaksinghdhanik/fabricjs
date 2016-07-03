(function() {
  var canvas = new fabric.Canvas('c', {
  backgroundColor: 'rgb(100,100,200)',
  selectionColor: 'blue',
  selectionLineWidth: 2
  // ...
});

  // create a rectangle object
    var rect = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 20,
        height: 20,
        angle:20,
        selectable:false
    });

    var circle = new fabric.Circle({

        left:0,
        top:0,
        radius:25,
        fill:'green'

    })

    var triangle = new fabric.Triangle({
        left:40,
        top:40,
        height:100,
        width:100,
        fill:'orange',
        angle:45
    });




    // "add" rectangle onto canvas
    canvas.add(circle , triangle , rect);
    circle.set({ left: 100, top: 50 });
    
    console.info(triangle.getOpacity());

     fabric.Object.prototype.getAngleInRadians = function() {
        return this.getAngle() / 180 * Math.PI;
    };

   // canvas.remove(circle);
   console.info(canvas.getObjects());
  
})();