import { LinkedListNode } from '../components/LinkedListNode';

type LinkedList = {
    head: LinkedListNode | null;
    tail: LinkedListNode | null;
    comparator: (a: any, b: any) => number;
};

export function createNode(value: any): LinkedListNode {
    return { value, next: null };
}

export function createLinkedList(comparator: (a: any, b: any) => number = defaultComparator): LinkedList {
    return {
        head: null,
        tail: null,
        comparator
    };
}

export function append(list: LinkedList, value: any): LinkedList {
    const newNode = createNode(value);

    if (!list.head) {
        list.head = newNode;
        list.tail = newNode;
    } else {
        if (!list.head.next) {
            list.head.next = newNode;
        }

        if (list.tail) {
            list.tail.next = newNode;
        }

        list.tail = newNode;
    }

    return list;
}

export function prepend(list: LinkedList, value: any): LinkedList {
    const newNode = createNode(value);

    if (!list.head) {
        list.head = newNode;
        list.tail = newNode;
    } else {
        newNode.next = list.head;
        list.head = newNode;
    }

    return list;
}

export function deleteNode(list: LinkedList, value: any): LinkedListNode | null {
    if (!list.head) {
        return null;
    }

    if (list.comparator(list.head.value, value) === 0) {
        const deleted = list.head;
        list.head = list.head.next;
        if (!list.head) {
            list.tail = null;
        }
        return deleted;
    }

    function deleteNodeRecursive(node: LinkedListNode | null): LinkedListNode | null {
        if (!node) {
            return null;
        }

        if (node.next && list.comparator(node.next.value, value) === 0) {
            const deleted = node.next;
            node.next = node.next.next;
            if (!node.next) {
                list.tail = node;
            }
            return deleted;
        }

        return deleteNodeRecursive(node.next);
    }

    return deleteNodeRecursive(list.head);
}

export function deleteTail(list: LinkedList): LinkedListNode | null {
    if (!list.head) {
        return null;
    }

    if (!list.head.next) {
        const deleted = list.head;
        list.head = null;
        list.tail = null;
        return deleted;
    }

    function deleteTailRecursive(node: LinkedListNode): LinkedListNode | null {
        if (node.next && !node.next.next) {
            const deleted = node.next;
            node.next = null;
            list.tail = node;
            return deleted;
        }

        return deleteTailRecursive(node.next!);
    }

    return deleteTailRecursive(list.head);
}

export function deleteHead(list: LinkedList): LinkedListNode | null {
    if (!list.head) {
        return null;
    }

    const deleted = list.head;
    if (list.head.next) {
        list.head = list.head.next;
    } else {
        list.head = null;
        list.tail = null;
    }

    return deleted;
}

export function findNode(list: LinkedList, value: any): LinkedListNode | null {
    function findNodeRecursive(node: LinkedListNode | null): LinkedListNode | null {
        if (!node) {
            return null;
        }

        if (list.comparator(node.value, value) === 0) {
            return node;
        }

        return findNodeRecursive(node.next);
    }

    return findNodeRecursive(list.head);
}

export function reverse(list: LinkedList): LinkedList {
    let prev = null;
    let current = list.head;
    let next = null;

    list.tail = list.head;

    while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    list.head = prev;
    return list;
}

export function fromArray(items: any[], comparator: (a: any, b: any) => number = defaultComparator): LinkedList {
    const list = createLinkedList(comparator);

    function fromArrayRecursive(index: number): void {
        if (index >= items.length) {
            return;
        }

        append(list, items[index]);
        fromArrayRecursive(index + 1);
    }

    fromArrayRecursive(0);
    return list;
}

export function toArray(list: LinkedList): LinkedListNode[] {
    const array: LinkedListNode[] = [];

    function toArrayRecursive(node: LinkedListNode | null): void {
        if (!node) {
            return;
        }

        array.push(node);
        toArrayRecursive(node.next);
    }

    toArrayRecursive(list.head);
    return array;
}

export function toString(list: LinkedList, callback?: (value: any) => string): string {
    const array = toArray(list);
    return array.map(node => nodeToString(node, callback)).toString();
}

export function nodeToString(node: LinkedListNode, callback?: (value: any) => string): string {
    return callback ? callback(node.value) : `${node.value}`;
}

export function defaultComparator(a: any, b: any): number {
    if (a === b) {
        return 0;
    }

    return a > b ? 1 : -1;
}
