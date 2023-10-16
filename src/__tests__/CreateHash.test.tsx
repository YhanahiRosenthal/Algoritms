import { Hash, HashStrong } from '../algoritms/cryptography-polynomial-hash/CreateHash';

describe('Create Hash', () => {

  test('Hash function should create correct hash', () => {
    expect(Hash('hello')).toBe(105836878);
    expect(Hash('world')).toBe(95684298);
    expect(Hash('hello', 31)).toBe(105836878);
    expect(Hash('HELLO')).not.toBe(Hash('hello'));
    expect(Hash('')).toBe(0);
  });

  test('HashStrong function should create correct hash for modified input', () => {
    const hashHello = Hash('hello');
    expect(HashStrong(hashHello, 'hello', 'world')).toBe(3281049548);
    expect(HashStrong(hashHello, 'hello', 'HELLO')).not.toBe(hashHello);
    expect(HashStrong(hashHello, 'hello', 'helloworld')).not.toBe(hashHello);
    expect(HashStrong(0, '', 'test')).toBe(0);
  });
})