function analyzeArray(arr){

    const obj = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }

    obj.length = arr.length;
    obj.average = getAverage(arr);
    obj.min = arr.reduce((acc, curr) => acc < curr ? acc : curr)
    obj.max = arr.reduce((acc, curr) => acc > curr ? acc : curr)

    function getAverage(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
          sum += array[i];
        }
        return sum / array.length;
    }

    return obj;

}

module.exports = analyzeArray;