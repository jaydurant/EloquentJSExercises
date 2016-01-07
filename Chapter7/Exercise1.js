/*
Artificial stupidity

Having the inhabitants of our world go extinct after a few minutes is kind of depressing. To deal with this, we could try to create a smarter plant eater.

There are several obvious problems with our herbivores. First, they are terribly greedy, stuffing themselves with every plant they see until they have wiped out the local plant life. Second, their randomized movement (recall that the view.find method returns a random direction when multiple directions match) causes them to stumble around ineffectively and starve if there don’t happen to be any plants nearby. And finally, they breed very fast, which makes the cycles between abundance and famine quite intense.

Write a new critter type that tries to address one or more of these points and substitute it for the old PlantEater type in the valley world. See how it fares. Tweak it some more if necessary.

*/
function SmartPlantEater() {
  this.energy = 24; 
  this.dir = "s";
  this.turn = 0;
}

SmartPlantEater.prototype.act = function(context){
    var space = context.find(" ");
      var allSpace = context.findAll(" ");
      if(this.energy >= 60 && space){
          return {type:"reproduce", direction:space}
        }
      var plant = context.find("*");
      var allPlants = context.findAll("*");
      var allWalls = context.findAll("#");
      var allPlantEaters = context.findAll("O");
        
      if(allPlants.length > 1 && this.energy < 70){
          return {type:"eat", direction: plant };
        }
  
      if(this.turn > 2){
            this.turn = 0;
          return {type: "move", direction: space};
        }
  
      if(allPlants.length >= 1 && allSpace.length >= 1){
          for(var i = 0; context.look(this.dir) !== "*" && i < 8;i++){
              this.dir = dirPlus(this.dir,1);
            }
            if(context.look(this.dir) === "*"){
                var oneOver = dirPlus(this.dir,1);
                for(var i = 0; context.look(oneOver) !== " " && i < 8 ; i++ ){
                    oneOver = dirPlus(oneOver,1);
                }
                this.turn += 1;
                return {type:"move", direction: oneOver};
            }
        }
      
      if(allWalls.length > 0  ){
          for(var i = 0; context.look(this.dir) !== "#"  && i < 8;i++){
              this.dir = dirPlus(this.dir,1);
          }
          if(context.look(this.dir) === "#"){
                var oneOver = dirPlus(this.dir,1);
                for(var i = 0; context.look(oneOver) !== " " && i < 8 ; i++ ){
                    oneOver = dirPlus(oneOver,1);
                }
              this.turn += 1;
                return {type:"move", direction: oneOver};
            }
          
        }
      
      if(space){
            this.turn += 1;
          return {type:"move", direction:space};
        }
      
      
      
  
}
animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));