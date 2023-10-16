import { createLinkedListNode, nodeToString } from '../components/LinkedListNode';

describe('createLinkedListNode', () => {
  test('creates a node with the given value', () => {
    const node = createLinkedListNode(1);
    expect(node.value).toBe(1);
    expect(node.next).toBeNull();
  });

  test('creates a node with the given value and next node', () => {
    const nextNode = createLinkedListNode(2);
    const node = createLinkedListNode(1, nextNode);
    expect(node.value).toBe(1);
    expect(node.next).toBe(nextNode);
  });

  test('converts a node to string using default callback', () => {
    const node = createLinkedListNode(1);
    expect(nodeToString(node)).toBe('1');
  });

  test('converts a node to string using custom callback', () => {
    const node = createLinkedListNode(1);
    const callback = value => `[${value}]`;
    expect(nodeToString(node, callback)).toBe('[1]');
  });
});
