/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    cach={}
    return function(...args) {
        key = String(args)
        if(key in cach ){
            return cach[key]
        }
        result = fn(...args)
        cach[key]= result
        return result
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */