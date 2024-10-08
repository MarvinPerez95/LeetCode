/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    r = []
    for (let i = 0; i < arr.length; i++){
        r[i] = fn(arr[i],i)
    }
    return r
};