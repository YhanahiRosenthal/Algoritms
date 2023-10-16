export function unique(input: string): boolean {
    for (let i = 0; i < input.length; i++) {
        if (input.indexOf(input[i], i + 1) !== -1) {
            return false;
        }
    }
    return true;
}