export function urlify(input: string): string {
    const words = input.split(" ");
    const modifiedString = words.join("%20");
    return modifiedString;
}