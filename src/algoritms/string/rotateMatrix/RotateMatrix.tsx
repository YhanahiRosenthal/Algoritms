export function rotateMatrix(matrix: number[][]): number[][] {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }

    const rows = matrix.length;
    const cols = matrix[0].length;

    if (rows !== cols) {
        throw new Error('The matrix is ​​not square.');
    }

    const traslateMatrix: number[][] = [];
    for (let i = 0; i < cols; i++) {
        traslateMatrix[i] = [];
        for (let j = 0; j < rows; j++) {
            traslateMatrix[i][j] = matrix[j][i];
        }
    }

    const rotatedMatrix: number[][] = [];
    for (let i = 0; i < cols; i++) {
        rotatedMatrix[i] = traslateMatrix[i].reverse();
    }

    return rotatedMatrix;
}
