// option 1
function greet(name) {
  console.log("hello", name);
}
greet("matej");

// option 2 - can not call before initiation
const greet2 = function (name) {
  console.log("2) hello", name);
};
greet2("matej");

// arrow functions
const greet3 = (name) => {
  console.log("3) hello", name);
};
greet3("matej");

// iife - not used anymore
(function () {
  console.log("executed immediately");
})();
