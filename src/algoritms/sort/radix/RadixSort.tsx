export function radixSort(list: number[]): number[] | null {
    if (!list) {
        return null;
    }

    if (list.length <= 1) {
        return list;
    }

    const max = findBiggest(list);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        list = countingSort(list, exp);
    }

    return list;
}

function countingSort(list: number[], exp: number): number[] {
    const count = new Array(10).fill(0);
    const output = new Array(list.length);

    for (const num of list) {
        const digit = Math.floor(num / exp) % 10;
        count[digit]++;
    }

    for (let i = 1; i < count.length; i++) {
        count[i] += count[i - 1];
    }

    for (let i = list.length - 1; i >= 0; i--) {
        const digit = Math.floor(list[i] / exp) % 10;
        output[count[digit] - 1] = list[i];
        count[digit]--;
    }

    return output;
}

export function findBiggest(list: number[]): number {
    return Math.max(...list);
}
