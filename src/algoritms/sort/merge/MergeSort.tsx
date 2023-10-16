export function mergeSort(list: number[]): number[] | null {
    if (!list) {
      return null;
    }

    if (list.length <= 1) {
      return list;
    }

    const middle = Math.floor(list.length / 2);
    const left = list.slice(0, middle);
    const right = list.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;
    const totalLength = left.length + right.length;

    for (let i = 0; i < totalLength; i++) {
      if (leftIndex >= left.length) {
        result.push(right[rightIndex]);
        rightIndex++;
      } else if (rightIndex >= right.length) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result;
  }
