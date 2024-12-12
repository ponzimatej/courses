function mergeSortedArrays(arr1, arr2) {
  const sortedArr = [];

  while (arr1.length + arr2.length > 0) {
    let x = arr1.shift();
    let y = arr2.shift();
    if (x === undefined && y === undefined) break;
    if (x <= y || y == undefined) {
      sortedArr.push(x);
      arr2.unshift(y);
    }
    if (y < x || x == undefined) {
      sortedArr.push(y);
      arr1.unshift(x);
    }
  }
  console.log(sortedArr);
}

mergeSortedArrays(
  [-10, 1, 2, 3, 4, 50, 60, 70, 100, 110],
  [-5, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115, 125]
);
