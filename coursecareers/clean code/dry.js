// DONT REPEAT YOURSELF

// example 1

let rad = 5;
let ar = Math.PI * rad * rad;

let rad2 = 10;
let ar2 = Math.PI * rad2 * rad2;

// |
// |
// |
// V

let radius = 5;
let area1 = area(radius);

let radius2 = 10;
let area2 = area(radius2);

function area(num) {
  return Math.PI * num * num;
}

// -----------------------------------
// example 2

document.getElementById("element1").innerText = "Hello, World!";
document.getElementById("element2").innerText = "Hello, World!";
document.getElementById("element3").innerText = "Hello, World!";

// |
// |
// |
// V

function setText(elementId, text) {
  document.getElementById(elementId).innerText = text;
}

setText(element1, "Hello, World!");
setText(element2, "Hello, World!");
setText(element3, "Hello, World!");

// -----------------------------------
// example 3

let array1 = [1, 2, 3];
let sum1 = 0;
for (let i = 0; i < array1.length; i++) {
  sum1 += array1[i];
}

let array2 = [4, 5, 6];
let sum2 = 0;
for (let i = 0; i < array2.length; i++) {
  sum2 += array2[i];
}

// |
// |
// |
// V

function getSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

let arr1 = [1, 2, 3];
let s1 = getSum(arr1);

let arr2 = [4, 5, 6];
let s2 = getSum(arr2);
