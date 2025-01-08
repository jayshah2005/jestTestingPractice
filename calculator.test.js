import calculator from "./calculator";

let calc = new calculator();

test('adding two numbers', () => {
    expect(calc.add(1, 2)).toBe(3)
    expect(calc.add(2, 3)).toBe(5)
});

test('subtracting two numbers', () => {
    expect(calc.sub(1, 2)).toBe(-1)
    expect(calc.sub(3, 3)).toBe(0)
});

test('multiplying two numbers', () => {
    expect(calc.mul(1, 2)).toBe(2)
    expect(calc.mul(2, 3)).toBe(6)
});