var numIslands = function(grid){
  let num = 0;
  if(grid == null || grid.length == 0){
    return 0;
  }

  for(let r=0; r < grid.length; r++){
    for(let c=0; c < grid[0].length; c++){
      if(grid[r][c] == "1"){
        num++;
        DFS(grid, r,c);
      }
    }
  }

  return num;
}

var DFS = function(grid, r, c){
  let numRow = grid.length;
  let numCol = grid[0].length;

  if(r < 0 || c < 0 || r >= numRow || c >= numCol || grid[r][c] == "0"){
    return;
  }

  grid[r][c] = "0";
  DFS(grid, r-1, c);
  DFS(grid, r+1, c);
  DFS(grid, r, c-1);
  DFS(grid, r, c+1);
}

module.exports = { numIslands };
