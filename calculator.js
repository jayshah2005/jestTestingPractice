function calculator(){
    this.cache = 0;

    this.add = (a, b) => a + b
    this.sub = (a, b) => a - b
    this.mul = (a, b) => a * b
    this.div = (a, b) => a / b

}

module.exports = calculator;