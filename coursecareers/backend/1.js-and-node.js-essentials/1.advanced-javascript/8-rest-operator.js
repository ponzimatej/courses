// Doesnt just work with functions

const algorithm = (...steps) => {
  return (x) => steps.reduce((value, fn) => fn(value), x);
  // value starts at x, we apply each fn to the value.
};

const f1 = (x) => x * 2;
const f2 = (x) => x * x;
const f3 = (x) => x / 2;

const algo = algorithm(f1, f2, f3); // algo is the function from line 4
console.log(algo(5)); // call the function from line 4 with x = 5

// Another example
const functions = [(x) => x * 2, (x) => x * x, (x) => x / 2];
const [first, ...rest] = functions;

console.log("first: ", first.toString());
console.log("rest: ", rest.toString());

// Another example
let data = {
  name: "matej",
  username: "ponzimatej",
  age: 20,
};

const { username, ...userInfo } = data;

console.log(username);
console.log(userInfo);
