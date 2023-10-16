import { createStack } from '../data-structures/stack/Stack';

describe('createStack', () => {
  test('push adds elements to the stack', () => {
    const stack = createStack();
    stack.push(1);
    stack.push(2);
    expect(stack.toArray()).toEqual([1, 2]);
  });

  test('pop removes elements from the stack', () => {
    const stack = createStack();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2);
    expect(stack.toArray()).toEqual([1]);
  });

  test('peek returns the top element of the stack', () => {
    const stack = createStack();
    stack.push(1);
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  test('isEmpty returns true for an empty stack', () => {
    const stack = createStack();
    expect(stack.isEmpty()).toBe(true);
  });

  test('isEmpty returns false for a non-empty stack', () => {
    const stack = createStack();
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
  });

  test('toArray returns an array representation of the stack', () => {
    const stack = createStack();
    stack.push(1);
    stack.push(2);
    expect(stack.toArray()).toEqual([1, 2]);
  });
});
