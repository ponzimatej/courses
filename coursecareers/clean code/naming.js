// if you cant tell what the variable is storing based of its name, make the name clearer
// if you cant tell what the function is doings based of its name, make the name clearer

let d = new Date();
let y = d.getFullYear();
let m = d.getMonth;

// |
// |
// |
// V

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let curentMonth = currentDate.getMonth();

// you should name the parameters in a way that everyone understands what they should pass in. If you just say X,
// nobody know whether to pass in a string or an int

function calculateSumOfSquares(number1, number2) {
  return number1 * number1 + number2 * number2;
}
