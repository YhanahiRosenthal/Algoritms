export function heap(array: number[]): number[] | null {
    if (!array) {
        return null;
    }

    if (array.length <= 1) {
      return array;
    }

    maxHeap(array);

    const n = array.length;

    for (let i = n - 1; i > 0; i--) {
      swap(array, i, 0);
      heapDown(array, i, 0);
    }

    return array;
  }

  function maxHeap(array: number[]): void {
    const n = array.length;

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapDown(array, n, i);
    }
  }

  function heapDown(array: number[], n: number, i: number): void {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && array[left] > array[largest]) {
      largest = left;
    }

    if (right < n && array[right] > array[largest]) {
      largest = right;
    }

    if (i !== largest) {
      swap(array, i, largest);
      heapDown(array, n, largest);
    }
  }

  function swap(array: number[], i: number, j: number): void {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
