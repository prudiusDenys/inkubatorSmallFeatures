import {f, mult, sum} from './intro'

let a:number
let b: number

beforeEach(() => {
	a = 2;
	b = 4;

})

test('sum should return a + b', () => {
	let result = sum(a, b);
	expect(result).toBe(6);
})

test('mult should return a * b', () => {
	expect(mult(a,b)).toBe(8);
})



test('split should be correct', () => {
	let a = 'hello my World'

	let result = f(a);

	expect(result.length).toBe(3)
	expect(result[0]).toBe('hello')
	expect(result[1]).toBe('my')
	expect(result[2]).toBe('world')
})

