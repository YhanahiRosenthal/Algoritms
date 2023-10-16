import { unique } from '../algoritms/string/unique/Unique';

describe('unique', () => {
    test('String with unique characters', () => {
        const input = 'abcdefg';
        expect(unique(input)).toBe(true);
    });

    test('String with duplicate characters', () => {
        const input = 'hello';
        expect(unique(input)).toBe(false);
    });

    test('Empty string', () => {
        const input = '';
        expect(unique(input)).toBe(true);
    });

    test('String with a single character', () => {
        const input = 'a';
        expect(unique(input)).toBe(true);
    });

    test('String with spaces', () => {
        const input = 'hello world';
        expect(unique(input)).toBe(false);
    });
});
