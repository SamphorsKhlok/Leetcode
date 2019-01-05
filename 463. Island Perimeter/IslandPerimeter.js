/**
 * @param {number[][]} grid
 * @return {number}
 */

var counter = 0;
var islandPerimeter = function(grid) {
  counter = 0;
  //check if input is empty
  if(grid == null || grid.length == null) return 0;

  //loop through each grid
  for(let r = 0; r < grid.length;r++){
    for(let c = 0; c < grid[0].length;c++){
      if(grid[r][c]== "1"){
        counter += 4;

        // if there is right neighbour then  -2
        if(c < grid[0].length-1 && grid[r][c+1] == "1"){
          counter -=2;
        }

        // if there is neighbour below then -2
        if(r < grid.length-1 && grid[r+1][c] == "1"){
          counter -=2;
        }
      }
    }
  }

  return counter;
};

module.exports = {islandPerimeter};
