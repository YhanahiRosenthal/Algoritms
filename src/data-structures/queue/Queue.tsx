export default function createQueue() {
    const list = [];

    function enqueue(item) {
      list.push(item);
    }

    function dequeue() {
      return list.shift();
    }

    function isEmpty() {
      return list.length === 0;
    }

    function getLength() {
      return list.length;
    }

    function toString() {
      return list.toString();
    }

    return {
      enqueue: enqueue,
      dequeue: dequeue,
      isEmpty: isEmpty,
      getLength: getLength,
      toString: toString
    };
  }