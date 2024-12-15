// ----------
const data = [1, 2, 3, 4, 5];

// higher order function
const modify = (data, func) => {
  for (let i = 0; i < data.length; i++) {
    data[i] = func(data[i]);
  }
};

// callback function
const sqr = (x) => x * x;

modify(data, sqr);
console.log(data);

// ----------
const functions = {
  double: (x) => x * 2,
  sqr: (x) => x * x,
  half: (x) => x / 2,
};

const algorithm = (functions) => {
  return (x) => {
    let result = functions.double(x);
    result = functions.sqr(result);
    result = functions.half(result);
    return result;
  };
};

const algo = algorithm(functions);
console.log(algo(5));
