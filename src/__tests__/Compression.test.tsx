import { compressString } from '../algoritms/string/compression/Compression';

describe('compressString', () => {
  test('Compress a string correctly', () => {
    const inputString = 'aaaannnxxxxx';
    const expectedOutput = 'a4n3x5';
    expect(compressString(inputString)).toEqual(expectedOutput);
  });

  test('Returns the original string if the compressed string is not shorter', () => {
    const inputString = 'abcdefgh';
    expect(compressString(inputString)).toEqual(inputString);
  });

  test('Works correctly with an empty string', () => {
    const inputString = '';
    const expectedOutput = '';
    expect(compressString(inputString)).toEqual(expectedOutput);
  });

  test('Compress a string with repeated letters at the end correctly', () => {
    const inputString = 'xxxyyyzzz';
    const expectedOutput = 'x3y3z3';
    expect(compressString(inputString)).toEqual(expectedOutput);
  });
});
