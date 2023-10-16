import { heap } from '../algoritms/sort/heap/Heap';

describe('Heap Sort', () => {
  test('Sorts an array of numbers in ascending order', () => {
    const inputArray = [4, 2, 7, 1, 9, 3];
    const expectedOutput = [1, 2, 3, 4, 7, 9];
    expect(heap(inputArray)).toEqual(expectedOutput);
  });

  test('Return null for a null array', () => {
    expect(heap()).toBeNull();
  });

  test('Returns the same array for an empty array or a single element', () => {
    expect(heap([])).toEqual([]);
    expect(heap([42])).toEqual([42]);
  });

  test('Handle arrays with duplicate elements', () => {
    const inputArray = [4, 2, 7, 1, 9, 3, 7];
    const expectedOutput = [1, 2, 3, 4, 7, 7, 9];
    expect(heap(inputArray)).toEqual(expectedOutput);
  });
});
