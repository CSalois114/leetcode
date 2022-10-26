/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(mtrx, trgt) {
  let low = 0;
  let high = mtrx.length - 1
  let mid, arr;
  
  while(low <= high) {
    mid = Math.floor((low + high) / 2)
    if(arr) {
      if(arr[mid] == trgt) return true
      arr[mid] >= trgt ? high = mid - 1 : low = mid + 1
    } else {
      if(mtrx[mid][0] <= trgt && mtrx[mid][mtrx[mid].length - 1] >= trgt) {
        arr = mtrx[mid]
        low = 0
        high = mtrx[mid].length - 1
      } else {
        mtrx[mid][0] >= trgt ? high = mid - 1 : low = mid + 1
      }
    } 
  }

  return false
};