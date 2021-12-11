export function absoluteValuesSumMinimization(a: number[]): number {
  let sum = 8000;
  let sumPrev = 8001;
  let i = 0;

  let results = [];

  while (sumPrev > sum) {
    sumPrev = sum;
    sum = 0;
    for (const number of a) {
      sum += Math.abs(number - i);
    }

    results.push({ num: i, sum: sum });

    i++;
  }
  results.sort((prev, curr) => prev.sum - curr.sum);
  return results[0].num;
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
