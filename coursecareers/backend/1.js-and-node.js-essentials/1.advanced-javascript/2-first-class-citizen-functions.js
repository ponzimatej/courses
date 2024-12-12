// array of functions
const functions = [(x) => x * 2, (x) => x * x, (x) => x / 2];
console.log(functions[0](5), functions[1](3));

// object of functions
const functionsObj = {
  double: (x) => x * 2,
  square: (x) => x * x,
  half: (x) => x / 2,
};
console.log(functionsObj.double(3));