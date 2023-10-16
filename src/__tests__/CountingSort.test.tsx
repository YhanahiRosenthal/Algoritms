import { countingSort } from '../algoritms/sort/counting/CountingSort';

describe('countingSort', () => {
  test('sorts an array of numbers in ascending order', () => {
    const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    expect(countingSort(inputArray)).toEqual(expectedOutput);
  });

  test('returns null for null input array', () => {
    expect(countingSort()).toBeNull();
  });

  test('returns the same array for an empty or single-element array', () => {
    expect(countingSort([])).toEqual([]);
    expect(countingSort([42])).toEqual([42]);
  });

  test('handles custom range correctly', () => {
    const inputArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const expectedOutput = [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9];
    expect(countingSort(inputArray, 10)).toEqual(expectedOutput);
  });
});
