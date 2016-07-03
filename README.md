# What is fabric js.
- Fabric.js — a powerful Javascript library that makes working with HTML5 canvas a breeze
- Fabric provides simple but powerful object model on top of native methods. It takes care of canvas state and rendering, and lets us work with “objects” directly.

## rectangle with canvas 
    // reference canvas element (with id="c")
    var canvasEl = document.getElementById('c');
    
    // get 2d context to draw on (the "bitmap" mentioned earlier)
    var ctx = canvasEl.getContext('2d');
    
    // set fill color of context
    ctx.fillStyle = 'red';
    
    // create rectangle at a 100,100 point, with 20x20 dimensions
    ctx.fillRect(100, 100, 20, 20);    
## tetangle with fabricjs
    // create a wrapper around native canvas element (with id="c")
    var canvas = new fabric.Canvas('c');
    
    // create a rectangle object
    var rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 20,
      height: 20
      angle: 45
    });
    
    // "add" rectangle onto canvas
    canvas.add(rect);
    
## recreate canvas with new values
    var canvas = new fabric.Canvas('c');
    ...
    canvas.add(rect);
    ...
    
    rect.set({ left: 20, top: 50 });
    canvas.renderAll();
    
## 7 basic shapes provided in Fabric:
- fabric.Circle
- fabric.Ellipse
- fabric.Line
- fabric.Polygon
- fabric.Polyline
- fabric.Rect
- fabric.Triangle

## Circle
    var circle = new fabric.Circle({
      radius: 20, fill: 'green', left: 100, top: 100
    });

## Triangle
    var triangle = new fabric.Triangle({
      width: 20, height: 30, fill: 'blue', left: 50, top: 50
    });

## Manipulating objects
### set method
    var rect = new fabric.Rect({ width: 10, height: 20, fill: '#f55', opacity: 0.7 });
    
    // or functionally identical
    
    var rect = new fabric.Rect();
    rect.set({ width: 10, height: 20, fill: '#f55', opacity: 0.7 });

### get method
    var rect = new fabric.Rect(); // notice no options passed in
    
    rect.getWidth(); // 0
    rect.getHeight(); // 0

## Adding method to main object
    fabric.Object.prototype.getAngleInRadians = function() {
      return this.getAngle() / 180 * Math.PI;
    };
    
    var rect = new fabric.Rect({ angle: 45 });
    rect.getAngleInRadians(); // 0.785...
    
    var circle = new fabric.Circle({ angle: 30, radius: 10 });
    circle.getAngleInRadians(); // 0.523...

# Main Canvas
## adding object to Canvas
    canvas.add(rect);

## removing item from Canvas
    canvas.remove(rect);

## get all objects
    canvas.getObjects();

## get object by array no.
    canvas.item(0);

# canvas methods and properties
    var canvas = new fabric.Canvas('c', {
      backgroundColor: 'rgb(100,100,200)',
      selectionColor: 'blue',
      selectionLineWidth: 2
      // ...
    });
    
    // or
    
    var canvas = new fabric.Canvas('c');
    canvas.setBackgroundImage(http://...');
    canvas.onFpsUpdate = function(){ /* ... */ };
    canvas.selection = false; // disable group selection
    rect.set('selectable', false); // make object unselectable
    
## Static canvas
    var staticCanvas = new fabric.StaticCanvas('c');
    
##Images

###Speaking of images…  
html
    <canvas id="c"></canvas>
    <img src="my_image.png" id="my-image">
js
    var canvas = new fabric.Canvas('c');
    var imgElement = document.getElementById('my-image');
    var imgInstance = new fabric.Image(imgElement, {
      left: 100,
      top: 100,
      angle: 30,
      opacity: 0.85
    });
    canvas.add(imgInstance);


## get image from url 
    fabric.Image.fromURL('my_image.png', function(oImg) {
      // scale image down, and flip it, before adding it onto canvas
      oImg.scale(0.5).setFlipX(true);
      canvas.add(oImg);
    });
## svg path 
    var canvas = new fabric.Canvas('c');
    var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
    path.set({ left: 120, top: 120 });
    canvas.add(path);
    
    fabric.loadSVGFromString or fabric.loadSVGFromURL

#animate in fabric 

    rect.animate('left', 500, {
      onChange: canvas.renderAll.bind(canvas),
      duration: 1000,
      easing: fabric.util.ease.easeOutBounce
    });
    
- from: Allows to specify starting value of animatable property (if we don't want current value to be used).
- duration: Defaults to 500 (ms). Can be used to change duration of an animation.
- onComplete: Callback that's invoked at the end of the animation.
- easing: Easing function.

Notice fabric.util.ease.easeOutBounce as an easing option. Other notable ones include easeInCubic, easeOutCubic, easeInElastic, easeOutElastic, easeInBounce, and easeOutExpo.

## Image Filter

    fabric.Image.fromURL('pug.jpg', function(img) {
    
      // add filter
      img.filters.push(new fabric.Image.filters.Grayscale());
    
      // apply filters and re-render canvas when done
      img.applyFilters(canvas.renderAll.bind(canvas));
    
      // add image onto canvas
      canvas.add(img);
    });
    











