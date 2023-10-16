export function compressString(str: string) {
    let compressed:string = '';
    let count:number = 1;

    for (let i:number = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            compressed += str[i] + (count > 1 ? count : '1');
            count = 1;
        }
    }

    return compressed.length < str.length ? compressed : str;
}

