/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let count = 0;
  while(n) {
    n /= 2
    if(n % 1) {
      count += 1
      n -= .5
    }
  }
  return count
};

// 1
//
// 1