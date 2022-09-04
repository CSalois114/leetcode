/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const fin = [""]
    let max, c;
    for(let i = 0; i < s.length; i++){
        max = fin.length
        c = s.charAt(i) 
        for(let j = 0; j < max; j++) {
            if(!(c >= 0)) fin.push(fin[j] + c.toUpperCase())   
            fin[j] += c.toLowerCase()
        }   
    }
    return fin
};