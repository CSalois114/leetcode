/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
   const ref = [0, 1]
   for(; n > 0; n--){
       [ref[0], ref[1]] = [ref[1], ref[0] + ref[1]]
   }
    return ref[1]
};

// 1   1
// 2   2
// 3   3
// 4   5
// 5   8
// 6   13