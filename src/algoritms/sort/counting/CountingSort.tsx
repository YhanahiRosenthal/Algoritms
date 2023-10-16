export function countingSort(array: number[], k: number = 123): number[] | null {
    if (!array) {
      return null;
    }

    if (array.length <= 1) {
      return array;
    }

    function countCase(array: number[], k: number): number[] {
      const count = new Array(k).fill(0);
      for (const el of array) {
        count[el]++;
      }
      return count;
    }

    function stockSum(count: number[]): void {
      for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
      }
    }

    function placeValue(array: number[], count: number[], output: number[]): void {
      for (let i = array.length - 1; i >= 0; i--) {
        const el = array[i];
        output[count[el] - 1] = el;
        count[el]--;
      }
    }

    const count = countCase(array, k);
    stockSum(count);
    const output = new Array(array.length).fill(0);
    placeValue(array, count, output);

    return output;
  }