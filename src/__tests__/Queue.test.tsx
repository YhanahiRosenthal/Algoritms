import createQueue from '../data-structures/queue/Queue';

describe('Queue Operations', () => {
  let queue: { enqueue: any; dequeue: any; isEmpty: any; getLength: any; toString: any; };

  beforeEach(() => {
    queue = createQueue();
  });

  test('enqueue and dequeue items', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
  });

  test('check if the queue is empty', () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(1);
    expect(queue.isEmpty()).toBe(false);
  });

  test('get the length of the queue', () => {
    expect(queue.getLength()).toBe(0);
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.getLength()).toBe(2);
  });

  test('convert the queue to a string', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toString()).toBe('1,2,3');
  });
});
