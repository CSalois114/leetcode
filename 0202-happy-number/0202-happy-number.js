/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let sum
    const log = []
    while(sum != 1 && !log.includes(n)) {
        log.push(n)
        sum = 0
        while(n) {
            sum += (n % 10) ** 2
            n = Math.floor(n / 10)
        }
        n = sum
    }
    return n == 1  
};