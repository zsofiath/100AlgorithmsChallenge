export function absoluteValuesSumMinimization(a: number[]): number {
  let sum = 8000;
  let sumPrev = 8001;
  let i = 0;

  while (sumPrev > sum) {
    sumPrev = sum;
    sum = 0;
    for (const number of a) {
      sum += Math.abs(number - i);
    }
    i++;
  }
  return i-2;
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
