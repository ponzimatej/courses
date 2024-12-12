function harderFizzBuzz(n) {
  let resultArrOfStrings = [];

  for (let i = 1; i <= n; i++) {
    let numberString = i.toString(); //convert my number to string so I can check what it contains
    if (
      // if number is divisible by 15 or contains both 3 and 5
      i % 15 === 0 ||
      (numberString.includes("3") && numberString.includes("5"))
    ) {
      resultArrOfStrings.push("FizzBuzz");
      continue;
    }

    if (i % 3 === 0 || numberString.includes("3")) {
      // if number is divisible by or contains 3
      resultArrOfStrings.push("Fizz");
      continue;
    }

    if (i % 5 === 0 || numberString.includes("5")) {
      // ifnumber is divisible by or contains 5
      resultArrOfStrings.push("Buzz");
      continue;
    }

    resultArrOfStrings.push(i.toString());
  }

  return resultArrOfStrings;
}

console.log(harderFizzBuzz(46));

module.exports = harderFizzBuzz;
