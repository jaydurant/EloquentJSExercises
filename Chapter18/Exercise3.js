/*
Conway’s Game of Life

Conway’s Game of Life is a simple simulation that creates artificial “life” on a grid, each cell of which is either live or not. Each generation (turn), the following rules are applied:

 Any live cell with fewer than two or more than three live neighbors dies.

 Any live cell with two or three live neighbors lives on to the next generation.

 Any dead cell with exactly three live neighbors becomes a live cell.

A neighbor is defined as any adjacent cell, including diagonally adjacent ones.

Note that these rules are applied to the whole grid at once, not one square at a time. That means the counting of neighbors is based on the situation at the start of the generation, and changes happening to neighbor cells during this generation should not influence the new state of a given cell.

Implement this game using whichever data structure you find appropriate. Use Math.random to populate the grid with a random pattern initially. Display it as a grid of checkbox fields, with a button next to it to advance to the next generation. When the user checks or unchecks the checkboxes, their changes should be included when computing the next generation.
*/

<!doctype html>
<script src="code/promise.js"></script>

<div id="grid">
  <table>
    <tr>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
    <tr>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
      <td><input type="checkbox"></td>
    </tr>
  </table>
</div>
<button id="next">Next generation</button>

<script>
    var movement = [[1,0],[1,1],[0,1],[-1,1],[-1,-1],[0,-1],[1,-1]];
  var grid = [];
  var nextButton = document.getElementById("next");
  
  var checkList = document.querySelectorAll("input");
  for(var i = 0;i < 25; i++){
       var z = Math.floor(Math.random()*30);
      checkList[z].checked = true;
    }
  for(var i = 0;i < checkList.length ; i++){
    grid.push(new Checkbox(checkList[i],i,checkList[i].checked));
  }

nextButton.addEventListener("click",function(){
      var checkList = document.querySelectorAll("input");
      for(var x = 0;x < 6;x++){
        for(var y = 0 ; y < 5; y++){
           checkStatus(checkList,x,y); 
        }
      }
      
      grid.forEach(function(val,i){
        checkList[i].checked = val.bool;
        
      });
  
});

function checkStatus(list,x,y){
    var count = 0;
    movement.forEach(function(val){
      var newX = val[0] + x;
      var newY = val[1] + y; 
    if(list[newX + (newY*6)] && list[newX + (newY*6)].checked === true ){
      count++;
    }
    });
    
    if(list[x + (y*6)].checked === true && (count == 2 || count == 3)  ){
      grid[x + (y*6)].bool = true;
    }
    else if(list[x + (y*6)].checked === true && (count < 2 || count > 3)){
      grid[x + (y*6)].bool = false;
    }
    else if(list[x + (y*6)].checked === false && count >= 3){
      grid[x + (y*6)].bool = true;
    }
  
}

function Checkbox(node,i,bool){
    this.num = i;
    this.node = node;
    this.bool = bool;
}
  
  
</script>