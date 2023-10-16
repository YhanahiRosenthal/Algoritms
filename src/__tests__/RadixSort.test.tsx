import { radixSort } from '../algoritms/sort/radix/RadixSort';

describe('radixSort', () => {
  test('Sorts an array of numbers in ascending order', () => {
    const inputArray = [4, 2, 7, 1, 9, 3];
    const expectedOutput = [1, 2, 3, 4, 7, 9];
    expect(radixSort(inputArray)).toEqual(expectedOutput);
  });

  test('Return null for a null array', () => {
    expect(radixSort()).toBeNull();
  });

  test('Returns the same array for an empty array or with a single element', () => {
    expect(radixSort([])).toEqual([]);
    expect(radixSort([42])).toEqual([42]);
  });

  test('Sorts an array of numbers in descending order', () => {
    const inputArray = [9, 7, 5, 3, 1];
    const expectedOutput = [1, 3, 5, 7, 9];
    expect(radixSort(inputArray)).toEqual(expectedOutput);
  });

  test('Sorts an array of numbers that is already sorted', () => {
    const inputArray = [1, 2, 3, 4, 5];
    const expectedOutput = [1, 2, 3, 4, 5];
    expect(radixSort(inputArray)).toEqual(expectedOutput);
  });
});
