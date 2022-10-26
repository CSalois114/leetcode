/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0
    let high = nums.length - 1
    let mid
  
    while(low <= high) {
      mid = Math.floor((low + high) / 2)
      if(nums[low] <= nums[high]) return nums[low]
      nums[mid] < nums[low] ? high = mid : low = mid + 1
    }
};  