function getNumberOfStringsWithLength(stringsArr, lengthsArr) {
  let count = 0;
  stringsArr.map((string) => {
    for (length of lengthsArr) {
      if (string.length == length) count++;
    }
  });
  return count;
}

let strings = ["longer", "words", "like", "hippopotamus", "and", "crocodile"];
let numbers = [4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(getNumberOfStringsWithLength(strings, numbers));
