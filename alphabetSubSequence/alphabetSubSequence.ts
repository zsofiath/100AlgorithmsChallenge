export function alphabetSubsequence(s: string): boolean {
    let i = 1;
    while(s.charCodeAt(i-1) < s.charCodeAt(i) && i < s.length) i++;
    return i == s.length
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
