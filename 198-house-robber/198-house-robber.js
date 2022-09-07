/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max, oldMax, temp;
  max = oldMax = 0;
  while(nums.length) {
    temp = max
    max = Math.max(oldMax + nums.pop(), max)
    oldMax = temp
  }
  return max
};
