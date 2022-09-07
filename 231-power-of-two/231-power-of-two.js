/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  return n == 2 **(n.toString(2).length - 1)
};