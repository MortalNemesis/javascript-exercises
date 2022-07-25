const repeatString = function(str, n) {
    if (n < 0) {
        return "ERROR";
    }
    
    result = "";
    while(n > 0) {
        result += str;
        n--;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
