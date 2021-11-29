export function star(header = "hi", numStars = 10) {
  let str = "";

  for (let i = 0; i < numStars; i++) {
    str += "*";
  }
  return `${str}
${header}
${str}`;
}
