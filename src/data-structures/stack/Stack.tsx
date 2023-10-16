type Stack = any[];

export function createStack(): Stack {
  const stack: Stack = [];

  function push(value: any): void {
    stack.push(value);
  }

  function pop(): any | null {
    if (isEmpty()) {
      return null;
    }
    return stack.pop();
  }

  function peek(): any | null {
    if (isEmpty()) {
      return null;
    }
    return stack[stack.length - 1];
  }

  function isEmpty(): boolean {
    return stack.length === 0;
  }

  function toArray(): any[] {
    return [...stack];
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
    toArray
  };
}

