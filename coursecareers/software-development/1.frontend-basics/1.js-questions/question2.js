const arr = [];
arr.push(Number(prompt("enter first number")));
arr.push(Number(prompt("enter second number")));
arr.push(Number(prompt("enter third number")));

function max(array) {
  let x = 0;
  for (num of array) {
    if (num > x) x = num;
  }
  return x;
}

alert(max(arr));
