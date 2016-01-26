/*

Shapes

Write a program that draws the following shapes on a canvas:

A trapezoid (a rectangle that is wider on one side)
A red diamond (a rectangle rotated 45 degrees or ¼π radians)
A zigzagging line
A spiral made up of 100 straight line segments
A yellow star
The shapes to draw
When drawing the last two, you may want to refer to the explanation of Math.cos and Math.sin in Chapter 13, which describes how to get coordinates on a circle using these functions.

I recommend creating a function for each shape. Pass the position, and optionally other properties, such as the size or the number of points, as parameters. The alternative, which is to hard-code numbers all over your code, tends to make the code needlessly hard to read and modify.
*/
<!doctype html>
<script src="code/chapter/15_game.js"></script>
<script src="code/game_levels.js"></script>
<script src="code/chapter/16_canvas.js"></script>

<canvas width="600" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  function trap(sX,sY,wlength,height,skewScale){
    var s1width = sX + wlength;
    var s2height  = sY + height;
    var s3end = s1width * skewScale;
    var s3start = sX - (s3end - s1width);
    cx.beginPath();
    cx.moveTo(sX,sY);
    cx.lineTo(s1width,sY);
    cx.lineTo(s1width * skewScale, s2height);
    cx.lineTo(s3start,s2height);
    cx.lineTo(sX,sY);
    cx.stroke();
  }
  
  trap(10,10,15,20,1.2);
  diamond(0,0,25);
  zigZag(100,0,20,4,8)
  
  function diamond(sX,sY,length){
    cx.save();
    cx.translate(60,0);
    cx.rotate( .125 * (2 * Math.PI));
    cx.beginPath();
    var horizontal = true;
  	cx.moveTo(sX,sY);
    
    for(var i = 0;i < 3;i++){
    	switch(i){
          case 0:
            cx.lineTo(sX + length,sY);
            break;
          case 1:
            cx.lineTo(sX + length,sY + length);
            break;
          case 2:
            cx.lineTo(sX,sY + length);
        }
    }
   
   cx.fill();
   cx.restore();
   
  }
  
  function zigZag(sX,sY,width,height,lines){
    	var newX = sX;
    	var newY = sY;
  		cx.beginPath();
    	cx.moveTo(sX,sY);
    	for(var i = 0 ; i < lines; i++){
        	if(i % 2 === 0){
              newX += width;
              newY += height;
              cx.lineTo(newX, newY);
            }
          	else{
            	newX -= width;
                newY += height;
                cx.lineTo(newX,newY);
            }
        }
    	
    	cx.stroke();
  }
  
  spiral(10,1,40);
  
  function spiral(initW,scale,stepsN){
        var hX = 0;
        var hY = 0;
      var cp1 = initW;
      var cp2 = 0;
      var gp1 = initW;
      var gp2 = initW;
      var r = initW;
        cx.translate(100,30);
      cx.beginPath();
      cx.moveTo(0,0);
      for(var i = 1 ; i <= stepsN; i++){
          console.log(i);
          var step = i % 4;
        switch(step){
            case(1):
              console.log(cp1,cp2,gp1,gp2,r);
              cx.arcTo(cp1,cp2,gp1,gp2,r);
              //cx.arcTo(30,0,30,30,30);
              cp2 = parseInt(cp1 * 2);
              gp1 = parseInt(0);
              gp2 = parseInt(cp1*2);
              break;
            case(2):
               console.log(cp1,cp2,gp1,gp2,r);
              cx.arcTo(cp1,cp2,gp1,gp2,r);
              //cx.arcTo(30,60,0,60,30);
              gp2 = parseInt(gp1 / 2);
              cp1 = parseInt(-cp1);
              gp1 = parseInt(cp1);
              break;
            case(3):
               console.log(cp1,cp2,gp1,gp2,r);
               cx.arcTo(cp1,cp2,gp1,gp2,r);
               //cx.arcTo(-30,60,-30,30,30);
               if(hY === 0){
                hY = -5;
               }
               hY *=2;
               cp2 = hY;
               gp1 = hX;
               gp2 = hY;
               r = parseInt(r * 2);
               break;
            case(0):
               console.log(cp1,cp2,gp1,gp2,r);
               cx.arcTo(cp1,cp2,gp1,gp2,r);
               cp1 = parseInt(gp1 + r ) *2;
               cp2 = gp2;
               gp1 = cp1;
               gp2 = parseInt(gp2 + r) *2; 
               
               //cx.arcTo(-30,0,0,0,30);
               
              
              break;
          }
        }
      
      cx.stroke();
      
  }
  function star(x,y,h){
    cx.beginPath();
    cx.moveTo(x+h,y);
    rootAngle = (Math.PI * 2)/8 ;
    for(var i = 1 ; i <= 8; i++){
      var  angle = rootAngle * i ;
        cx.quadraticCurveTo(x,y, x + Math.cos(angle) * h, y + Math.sin(angle) * h );
    }
    cx.fillStyle = "yellow";
    cx.fill();
  }
  
  
</script>