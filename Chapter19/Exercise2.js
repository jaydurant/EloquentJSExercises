/*
Color picker

Another tool that is commonly found in graphics programs is a color picker, which allows the user to click the picture and selects the color under the mouse pointer. Build this.

For this tool, we need a way to access the content of the canvas. The toDataURL method more or less did that, but getting pixel information out of such a data URL is hard. Instead, we’ll use the getImageData method on the drawing context, which returns a rectangular piece of the image as an object with width, height, and data properties. The data property holds an array of numbers from 0 to 255, using four numbers to represent each pixel’s red, green, blue, and alpha (opaqueness) components.

This example retrieves the numbers for a single pixel from a canvas once when the canvas is blank (all pixels are transparent black) and once when the pixel has been colored red.

*/

<!doctype html>
<script src="code/chapter/19_paint.js"></script>

<script>

tools["Pick color"] = function(event, cx) {
    // Your code here.
  	function detectColor(event){
    	var pos = relativePos(event,cx.canvas);
      	var currentColor = pixelAt(cx,pos.x,pos.y);
      	cx.fillStyle = "rgb("+currentColor[0]+","+currentColor[1]+","+ currentColor[2] + ")" ;
    	cx.strokeStyle = "rgb("+currentColor[0]+","+currentColor[1]+","+ currentColor[2] + ")" ;
    	console.log(cx.fillStyle);
    }
    cx.canvas.addEventListener("mouseup",function(event){
    	detectColor(event);
      	cx.canvas.removeEventListener("mouseup",detectColor);
    
    });
    
  };
  
  function pixelAt(cx,x,y){
  		try{
          return cx.getImageData(x,y,1,1).data;
        }
    	catch(e){
          	if(e instanceof SecurityError){
        		console.log(e.message);
        	}
          	else{
            	throw e;
            }
        }
  }
</script>

<link rel="stylesheet" href="css/paint.css">
<body>
  <script>createPaint(document.body);</script>
</body>