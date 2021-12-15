export function alternatingSums(a: number[]): number[] {
    
return a.reduce((a, c, i) => {
    if(i % 2 == 1) a[1]+=c;
    else a[0]+=c;
    return a;
},[0,0]);
}

console.log(alternatingSums([50, 60, 60, 45, 70]))