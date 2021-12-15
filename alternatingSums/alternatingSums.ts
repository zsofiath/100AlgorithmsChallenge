export function alternatingSums(a: number[]): number[] {
let even = [];
let odd = [];

a.forEach((num, i) => {
    if(i % 2 == 1) odd.push(num);
    else even.push(num);
});

return [
    even.reduce((a,c)=>a+c, 0),
    odd.reduce((a,c)=>a+c, 0)
]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))