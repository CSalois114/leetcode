/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    const count = (x, y) => {
        if(grid[x] && grid[x][y]) {
            grid[x][y] = 0;
            return ( 1 + count(x + 1, y) + count(x - 1, y)
                     + count(x, y + 1) + count(x, y - 1) );
        }
        return 0
    }
    
    for(let x = 0; x < grid.length; x++){
        for(let y = 0; y < grid[0].length; y++){
            if(grid[x][y]) max = Math.max(max, count(x, y))
        }
    }
    
    return max
};