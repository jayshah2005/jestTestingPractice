import caesarCipher from "./caesarCipher";

test('should ignore non char letters', () => {
    expect(caesarCipher(',', 1)).toBe(',');
    expect(caesarCipher('. ', 2)).toBe('. ');
});

test('should shift a char by x', () => {
    expect(caesarCipher('a', 1)).toBe('b');
    expect(caesarCipher('V', 2)).toBe('X');
});

test('should shift a word by x', () => {
    expect(caesarCipher('hi', 1)).toBe('ij');
});

test('should wrap text when shifting', () => {
    expect(caesarCipher('z', 1)).toBe('a');
    expect(caesarCipher('Z', 2)).toBe('B');
});

test('should shift a sentence by x', () => {
   expect(caesarCipher('thIs is a tesT.', 23)).toBe('qeFp fp x qbpQ.');
});