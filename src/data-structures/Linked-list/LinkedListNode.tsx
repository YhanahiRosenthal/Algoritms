export type LinkedListNode = {
    value: any;
    next: LinkedListNode | null;
};

export function createLinkedListNode(value: any, next: LinkedListNode | null = null): LinkedListNode {
    return {
        value,
        next
    };
}

export function nodeToString(node: LinkedListNode, callback?: (value: any) => string): string {
    return callback ? callback(node.value) : `${node.value}`;
}
