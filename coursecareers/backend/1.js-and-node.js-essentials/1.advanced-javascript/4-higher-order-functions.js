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
