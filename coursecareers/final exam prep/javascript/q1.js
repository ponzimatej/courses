function getTwoBiggestNumbers(numbers) {
  max1 = Math.max(...numbers);
  for (idx in numbers) {
    if (numbers[idx] === max1) {
      numbers.splice(idx, 1);
    }
  }
  max2 = Math.max(...numbers);
  return [max1, max2];
}

let arr = [
  100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400,
  1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500,
];
console.log(getTwoBiggestNumbers(arr));
