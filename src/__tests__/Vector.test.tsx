import {
    createVec2,
    reset,
    copy,
    negate,
    add,
    equals,
    subtract,
    multiply,
    divide,
    normalize,
    length
} from '../data-structures/vector/Vector';

describe('Vector Operations', () => {
    const vectorA = createVec2(3, 4);
    const vectorB = createVec2(1, 2);

    test('createVec2 creates a vector with given x and y components', () => {
      const vector = createVec2(1, 2);
      expect(vector).toEqual({ x: 1, y: 2 });
    });

    test('reset sets vector components to zero', () => {
      const resetVector = reset(vectorA);
      expect(resetVector).toEqual({ x: 0, y: 0 });
    });

    test('copy creates a new vector with the same components', () => {
      const copiedVector = copy(vectorA);
      expect(copiedVector).toEqual(vectorA);
      expect(copiedVector).not.toBe(vectorA);
    });

    test('negate inverts the components of the vector', () => {
      const negatedVector = negate(vectorA);
      expect(negatedVector).toEqual({ x: -3, y: -4 });
    });

    test('equals checks if two vectors are equal', () => {
      expect(equals(vectorA, vectorB)).toBe(false);
      expect(equals(vectorA, createVec2(3, 4))).toBe(true);
    });

    test('add adds two vectors component-wise', () => {
      const result = add(vectorA, vectorB);
      expect(result).toEqual({ x: 4, y: 6 });
    });

    test('subtract subtracts two vectors component-wise', () => {
      const result = subtract(vectorA, vectorB);
      expect(result).toEqual({ x: 2, y: 2 });
    });

    test('multiply multiplies vector components by a scalar', () => {
      const result = multiply(vectorA, 2);
      expect(result).toEqual({ x: 6, y: 8 });
    });

    test('divide divides vector components by a divisor', () => {
      const result = divide(vectorA, 2);
      expect(result).toEqual({ x: 1.5, y: 2 });
    });

    test('normalize returns a normalized vector (unit vector)', () => {
      const normalizedVector = normalize(vectorA);
      const length = Math.sqrt(3 * 3 + 4 * 4);
      expect(normalizedVector.x).toBeCloseTo(3 / length);
      expect(normalizedVector.y).toBeCloseTo(4 / length);
    });

    test('length calculates the length of the vector', () => {
      const result = length(vectorA);
      expect(result).toBeCloseTo(5);
    });
  });