export function findPeak02(array: number[][]): number | null {
  if (!array || array.length === 0) {
    return null;
  }

  function getColumn(j: number): number[] {
    return array.map((row) => row[j]);
  }

  function getMaxIndex(column: number[]): number {
    return column.indexOf(Math.max(...column));
  }

  function isPeak(i: number, j: number): boolean {
    const current = array[i][j];
    const neighbors = [
      array[i - 1]?.[j] || current,
      array[i + 1]?.[j] || current,
      array[i][j - 1] || current,
      array[i][j + 1] || current,
    ];
    return neighbors.every((neighbor) => current >= neighbor);
  }

  function searchPeak(startRow: number, endRow: number, midColumn: number): number | null {
    if (startRow > endRow) {
      return null;
    }

    const maxRowIndex = getMaxIndex(getColumn(midColumn)) + startRow;
    if (isPeak(maxRowIndex, midColumn)) {
      return array[maxRowIndex][midColumn];
    }

    const leftColumn = midColumn > 0 ? midColumn - 1 : 0;
    const rightColumn = midColumn < array[0].length - 1 ? midColumn + 1 : array[0].length - 1;

    if (array[maxRowIndex][midColumn - 1] > array[maxRowIndex][midColumn + 1]) {
      return searchPeak(startRow, endRow, leftColumn);
    } else {
      return searchPeak(startRow, endRow, rightColumn);
    }
  }

  const midColumn = Math.floor(array[0].length / 2);
  return searchPeak(0, array.length - 1, midColumn);
}
