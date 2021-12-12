export function adjacentElementsProduct(inputArray: number[]): number {
let max = -Infinity;
inputArray.sort((p, n) => {
    if(p*n > max) max = p*n;
    return 1;
})
return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-1,10,-1,2]));
