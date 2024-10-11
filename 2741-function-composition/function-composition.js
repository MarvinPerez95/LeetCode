/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let r =[];
        r = functions.reverse()
        for (let i in functions){
            x = r[i](x);
            //console.log(functions[i](x));
            //console.log(functions[i](x))
            //console.log(x);
            console.log(x);
        };
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */