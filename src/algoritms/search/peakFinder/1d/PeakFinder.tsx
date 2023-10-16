export function findPeak(array: number[]): number | null {

    if (!array || array.length === 0) {
        return null;
    }

    function isPeak(index: number): boolean {
        const leftNeighbor = index > 0 ? array[index - 1] : Number.MIN_SAFE_INTEGER;
        const rightNeighbor = index < array.length - 1 ? array[index + 1] : Number.MIN_SAFE_INTEGER;
        return array[index] >= leftNeighbor && array[index] >= rightNeighbor;
    }

    function findPeakInRange(start: number, end: number): number | null {
        if (start > end) {
          return null;
        }

        const middle = Math.round((start + end) / 2);

        if (isPeak(middle)) {
          return array[middle];
        }

        if (array[middle - 1] > array[middle]) {
          return findPeakInRange(start, middle - 1);
        } else {
          return findPeakInRange(middle + 1, end);
        }
    }

    return findPeakInRange(0, array.length - 1);
  }
