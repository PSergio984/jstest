const repeatString = function(word,num) {
    var res =word;
    for (let i = 1; i < num; i++) {
        res += word;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
