export function permutations(a: string, b: string): boolean {
    return a.split('').sort().join('') === b.split('').sort().join('');
}