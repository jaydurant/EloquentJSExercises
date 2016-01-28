/*
A JavaScript workbench

Build an interface that allows people to type and run pieces of JavaScript code.

Put a button next to a <textarea> field, which, when pressed, uses the Function constructor we saw in Chapter 10 to wrap the text in a function and call it. Convert the return value of the function, or any error it raised, to a string and display it after the text field.
*/

<!doctype html>
<script src="code/promise.js"></script>

<textarea id="code">return "hi";</textarea>
<button id="button">Run</button>
<pre id="output"></pre>

<script>
  // Your code here.
  var button = document.querySelector("#button");
  button.addEventListener("click",function(e){
  		 var code = document.querySelector("#code").value;
    	 var func = new Function("",code);
    	 document.querySelector("#output").innerHTML = func();
  });
</script>