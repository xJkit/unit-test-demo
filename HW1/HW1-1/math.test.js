import { isNumber, sum, factoral } from './math';

describe('[math.js]', () => {
  describe('isNumber', () => {
    test('should be true for all numbers', () => {
      expect(isNumber(3)).toBeTruthy();
      expect(isNumber(0)).toBeTruthy();
      expect(isNumber(-1)).toBeTruthy();
    });

    test('should be true for floating points', () => {
      expect(isNumber(0.3)).toBeTruthy();
      expect(isNumber(-7.8)).toBeTruthy();
    });

    test('should be false for invalid numbers', () => {
      expect(isNumber('1')).toBeFalsy();
      expect(isNumber(null)).toBeFalsy();
      expect(isNumber(NaN)).toBeFalsy();
      expect(isNumber(undefined)).toBeFalsy();
      expect(isNumber(true)).toBeFalsy();
    });
  });

  describe('sum', () => {
    test('should sum function returns the total amount of numbers', () => {
      expect(sum(3, 4)).toBe(7);
      expect(sum(1, 2, 6, 9)).toBe(18);
    });

    test('should throw error for invalid numbers', () => {
      expect(() => sum(1, 2, '3')).toThrow();
      expect(() => sum(1, 2, NaN)).toThrow();
      expect(() => sum(true)).toThrow();
    })
  })

  describe('factoral', () => {
    test('should factoral function returns the multiplication of numbers', () => {
      expect(factoral(4)).toBe(24);
      expect(factoral(5)).toBe(120);
    });

    test('should throw error for invalid numbers', () => {
      expect(() => factoral(true)).toThrow();
      expect(() => factoral('4')).toThrow();
      expect(() => factoral(undefined)).toThrow();
    });

    test('should throw error for negative numbers, 0 and floating points ', () => {
      expect(() => factoral(-3)).toThrow();
      expect(() => factoral(0)).toThrow();
      expect(() => factoral(1.7)).toThrow();
    });

    test('should throw error for non 1-arity function', () => {
      expect(() => factoral(1, 2)).toThrow();
      expect(() => factoral()).toThrow();
      expect(() => factoral(0, 0, 0)).toThrow();
    });
  });
});
