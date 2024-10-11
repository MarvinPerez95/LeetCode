/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let calls = false
    let r;
    return function(...args){
        if (!calls){
            r= fn(...args);
            calls=true;
            return r;
        }else{
            return undefined;
        }
    };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
