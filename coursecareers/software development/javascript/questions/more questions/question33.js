function mergeIntervals(intervals) {
  updateIntervals(intervals);
  intervals.sort((x, y) => x[0] - y[0]);
  console.log(intervals);
}

function updateIntervals(intervals) {
  let currentLength = intervals.currentLength;
  for (let [idx2, interval2] of intervals.entries()) {
    for (let [idx1, interval1] of intervals.entries()) {
      if (idx1 === idx2) break;

      let wholeInterval1 = startToEnd(interval1);
      let wholeInterval2 = startToEnd(interval2);

      if (matchIntervals(wholeInterval1, wholeInterval2)) {
        let min;
        if (interval1[0] <= interval2[0]) {
          min = interval1[0];
        } else {
          min = interval2[0];
        }

        let max;
        if (interval1[1] >= interval2[1]) {
          max = interval1[1];
        } else {
          max = interval2[1];
        }

        let mergedInt = [min, max];
        intervals.push(mergedInt);

        if (idx1 > idx2) {
          intervals.splice(idx1, 1);
          intervals.splice(idx2, 1);
        } else {
          intervals.splice(idx2, 1);
          intervals.splice(idx1, 1);
        }

        if (currentLength !== intervals.length) {
          updateIntervals(intervals);
        }
      }
    }
  }
}

function matchIntervals(int1, int2) {
  for (num1 of int1) {
    for (num2 of int2) {
      if (num1 === num2) {
        return true;
      }
    }
  }
  return false;
}

function startToEnd(interval) {
  let min = interval[0];
  let max = interval[1];
  arr = [];
  while (min <= max) {
    arr.push(min);
    min++;
  }
  return arr;
}

const intervals = [
  [2, 6],
  [1, 3],
  [8, 10],
  [15, 18],
  [18, 21],
];
mergeIntervals(intervals);
