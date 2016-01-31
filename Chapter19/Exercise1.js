/*
Rectangles

Define a tool called Rectangle that fills a rectangle (see the fillRect method from Chapter 16) with the current color. The rectangle should span from the point where the user pressed the mouse button to the point where they released it. Note that the latter might be above or to the left of the former.

Once it works, you’ll notice that it is somewhat jarring to not see the rectangle as you are dragging the mouse to select its size. Can you come up with a way to show some kind of rectangle during the dragging, without actually drawing to the canvas until the mouse button is released?

If nothing comes to mind, think back to the position: absolute style discussed in Chapter 13, which can be used to overlay a node on the rest of the document. The pageX and pageY properties of a mouse event can be used to position an element precisely under the mouse, by setting the left, top, width, and height styles to the correct pixel values.
*/
<!doctype html>
<script src="code/chapter/19_paint.js"></script>

<script>
  tools.Rectangle = function(event, cx) {
    // Your code here.
    var pos = relativePos(event,cx.canvas);
    var startPos = {x:event.pageX,y: event.pageY};
    var box = elt("div");
    box.style.position = "absolute";
    box.style.top = startPos.y + "px";
    box.style.left = startPos.x + "px";
    box.style.backgroundColor = cx.fillStyle;
    box.style.width = "0px";
    box.style.height = "0px";
    document.body.appendChild(box);
    trackDrag(function(event){
    var current = relativePos(event,cx.canvas);
    box.style.width = current.x - pos.x + "px";
    box.style.height = current.y - pos.y + "px";
      console.log(box.style.width,box.style.height);
    },function(event){
    	box.parentNode.removeChild(box);
      	cx.fillRect(pos.x,pos.y,parseInt(box.style.width),parseInt(box.style.height));
    })
  };
</script>

<link rel="stylesheet" href="css/paint.css">
<body>
  <script>createPaint(document.body);</script>
</body>