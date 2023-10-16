import { urlify } from '../algoritms/string/urlify/Urlify';

describe('urlify', () => {
    test('String with spaces', () => {
        const input = 'hello world';
        const expectedOutput = 'hello%20world';
        expect(urlify(input)).toBe(expectedOutput);
    });

    test('String without spaces', () => {
        const input = 'helloworld';
        const expectedOutput = 'helloworld';
        expect(urlify(input)).toBe(expectedOutput);
    });

    test('String with extra spaces', () => {
        const input = '  hello  world  ';
        const expectedOutput = '%20%20hello%20%20world%20%20';
        expect(urlify(input)).toBe(expectedOutput);
    });

    test('Empty string', () => {
        const input = '';
        const expectedOutput = '';
        expect(urlify(input)).toBe(expectedOutput);
    });
});
