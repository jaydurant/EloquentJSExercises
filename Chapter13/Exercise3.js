/*
The cat’s hat

Extend the cat animation defined earlier so that both the cat and his hat (<img src="img/hat.png">) orbit at opposite sides of the ellipse.

Or make the hat circle around the cat. Or alter the animation in some other interesting way.

To make positioning multiple objects easier, it is probably a good idea to switch to absolute positioning. This means that top and left are counted relative to the top left of the document. To avoid using negative coordinates, you can simply add a fixed number of pixels to the position values.
*/
<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<img src="img/cat.png" id="cat" style="position: absolute">
<img src="img/hat.png" id="hat" style="position: absolute">

<script>
  var cat = document.querySelector("#cat");
  var hat = document.querySelector("#hat");
  // Your code here.
  var angle = 0, lastTime = null;
  function animate(time) {
    if (lastTime != null)
      angle += (time - lastTime) * 0.001;
    lastTime = time;
    hat.style.top = (Math.sin(angle) * 50) + "px";
    hat.style.left = (Math.cos(angle) * 100) + "px";
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
</script>