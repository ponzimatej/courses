function harderFizzBuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    let intString = i.toString(); //convert my number to string so I can check what it contains

    if (
      // if number is divisible by 15 or contains both 3 and 5
      i % 15 === 0 ||
      (intString.includes("3") && intString.includes("5"))
    ) {
      result.push("FizzBuzz");
      continue;
    }

    if (i % 3 === 0 || intString.includes("3")) {
      // if number is divisible by or contains 3
      result.push("Fizz");
      continue;
    }

    if (i % 5 === 0 || intString.includes("5")) {
      // ifnumber is divisible by or contains 5
      result.push("Buzz");
      continue;
    }

    result.push(i.toString());
  }

  return result;
}

console.log(harderFizzBuzz(46));

module.exports = harderFizzBuzz;
