import { rotateMatrix } from '../algoritms/string/rotateMatrix/RotateMatrix';

describe('rotateMatrix', () => {
    test('Rotation of a 2x2 matrix', () => {
        const inputMatrix = [
            [1, 2],
            [3, 4]
        ];
        const expectedOutput = [
            [3, 1],
            [4, 2]
        ];
        expect(rotateMatrix(inputMatrix)).toEqual(expectedOutput);
    });

    test('Rotation of a 3x3 matrix', () => {
        const inputMatrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const expectedOutput = [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
        ];
        expect(rotateMatrix(inputMatrix)).toEqual(expectedOutput);
    });

    test('empty Matrix', () => {
        const inputMatrix: any[] = [];
        const expectedOutput: any[] = [];
        expect(rotateMatrix(inputMatrix)).toEqual(expectedOutput);
    });

    test('Non-square matrix', () => {
        const inputMatrix = [
            [1, 2, 3],
            [4, 5, 6]
        ];
        expect(() => rotateMatrix(inputMatrix)).toThrow('The matrix is ​​not square.');
    });
});
