let numAsString = "11|50|50|-1|-1|-1|5|21|12|12|7|2|5";

function mathIsFun(numberString) {
  let numbers = numberString.split("|").map((x) => Number(x));
  numbers.sort((a, b) => a - b);
  let max1 = Math.max(...numbers);
  numbers.pop();
  let max2 = Math.max(...numbers);
  return max1 + max2;
}

console.log(mathIsFun(numAsString));
