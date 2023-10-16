import { createHashTable } from '../data-structures/hashTable/HashTable';

describe('HashTable functions', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = createHashTable();
  });

  test('should set and get values correctly', () => {
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');

    expect(hashTable.get('key1')).toBe('value1');
    expect(hashTable.get('key2')).toBe('value2');
    expect(hashTable.get('nonexistentKey')).toBeUndefined();
  });

  test('should update existing values when setting with the same key', () => {
    hashTable.set('key1', 'value1');
    expect(hashTable.get('key1')).toBe('value1');

    hashTable.set('key1', 'updatedValue');
    expect(hashTable.get('key1')).toBe('updatedValue');
  });

  test('should remove values correctly', () => {
    hashTable.set('key1', 'value1');
    expect(hashTable.get('key1')).toBe('value1');

    hashTable.remove('key1');
    expect(hashTable.get('key1')).toBeUndefined();
  });

  test('should get keys and values correctly', () => {
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    hashTable.set('key3', 'value3');

    expect(hashTable.getKeys()).toEqual(['key1', 'key2', 'key3']);
    expect(hashTable.getValues()).toEqual(['value1', 'value2', 'value3']);
  });

  test('should handle collisions correctly', () => {
    const bucketsLength = 1;
    const collisionHashTable = createHashTable(bucketsLength);

    collisionHashTable.set('key1', 'value1');
    collisionHashTable.set('key2', 'value2');

    expect(collisionHashTable.get('key1')).toBe('value1');
    expect(collisionHashTable.get('key2')).toBe('value2');
  });
});
