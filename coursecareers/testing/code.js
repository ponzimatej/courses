// npm init
// npm install --save-dev jest

function removeEven(numbers) {
  return numbers.filter((number) => number % 2 !== 0);
}

function add(x, y) {
  return x + y;
}

module.exports = {
  add,
  removeEven,
};
