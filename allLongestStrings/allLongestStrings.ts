export function allLongestStrings(inputArray: string[]): string[] {
    let longest = inputArray[0];

    return inputArray.reduce((a, str) => {
        if(str.length === longest.length) { 
            a.push(str);
        }
        else if(str.length > longest.length) { 
            a = [str];
            longest = str;
            return a;
        }
        return a;
    }, []);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "adaa", "vcd", "aba"]));
