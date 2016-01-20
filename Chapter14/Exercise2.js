/*
Censored keyboard

Between 1928 and 2013, Turkish law forbade the use of the letters Q, W, and X in official documents. This was part of a wider initiative to stifle Kurdish culture—those letters occur in the language used by Kurdish people but not in Istanbul Turkish.

As an exercise in doing ridiculous things with technology, I’m asking you to program a text field (an <input type="text"> tag) that these letters cannot be typed into.
*/

<!doctype html>

<style>
  .trail { /* className for the trail elements */
    position: absolute;
    height: 6px; 
    width: 6px;
    border-radius: 3px;
    background: teal;
  }
  body {
    height: 300px;
  }
</style>

<script>
  // Your code here.
  var lastX;
  var lastY;
  var trail = document.getElementsByClassName("trail");
  document.body.addEventListener("mousemove",function(event){
  	if(!lastX){
    	lastX = event.pageX;
      	lastY = event.pageY;
    }
    
    else if(lastX){
    	var image = document.createElement("div");
      	image.className = "trail";
        image.style.left = lastX + "px";
        image.style.top = lastY + "px";
      	document.body.appendChild(image);
        
        if(trail.length > 10){
        	trail[0].parentNode.removeChild(trail[0]);
        }
        lastX = event.pageX;
        lastY = event.pageY;
    }
  });
</script>