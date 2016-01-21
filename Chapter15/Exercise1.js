/*
Game over

It’s traditional for platform games to have the player start with a limited number of lives and subtract one life each time they die. When the player is out of lives, the game restarts from the beginning.

Adjust runGame to implement lives. Have the player start with three.
*/

<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>

<link rel="stylesheet" href="css/game.css">

<body>
<script>
  // The old runGame function. Modify it...
  function runGame(plans, Display) {
    var lives = 3;
    function startLevel(n) {
      runLevel(new Level(plans[n]), Display, function(status) {
        if(!lives)
          startLevel(0);
        else if (status == "lost" && lives--){
          console.log(lives);
          startLevel(n);
        }
        else if (n < plans.length - 1)
          startLevel(n + 1);
        else
          console.log("You win!");
      });
    }
    startLevel(0);
  }
  runGame(GAME_LEVELS, DOMDisplay);
</script>
</body>