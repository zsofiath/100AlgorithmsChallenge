export function areSimilar(a: number[], b: number[]): boolean {

    if(a.toString() == b.toString()) return true;
    else {
        for (let i = 1; i < a.length; i++) {
            let temparr = [...a];
            let t = temparr[i];
            temparr[i] = temparr[i-1];
            temparr[i-1] = t;
            if(temparr.toString() == b.toString()) return true;
        }
    }
    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
