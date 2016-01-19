<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script> 

 function byTagName(node, tagName) {
    // Your code here.
    var total = [];
    var childList = node.children;
    if(childList.length > 0){
       for(var i = 0;i < childList.length;i++){
       		if(childList[i].tagName.toLowerCase() === tagName){
            	total.push(childList[i]);
            }
         	console.log(childList[i]);
         	if(childList[i].children.length > 0){
               console.log(childList[i]);
               total = total.concat(byTagName(childList[i],tagName));
               
            }
       }
    }
    return total;
    
  }

console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>  