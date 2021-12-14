export function alphabeticShift(inputString: string): string {
    let start = 'a'.charCodeAt(0);
    let end = 'z'.charCodeAt(0)+1;
    return inputString.split('').map((char, i) => {
        let code = inputString.charCodeAt(i)+1;
        return String.fromCharCode(code > 122 ? code - (end-start) : code);
    }).join('');
}
console.log(alphabeticShift('crazy'));
