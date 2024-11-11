const target = "coursecarers";
const delimeter = "|";
const spacing = 1;

function q4(target, delimeter, spacing) {
  let newString = "";
  let length = target.length;
  let i = 0;

  while (i < length) {
    for (let u = 0; u < spacing; u++) {
      if (target[i] === undefined) return newString;
      newString += target[i];
      i++;
    }
    if (i !== length) newString += delimeter;
  }
  return newString;
}

console.log(q4(target, delimeter, spacing));
