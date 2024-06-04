import {capitalize, reverseString, Calculator, caesarCipher, analyzeArray} from './testingpractice';

// capitalize test
test('null string check', () =>{
    expect(capitalize("")).toBe("");
});

test("1 character", () =>{
    expect(capitalize("a")).toBe("A");
});

test("multiple character 1", () =>{
    expect(capitalize("harry")).toBe("Harry");
});

test("multiple character 2", () =>{
    expect(capitalize("harry potter")).toBe("Harry potter");
});

// reverseString test
test('null string test', () =>{
    expect(reverseString("")).toBe("");
});

test("1 character", () =>{
    expect(reverseString("a")).toBe("a");
});

test("multiple character even", () =>{
    expect(reverseString("harryp")).toBe("pyrrah");
});

test("multiple character odd", () =>{
    expect(reverseString("harry")).toBe("yrrah");
});

// calculator test
const calc1 = new Calculator(10,5);
const calc2 = new Calculator(10,0);

test('addition test', () =>{
    expect(calc1.add()).toBe(15);
});

test("subtraction test", () =>{
    expect(calc1.sub()).toBe(5);
});

test("multiplication test", () =>{
    expect(calc1.mul()).toBe(50);
});

test("division test", () =>{
    expect(calc1.div()).toBeCloseTo(2);
});

test("division test with 0", () =>{
    expect(() => calc2.div()).toThrow('Cannot divided by 0');
});

// caesarCipher test
test('null string test', () =>{
    expect(caesarCipher("",3)).toBe("");
});

test("1 character lower", () =>{
    expect(caesarCipher("a",3)).toBe("d");
});

test("1 character upper", () =>{
    expect(caesarCipher("A",3)).toBe("D");
});

test("1 character wrap", () =>{
    expect(caesarCipher("Z",2)).toBe("B");
});

test("multiple character lower", () =>{
    expect(caesarCipher("harryp",1)).toBe("ibsszq");
});

test("multiple character upper", () =>{
    expect(caesarCipher("HELLO",3)).toBe("KHOOR");
});

test("multiple character mixed", () =>{
    expect(caesarCipher("Harry Potter",2)).toBe("Jctta Rqvvgt");
});

// analyzeArray test
test('null array test', () =>{
    expect(() => analyzeArray([])).toThrow("Need at least 1 element");
});

test('1 element array test', () =>{
    expect(analyzeArray([1])).toEqual({
        average: 1,
        min: 1,
        max: 1,
        length: 1
    });
});

test('multiple element array test', () =>{
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

test('array with negative numbers test', () => {
    expect(analyzeArray([-3, -1, -2])).toEqual({
        average: -2,
        min: -3,
        max: -1,
        length: 3
    });
});

test('mixed numbers array test', () => {
    expect(analyzeArray([7, -4, 3, 0])).toEqual({
        average: 1.5,
        min: -4,
        max: 7,
        length: 4
    });
});

test('floating point numbers array test', () => {
    expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
        average: 2.5,
        min: 1.5,
        max: 3.5,
        length: 3
    });
});

test('large array test', () => {
    const largeArray = Array(1000).fill(1).map((_, index) => index + 1);
    const sum = largeArray.reduce((acc, val) => acc + val, 0);
    expect(analyzeArray(largeArray)).toEqual({
        average: sum / largeArray.length,
        min: 1,
        max: 1000,
        length: 1000
    });
});