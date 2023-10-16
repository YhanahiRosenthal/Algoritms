import { findPeak } from "../algoritms/search/peakFinder/1d/PeakFinder";

describe('findPeak function', () => {
  test('should return null for empty array', () => {
    expect(findPeak([])).toBeNull();
  });

  test('should return null for undefined or null input', () => {
    expect(findPeak()).toBeNull();
    expect(findPeak()).toBeNull();
  });

  test('should return the peak element for a single-element array', () => {
    expect(findPeak([5])).toBe(5);
  });

  test('should find the peak element in a general array', () => {
    expect(findPeak([1, 3, 20, 4, 1, 0])).toBe(20);
    expect(findPeak([1, 5, 10, 3])).toBe(10);
    expect(findPeak([1, 2, 3, 4, 5])).toBe(5);
    expect(findPeak([5, 4, 3, 2, 1])).toBe(5);
  });
});
