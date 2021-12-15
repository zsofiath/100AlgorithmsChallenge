export function alternatingSums(a: number[]): number[] {
let even = 0;
let odd = 0;

a.forEach((num, i) => {
    if(i % 2 == 1) odd+=num;
    else even+=num;
});

return [
    even,
    odd
]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))