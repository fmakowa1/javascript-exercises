const sumAll = function(min, max) {
    let result = 0;
    for (let i = min; i < max + 1; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
