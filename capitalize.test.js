import capitalize from './capitalize';

test('Capitalize one word', () => {
    expect(capitalize("one")).toBe("One");
    expect(capitalize("two")).toBe("Two");
    expect(capitalize("three")).toBe("Three");
})

test('Capitalize a sentence', () => {
    expect(capitalize("This is a test")).toBe("This Is A Test");
    expect(capitalize("trying something different")).toBe("Trying Something Different");
})