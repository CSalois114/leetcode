/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let maxMins, freshCount, i , j;
    const offsets = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const stack = [];
    maxMins = freshCount = 0

    for(i = 0; i < grid.length; i++) {
        for(j = 0; j < grid[0].length; j++) {
            if(grid[i][j] === 1) freshCount++;
            if(grid[i][j] === 2) stack.push([i, j]);
        }          
    }
  
    const spread = coord => {
        offsets.forEach(offset => {
            i = coord[0] + offset[0]
            j = coord[1] + offset[1]
            if(i >= 0 && i < grid.length && grid[i][j] == 1){
                grid[i][j] = grid[coord[0]][coord[1]] + 1
                stack.unshift([i, j])
                freshCount--
                grid[coord[0]][coord[1]] - 1 > maxMins && maxMins++
            }
        })
    }
    
    while(stack.length) {
        spread(stack.pop())
    }
    
    return freshCount ? -1 : maxMins
}