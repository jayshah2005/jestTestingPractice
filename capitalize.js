function capitalize(string){

    let newStr = ""
    
    string.split(" ").forEach(string => {
        newStr += " " + String(string[0].toUpperCase() + string.slice(1));
    });

    return newStr.slice(1);
}

module.exports = capitalize;