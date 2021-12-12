export function almostIncreasingSequence(sequence: number[]): boolean {
    let mistakeNum = 0;
  sequence.reduce((p, c) => {
    mistakeNum += p > c ? 1 : 0;

    return c;
  });
  return mistakeNum < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]))
