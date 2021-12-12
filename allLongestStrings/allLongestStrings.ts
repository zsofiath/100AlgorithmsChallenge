export function allLongestStrings(inputArray: string[]): string[] {
    let strings = [inputArray[0]];
    let longest = strings[0];
    for (const str of inputArray.splice(1)) {
        if(str.length === longest.length) { 
            strings.push(str);
        }
        else if(str.length > longest.length) { 
            strings = [str];
            longest = str;
        }
    }

    return strings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "adaa", "vcd", "aba"]));
