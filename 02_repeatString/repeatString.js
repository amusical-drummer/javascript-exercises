const repeatString = function(string, num) {
    if (num > 0){
    let repeats = string.repeat(num);
    return  repeats;
    }else if(num < 0){
        return "ERROR"
    }else{
        return ""
    }
};

// Do not edit below this line
module.exports = repeatString;
