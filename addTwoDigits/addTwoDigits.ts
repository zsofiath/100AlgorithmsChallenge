export function addTwoDigits(n: any): number {  
    return n.toString().split('').reduce((a, c) => {        
        return +a + +c; // !!! String always wins when auto converting
    }, 0)
}

 console.log(addTwoDigits(29));