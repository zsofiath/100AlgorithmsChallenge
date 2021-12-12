export function addBorder(picture: string[]): string[] {
  let arr = [];
  let border ='*'.repeat(picture[0].length+2);

  for (let i = 0; i < picture.length; i++) {
      const element = picture[i];
      arr.push(`*${element}*`)
  }

  arr.unshift(border);
  arr.push(border);

  return arr;
}

console.log(addBorder(["abc", "ded"]));
