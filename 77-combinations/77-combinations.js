/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const next = new Array(k)
    const fin = [];
    const recAdd = (i=0, j=1) => {
        for(; j <= n - k + i + 1; j++) {
            next[i] = j
            i < k - 1 ? recAdd(i + 1, j + 1) : fin.push([...next])
        }
    }
    recAdd()
    return fin
};