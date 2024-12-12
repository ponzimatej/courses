function findLargestAgeDifference(agePairs) {
  let max = 0;
  for (pairs of agePairs) {
    difference = Math.abs(pairs[0] - pairs[1]);
    if (difference > max) max = difference;
  }
  console.log(max);
}

findLargestAgeDifference([
  [10, 7],
  [23, 10],
  [12, 8],
  [23, 30],
]);
