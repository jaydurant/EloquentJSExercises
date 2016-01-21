/*
Tabs

A tabbed interface is a common design pattern. It allows you to select an interface panel by choosing from a number of tabs “sticking out” above an element.

In this exercise you’ll implement a simple tabbed interface. Write a function, asTabs, that takes a DOM node and creates a tabbed interface showing the child elements of that node. It should insert a list of <button> elements at the top of the node, one for each child element, containing text retrieved from the data-tabname attribute of the child. All but one of the original children should be hidden (given a display style of none), and the currently visible node can be selected by clicking the buttons.

When it works, extend it to also style the currently active button differently.
*/

<!doctype html>
<style>
  .focused{
  	background-color:blue;
    color:white;
  }
  .unfocused{
    background-color:white;
    color:black;
  }
  .no-display{
  	display:none;
  }
  .yes-display{
  	display:block;
  }
  
</style>

<div id="wrapper">
  <div data-tabname="one">Tab one</div>
  <div data-tabname="two">Tab two</div>
  <div data-tabname="three">Tab three</div>
</div>
<script>
  var wrapper = document.querySelector("#wrapper");
  function asTabs(node) {
    var tabContentList = Array.prototype.slice.call(document.querySelectorAll("div[data-tabname]"));
    tabContentList.forEach(function(val,i){
      	if(i > 0){
        	val.classList.add("no-display");
        }
    	var button =  document.createElement("button");
      	var text = document.createTextNode(val.textContent);
      	button.appendChild(text);
        button.addEventListener("click",buttonClick);
      	button.setAttribute("data-tab",val.getAttribute("data-tabname"));
      	if(i === 0){
        	button.classList.add("focused");
            val.classList.add("yes-display");
        }
      	wrapper.insertBefore(button,document.querySelector("div[data-tabname=one]")); 	
    });
  }
  
  function buttonClick(e){
  	var current = document.querySelector(".focused");
    current.classList.remove("focused");
    current.classList.add("unfocused");
    var currentNum = current.getAttribute("data-tab");
    
    var currentContent = document.querySelector("div[data-tabname='" + currentNum + "']");
    currentContent.classList.remove("yes-display");
    currentContent.classList.add("no-display");
    
    e.target.classList.remove("unfocused");
    e.target.classList.add("focused");
    var newNum = e.target.getAttribute("data-tab");
    var newContent = document.querySelector("div[data-tabname='" + newNum +  "']");
    newContent.classList.remove("no-display");
    newContent.classList.add("yes-display");
    
    
  }
  asTabs(document.querySelector("#wrapper"));
</script>