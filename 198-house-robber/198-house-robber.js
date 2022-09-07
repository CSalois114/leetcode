/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max, oldMax, temp;
  max = oldMax = 0;
  for(let i = 0; i < nums.length; i++) {
    temp = max
    max = Math.max(oldMax + nums[i], max)
    oldMax = temp
  }
  return max
};
