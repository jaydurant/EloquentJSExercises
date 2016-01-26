/*
The pie chart

Earlier in the chapter, we saw an example program that drew a pie chart. Modify this program so that the name of each category is shown next to the slice that represents it. Try to find a pleasing-looking way to automatically position this text, which would work for other data sets as well. You may assume that categories are no smaller than 5 percent (that is, there won’t be a bunch of tiny ones next to each other).

You might again need Math.sin and Math.cos, as described in the previous exercise.
*/
<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>
<script src="code/chapter/16_canvas.js"></script>

<canvas width="600" height="300"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  var total = results.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);

  var currentAngle = -0.5 * Math.PI;
  var centerX = 300, centerY = 150;
  // Add code to draw the slice labels in this loop.
  results.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    cx.beginPath();
    var iBetween = (currentAngle + sliceAngle/2)  ;
    console.log(result.name,result.color);
    cx.fillStyle = result.color;
    cx.fillText(result.name, centerX + Math.cos(iBetween) *145 ,centerY + Math.sin(iBetween) *145  );
    cx.arc(centerX, centerY, 100,
           currentAngle, currentAngle + sliceAngle);
    currentAngle += sliceAngle; 
    cx.lineTo(centerX, centerY);
    cx.fillStyle = result.color;
    cx.fill();
  });
</script>