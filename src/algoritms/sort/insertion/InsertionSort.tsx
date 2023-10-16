export function insertionSort(list: number[]): number[] | null {
    if (!list) {
        return null;
    }

    const len = list.length;

    if (len <= 1) {
        return list;
    }

    for (let i = 1; i < len; i++) {
        const current = list[i];
        let j: number;

        for (j = i - 1; j >= 0 && list[j] > current; j--) {
            list[j + 1] = list[j];
        }

        list[j + 1] = current;
    }

    return list;
}
