export function documentDistance(a: string, b: string): number {
    const wordA = getWords(a);
    const wordB = getWords(b);

    const wordest = calculateWords(wordA, wordB);
    const longA = calculateLong(wordA);
    const longB = calculateLong(wordB);

    return wordest / (longA * longB);
  }

  function getWords(str: string): [string, number][] {
    const words = str.toLowerCase().split(' ');
    const wordCount = {};

    for (const word of words) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }

    return Object.entries(wordCount);
  }

  function calculateWords(vector1: [string, number][], vector2: [string, number][]): number {
    const commonWords = new Set(vector1.map(([word]) => word));
    const wordest = vector1.reduce((sum, [word, frequency]) => {
      if (commonWords.has(word) && vector2.find(([w]) => w === word)) {
        const otherFrequency = vector2.find(([w]) => w === word)[1];
        return sum + frequency * otherFrequency;
      }
      return sum;
    }, 0);

    return wordest;
  }

  function calculateLong(vector: [string, number][]): number {
    const magnitude = Math.sqrt(vector.reduce((sum, [, frequency]) => sum + frequency * frequency, 0));
    return magnitude;
  }
