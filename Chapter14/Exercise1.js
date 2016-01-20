/*
Censored keyboard

Between 1928 and 2013, Turkish law forbade the use of the letters Q, W, and X in official documents. This was part of a wider initiative to stifle Kurdish culture—those letters occur in the language used by Kurdish people but not in Istanbul Turkish.

As an exercise in doing ridiculous things with technology, I’m asking you to program a text field (an <input type="text"> tag) that these letters cannot be typed into.
*/


<!doctype html>

<input type="text">
<script>
  var field = document.querySelector("input");
  
  // Your code here.
  function findKeyCode(args,event){
    args = args.map(function(val){
    	return val.charCodeAt(0);
    });
    if(args.indexOf(event) !== -1){
    	return true;
    }
    
  }
  field.addEventListener("keydown",function(event){
  			if(findKeyCode(["X","Q","W"],event.keyCode)){
            	event.preventDefault();
            }
  })
</script>