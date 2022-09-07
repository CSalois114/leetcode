/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max, oldMax;
  max = oldMax = 0;
  for(let i = 0; i < nums.length; i++) {
    [max, oldMax] = [Math.max(oldMax + nums[i], max), max]
  }
  return max
};
