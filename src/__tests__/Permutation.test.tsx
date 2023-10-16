import { permutations } from '../algoritms/string/permutation/Permutation';

describe('Permutation', () => {
    test('should return true for valid permutations', () => {
        expect(permutations('abc', 'bca')).toBe(true);
        expect(permutations('hello', 'olelh')).toBe(true);
        expect(permutations('listen', 'silent')).toBe(true);
    });

    test('should return false for invalid permutations', () => {
        expect(permutations('hello', 'world')).toBe(false);
        expect(permutations('abc', 'def')).toBe(false);
        expect(permutations('abc', 'ab')).toBe(false);
    });

    test('should handle different character cases', () => {
        expect(permutations('abc', 'abcd')).toBe(false);
    });

    test('should handle empty strings', () => {
        expect(permutations('', '')).toBe(true);
    });
})
