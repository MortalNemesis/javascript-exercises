const sumAll = function(a, b) {
    if (typeof a != "number" || typeof b != "number") {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    let result = 0;

    if (a > b) {
        while(a >= b) {
            result += a;
            a--;
        }
    } else {
        while(a <= b) {
            result += a;
            a++;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
