/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const fin = [nums]
    let temp;
    for(let i = 1; i < nums.length; i++) {
        fin.forEach(arr => {
            temp = [...arr]
            for(let j = i; j > 0; j--) {
                [temp[j - 1], temp[j]] = [temp[j], temp[j - 1]]
                fin.push([...temp])
            }
        })
    }
    return fin
};