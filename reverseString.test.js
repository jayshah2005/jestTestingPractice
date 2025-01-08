import reverseString from "./reverseString";

test('reverse one word', () => {
    expect(reverseString('One')).toBe('enO')
    expect(reverseString('sas')).toBe('sas')
});

test('reverse a sentence', () => {
    expect(reverseString('This is a test')).toBe('tset a si sihT')
    expect(reverseString('I am me')).toBe('em ma I')
});