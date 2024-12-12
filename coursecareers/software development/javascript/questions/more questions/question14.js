function rotateArray(arr, k) {
  if (arr.length === 0) {
    console.log(arr);
    return;
  }
  while (k > 0) {
    arr.unshift(arr.pop());
    k--;
  }
  console.log(arr);
}

rotateArray([1, 2, 3, 4, 5, 6], 1);
