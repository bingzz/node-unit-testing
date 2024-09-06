import example from "../ts/example";
import { test, expect } from '@jest/globals';

/** TEST FUNCTIONS
 * test -> test case
 * expect -> outcome of the value
 */

// variable to be equal
test('adds 2 numbers', () => {
  const total = example.add(2, 4);

  expect(total).toBe(6);
});

// object to be identical
test('object assignment must be identical', () => {
  const data = { one: 1 };
  data['two'] = 2;

  expect(data).toEqual({ one: 1, two: 2 });
});

// expecting a value not to be equal
test('sum of two numbers is not negative', () => {
  const num1 = 8;
  const num2 = -7;
  const sum = num1 + num2;

  expect(sum).not.toBe(sum < 0);
});

// null value
test('null value', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

// zero value
test('zero value', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

// numbers
test('numbers', () => {
  const value = 2 + 3;

  expect(value).toBeGreaterThan(4); // > n
  expect(value).toBeGreaterThanOrEqual(5); // >= n
  expect(value).toBeLessThan(8); // < n
  expect(value).toBeLessThanOrEqual(5); // <= n

  // equal numbers
  expect(value).toBe(5);
  expect(value).toEqual(5);
});

// decimal points
test('decimals', () => {
  const value = 0.1 + 0.2;

  // expect(value).toBe(0.3) // not work (rounding error)
  expect(value).toBeCloseTo(0.3); // ~= n
});

// strings
test('string value not to match', () => {
  const str = 'irving';

  expect(str).not.toMatch(/I/);
});

test('string value to match', () => {
  const str = 'the quick brown fox jumps over a lazy dog';

  expect(str).toMatch(/fox/);
});

// arrays
test('list contains a number', () => {
  const arr = new Set(['irving', 2, 2, 5, 3.5, { obj: 'str' }]);

  expect(arr).toContain(5);
});

// exceptions
function throwError() {
  throw new Error('Throw Error test');
}

test('Throw exception', () => {
  expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow(Error);
  
  // 
  expect(() => throwError()).toThrow('Error has been thrown');
});