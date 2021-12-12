export function almostIncreasingSequence(sequence: number[]): boolean {
  let mistakeNum = 0;
  try {
    sequence.reduce((p, c) => {
    mistakeNum += p > c ? 1 : 0;
    if (mistakeNum == 2) throw Error("2 mistakes");
    return c;
  });
  } catch (error) {
    return false;
  }
  
  return mistakeNum < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
