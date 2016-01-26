/*
Pausing the game

Make it possible to pause (suspend) and unpause the game by pressing the Esc key.

This can be done by changing the runLevel function to use another keyboard event handler and interrupting or resuming the animation whenever the Esc key is hit.

The runAnimation interface may not look like it is suitable for this at first glance, but it is, if you rearrange the way runLevel calls it.

When you have that working, there is something else you could try. The way we have been registering keyboard event handlers is somewhat problematic. The arrows object is currently a global variable, and its event handlers are kept around even when no game is running. You could say they leak out of our system. Extend trackKeys to provide a way to unregister its handlers, and then change runLevel to register its handlers when it starts and unregister them again when it is finished.


*/
<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>

<link rel="stylesheet" href="css/game.css">

<body>
<script>
  var arrowCodes = {37: "left", 38: "up", 39: "right"};
  var arrows= trackKeys(arrowCodes);
  function trackKeys(codes) {
  var pressed = Object.create(null);
  function handler(event) {
    if (codes.hasOwnProperty(event.keyCode)) {
      var down = event.type == "keydown";
      pressed[codes[event.keyCode]] = down;
      event.preventDefault();
    }
  }
  pressed["removeEvent"] = function(){
      removeEventListener("keydown",handler);
        removeEventListener("keyup",handler);
  };
  pressed["addEvent"] =  function(){
        addEventListener("keydown",handler);
        addEventListener("keyup",handler);
  };
  return pressed;
}
  
  
  // The old runLevel function. Modify this...
  function runLevel(level, Display, andThen) {
   console.log(arrows);
   arrows.addEvent();
    var pause = null;
    addEventListener("keydown",function(e){
      if(e.keyCode == 27  && !level.isFinished() && !pause){
          pause = true;
        }
        else if(e.keyCode == 27  && !level.isFinished() && pause){
          pause = false;
            runAnimation(frameFunc);
        }
    });
    var display = new Display(document.body, level);
    runAnimation(frameFunc);
    
    function frameFunc(step) {
      arrows.addEvent();
      level.animate(step, arrows);
      display.drawFrame(step);
      if(pause){
        arrows.removeEvent();
        return false;
      }
      if (level.isFinished()) {
        display.clear();
        if (andThen)
          andThen(level.status);
        arrows.removeEvent();
        return false;
      }
    }
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>