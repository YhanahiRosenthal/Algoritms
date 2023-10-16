import {
  createNode,
  createLinkedList,
  append,
  prepend,
  deleteNode,
  deleteTail,
  deleteHead,
  findNode,
  reverse,
  fromArray,
  toArray,
  toString,
} from '../data-structures/Linked-list/LinkedList';

describe('LinkedList functions', () => {
  let list: { head: any; tail: any; comparator: any; };

  beforeEach(() => {
      list = createLinkedList();
  });

  test('createNode creates a node with the given value', () => {
      const node = createNode(5);
      expect(node.value).toBe(5);
      expect(node.next).toBeNull();
  });

  test('createLinkedList creates an empty linked list with the default comparator', () => {
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
      expect(list.comparator).toEqual(expect.any(Function));
  });

  test('append adds a new node to the end of the linked list', () => {
      append(list, 1);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(1);

      append(list, 2);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(2);
  });

  test('prepend adds a new node to the beginning of the linked list', () => {
      prepend(list, 1);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(1);

      prepend(list, 2);
      expect(list.head.value).toBe(2);
      expect(list.tail.value).toBe(1);
  });

  test('deleteNode removes a node with the given value from the linked list', () => {
      append(list, 1);
      append(list, 2);
      append(list, 3);
      deleteNode(list, 2);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(3);
      expect(list.head.next.value).toBe(3);
  });

  test('deleteTail removes the last node from the linked list', () => {
      append(list, 1);
      append(list, 2);
      append(list, 3);
      deleteTail(list);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(2);
      expect(list.head.next.value).toBe(2);
      expect(list.tail.next).toBeNull();
  });

  test('deleteHead removes the first node from the linked list', () => {
      append(list, 1);
      append(list, 2);
      append(list, 3);
      deleteHead(list);
      expect(list.head.value).toBe(2);
      expect(list.tail.value).toBe(3);
      expect(list.head.next.value).toBe(3);
  });

  test('findNode returns the node with the given value', () => {
      append(list, 1);
      append(list, 2);
      append(list, 3);
      const node = findNode(list, 2);
      expect(node.value).toBe(2);
  });

  test('reverse reverses the linked list', () => {
      append(list, 1);
      append(list, 2);
      append(list, 3);
      reverse(list);
      expect(list.head.value).toBe(3);
      expect(list.tail.value).toBe(1);
      expect(list.head.next.value).toBe(2);
  });

  test('fromArray creates a linked list from an array', () => {
      const array = [1, 2, 3];
      list = fromArray(array);
      expect(list.head.value).toBe(1);
      expect(list.tail.value).toBe(3);
      expect(list.head.next.value).toBe(2);
  });

  test('toArray converts the linked list to an array', () => {
    const list = createLinkedList();
    append(list, 1);
    append(list, 2);
    append(list, 3);

    reverse(list);

    const expectedArray = [3, 2, 1];
    const array = toArray(list).map(node => node.value);

    expect(array).toEqual(expectedArray);
});


  test('toString converts the linked list to a string', () => {
      append(list, 1);
      append(list, 2);
      append(list, 3);
      const str = toString(list);
      expect(str).toBe('1,2,3');
  });
});
