<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>
<script src="code/chapter/16_canvas.js"></script>

<canvas width="400" height="400"></canvas>
<script>
  <!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>
<script src="code/chapter/16_canvas.js"></script>

<canvas width="400" height="400"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  console.log(document.querySelector("canvas").style.width);
  var lastTime = null;
  function frame(time) {
    if (lastTime != null)
      updateAnimation(Math.min(100, time - lastTime) / 1000);
    lastTime = time;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  function updateAnimation(step) {
    // Your code here.
    cx.clearRect(0,0,1000,500);
    cx.fillStyle = "red";
    cx.fillRect(0,0,400,400);
    ball.draw();
    
    
  }
  
  var ball = new Ball(new Vector(200,200),10);
  
  function Ball(obj,r){
    this.vector = obj;
    this.x = this.vector.x;
    this.y = this.vector.y;
    this.plus = this.vector.plus;
    this.speed = new Vector(0,-3);
    this.draw = function(){
        cx.beginPath();
      cx.arc(this.x,this.y,r,0,7);
        cx.lineWidth = 4;
        cx.stroke();
        var potentialspeed = this.plus(this.speed);
        if(hitWall.call(this,potentialspeed,r)){
            this.x = this.vector.x;
          this.y = this.vector.y;
        }
        else{
        this.vector = this.plus(this.speed);
        this.x = this.vector.x;
        this.y = this.vector.y;
        }
    };
  }
  
function hitWall(obj,r){
    var centerX = obj.x;
    var centerY = obj.y;
    var x,y;
    var angleIteration = (Math.PI * 2 )/360;
    for(var angle = 0; angle <= Math.PI * 2 ; angle += angleIteration){
      x = centerX + Math.cos(angle) * (r + 3);
      y = centerY + Math.sin(angle) * (r + 3);
        if(x > 400 || x < 0 || y > 400 || y < 0){
            console.log(angle);
          this.speed = new Vector( 0 + Math.cos(angle - 4 ) * 3, 0 + Math.sin(angle - 4) * 3);
          return true;
        }
    }
    return false;
}
  
  
</script>