/*
Autocompletion

Extend a text field so that when the user types, a list of suggested values is shown below the field. You have an array of possible values available and should show those that start with the text that was typed. When a suggestion is clicked, replace the text field’s current value with it.


*/

<!doctype html>
<script src="code/promise.js"></script>

<input type="text" id="field">
<div id="suggestions" style="cursor: pointer"></div>

<script>
  // Builds up an array with global variable names, like
  // 'alert', 'document', and 'scrollTo'
  var terms = [];
  for (var name in window)
    terms.push(name);
  // Your code here.
  var field = document.querySelector("#field");
  var sugg = document.querySelector("#suggestions");
  var ul = document.createElement("ul");
  sugg.appendChild(ul);
  field.addEventListener("input",function(e){
      ul.innerHTML = "";
      if(e.target.value){
      var regExpVal = "^"+ e.target.value + "\w*";
        }
      else{
         return ul.innerHTML = "";
        }
      var regExpObj = new RegExp(regExpVal,"i");
      terms.forEach(function(val){
          if(regExpObj.test(val)){
                var li = document.createElement("li");
              li.appendChild(document.createTextNode(val));
              ul.appendChild(li);
            }
        });
  });
  ul.addEventListener("click",function(e){
    val = e.target.textContent;
    field.value =val;
    ul.innerHTML ="";
  })
  
</script>