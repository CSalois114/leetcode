/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  let columnSize = matrix.length
  let rowSize = matrix[0].length
  
  let low = 0;
  let high = (columnSize * rowSize) - 1
  let mid, val;
  
  while(low <= high) {
    mid = Math.floor((low + high) / 2)
    val = matrix[Math.floor(mid / rowSize)][mid % rowSize]
    if(val == target) return true
    val > target ? high = mid - 1 : low = mid + 1
  }
  
  return false
};