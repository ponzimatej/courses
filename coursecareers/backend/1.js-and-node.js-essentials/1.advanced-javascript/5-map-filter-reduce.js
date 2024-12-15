// map - apply a function to each element of an array
let data = [1, 2, 3, 4, 5];
data = data.map((x) => x * x);
console.log(data);
// ----------

// filter - returns true or false,
// if its true, keep the element, if false, remove it
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let squares = array.filter((x) => Math.sqrt(x) % 1 === 0);
console.log(squares);
// ----------

// reduce
let arr = [5, 10, 15, 20];
const sum = arr.reduce((prev, current) => {
  prev += current;
  return prev;
});
console.log(sum);
// ----------

// apply a 10% coupon
// remove any items over $20
// sum up cost and calculate average
const products = [
  { name: "laptop charger", price: 25 },
  { name: "keyboard", price: 22 },
  { name: "mouse", price: 18 },
  { name: "montor", price: 30 },
  { name: "cable", price: 5 },
];

const discounted = products.map((product) => {
  return { name: product.name, price: product.price * 0.9 };
});

const cheap = discounted.filter((product) => product.price <= 20);

const total = cheap.reduce((sum, current) => {
  sum += current.price;
  return sum;
}, 0);

console.log("average:", total / cheap.length);
