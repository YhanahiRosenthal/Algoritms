import { findPeak02 } from "../algoritms/search/peakFinder/2d/PeakFindes02";

  describe('findPeak02 function', () => {
    test('should return null for empty array', () => {
      expect(findPeak02([])).toBeNull();
    });

    test('should return null for undefined or null input', () => {
      expect(findPeak02()).toBeNull();
      expect(findPeak02()).toBeNull();
    });

    test('should return the peak element for a single-row array', () => {
      expect(findPeak02([[5, 10, 8, 12, 7]])).toBe(12);
    });

    test('should return the peak element for a multi-row array', () => {
      const multiRowArray = [
        [1, 3, 4, 2, 1],
        [5, 7, 6, 8, 9],
        [9, 10, 11, 12, 11],
        [7, 5, 4, 2, 1]
      ];
      expect(findPeak02(multiRowArray)).toBe(12);
    });

    test('should handle edge case when peak is in the first or last column', () => {
      const arrayWithPeakInFirstColumn = [
        [10, 9, 8, 5],
        [8, 7, 6, 4],
        [6, 5, 4, 3]
      ];
      const arrayWithPeakInLastColumn = [
        [5, 8, 10],
        [4, 6, 9],
        [3, 5, 7]
      ];
      expect(findPeak02(arrayWithPeakInFirstColumn)).toBe(10);
      expect(findPeak02(arrayWithPeakInLastColumn)).toBe(10);
    });

    test('should handle peak in the middle columns', () => {
      const arrayWithPeakInMiddle = [
        [1, 2, 3, 4, 5],
        [5, 4, 3, 2, 1],
        [6, 7, 8, 9, 10]
      ];
      expect(findPeak02(arrayWithPeakInMiddle)).toBe(10);
    });
  });
