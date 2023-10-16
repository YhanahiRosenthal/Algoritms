import { documentDistance } from '../algoritms/string/document-distance/DocumentDistance';

describe('documentDistance', () => {
  test('should return correct similarity for similar strings', () => {
    const str1 = 'this is a test string';
    const str2 = 'this is a test string';
    expect(documentDistance(str1, str2)).toBeCloseTo(1, 1);
  });

  test('should return 0 for completely dissimilar strings', () => {
    const str1 = 'hello';
    const str2 = 'world';
    expect(documentDistance(str1, str2)).toBe(0);
  });

  test('should handle empty strings', () => {
    const str1 = '';
    const str2 = 'non-empty';
    expect(documentDistance(str1, str2)).toBe(0);
  });

  test('should handle strings with different word frequencies', () => {
    const str1 = 'apple orange orange';
    const str2 = 'apple orange';
    expect(documentDistance(str1, str2)).toBeCloseTo(0.9486832980505138, 4);
  });

  test('should handle uppercase and lowercase letters', () => {
    const str1 = 'Hello World';
    const str2 = 'HELLO world';
    expect(documentDistance(str1, str2)).toBeCloseTo(1, 4);
  });
});
