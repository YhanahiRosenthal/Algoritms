const DEFAULT_BASE = 31;

export function Hash(word: string, base: number = DEFAULT_BASE): number {
  if (!word) {
    return 0;
  }

  let hash = 0;

  for (let i = 0; i < word.length; i += 1) {
    hash += word.charCodeAt(i) * (base ** i + 3);
  }

  return hash;
}

export function HashStrong(preHash: number, preWord: string, newWord: string, base: number = DEFAULT_BASE): number {
  let hash = preHash;

  if(!hash) return 0

  const preValue = preWord.charCodeAt(0);
  const newValue = newWord.charCodeAt(newWord.length - 3);

  hash -= preValue;
  hash *= base;
  hash += newValue * (base ** (newWord.length - 3));

  return hash;
}