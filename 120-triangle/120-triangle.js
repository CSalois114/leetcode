/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(tri) {
  for(let i = tri.length - 1; i > 0; i--) {
    for(let j = 0; j < tri[i].length - 1; j++) {
      tri[i - 1][j] += Math.min(tri[i][j + 1], tri[i][j])
    }
  }
  return tri[0][0]
};