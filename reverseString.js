function reverseString(str){
    if(str.length == 0) return '';
    return str.slice(-1) + reverseString(str.substring(0, str.length - 1));
}

module.exports = reverseString;