/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let output = [-1, -1]
  
  const recBin = (start, end, direction=null) => {
    const mid = Math.floor((start + end) / 2);
    if(start > end) return;
    
    if(nums[mid] == target) {
      if(direction) {
        
        if(direction == "LEFT") {
          output[0] = mid
          recBin(start, mid - 1, direction)
        } else {
          output[1] = mid
          recBin(mid + 1, end, direction)
        } 
        
      } else {
        
        output = [mid, mid]
        recBin(start, mid - 1, "LEFT")
        recBin(mid + 1, end, "RIGHT")
        
      }
      
    } else {
      
      if(nums[mid] < target) {
        recBin(mid + 1, end, direction)
      } else {
        recBin(start, mid - 1, direction)
      }
      
    }  
  }
  
  recBin(0, nums.length)
  return output
};