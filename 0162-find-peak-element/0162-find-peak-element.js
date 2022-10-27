/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  let left = 0
  let right = nums.length - 1
  let mid;
  
  while(left <= right) {
    mid = Math.floor((left + right) / 2)
    if(nums[mid - 1] > nums[mid]){
      right = mid - 1
    } else if(nums[mid + 1] > nums[mid]) {
      left = mid + 1
    } else {
      return mid
    }
  }
};