function caesarCipher(str, shift){

    let strArr = str.split("");
    let char;
    let charCode;
    let newCode;

    for(let i = 0; i < strArr.length; i++){

         char = strArr[i]
         charCode = char.charCodeAt(0)

        if(isChar(char)){
            if(char.charCodeAt(0) <= 90){
                newCode = (strArr[i].charCodeAt(0) + shift)
                if(newCode > 90) newCode = newCode % 90 + 64
                strArr[i] = String.fromCharCode(newCode);
            } else {
                newCode = (strArr[i].charCodeAt(0) + shift)
                if(newCode > 122) newCode = newCode % 122 + 96
                strArr[i] = String.fromCharCode(newCode);
            }
        }
    }

    return strArr.join("")

    function isChar(char){
        return 65 < char.charCodeAt(0) && 65 < char.charCodeAt(0) < 90 || 97 < char.charCodeAt(0) && 65 < char.charCodeAt(0) < 122;
    }
}

module.exports = caesarCipher;