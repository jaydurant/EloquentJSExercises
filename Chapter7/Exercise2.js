

// Your code here
function Tiger() {
  this.energy = 100;
    this.dir = "w";
    this.turn = 0;
}

Tiger.prototype.act = function(context){
  var space = context.find(" ");
      var allSpace = context.findAll(" ");
      if(this.energy >= 400 && space){
          return {type:"reproduce", direction:space}
        }
      var plant = context.find("*");
      var allPlants = context.findAll("*");
      var allWalls = context.findAll("#");
      var plantEater = context.find("O");
      var allPlantEaters = context.findAll("O");
      var allTigers = context.findAll("@");
  
      if(allPlantEaters.length >= 1 && this.energy < 600){
          return {type:"eat", direction: plantEater  };
        }
      
      if(this.turn > 2){
            this.turn = 0;
          return {type: "move", direction: space};
        }
  
      if(allPlantEaters.length >= 1 && allSpace.length >= 1){
          for(var i = 0; context.look(this.dir) !== "O" && i < 8;i++){
              this.dir = dirPlus(this.dir,1);
            }
            if(context.look(this.dir) === "O"){
                var oneOver = dirPlus(this.dir,1);
                for(var i = 0; context.look(oneOver) !== " " && i < 8 ; i++ ){
                    oneOver = dirPlus(oneOver,1);
                }
                this.turn += 1;
                return {type:"move", direction: oneOver};
            }
        }
      
      if(allWalls.length > 0){
          for(var i = 0; context.look(this.dir) !== "#" && i < 8;i++){
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
      
      if(allSpace.length ===  8 ){
            this.turn += 1;
          return {type:"move", direction:space};
        }

}

}


animateWorld(new LifelikeWorld(
  ["####################################################",
   "#                 ####         ****              ###",
   "#   *  @  ##                 ########       OO    ##",
   "#   *    ##        O O                 ****       *#",
   "#       ##*                        ##########     *#",
   "#      ##***  *         ****                     **#",
   "#* **  #  *  ***      #########                  **#",
   "#* **  #      *               #   *              **#",
   "#     ##              #   O   #  ***          ######",
   "#*            @       #       #   *        O  #    #",
   "#*                    #  ######                 ** #",
   "###          ****          ***                  ** #",
   "#       O                        @         O       #",
   "#   *     ##  ##  ##  ##               ###      *  #",
   "#   **         #              *       #####  O     #",
   "##  **  O   O  #  #    ***  ***        ###      ** #",
   "###               #   *****                    ****#",
   "####################################################"],
  {"#": Wall,
   "@": Tiger,
   "O": SmartPlantEater, // from previous exercise
   "*": Plant}
));