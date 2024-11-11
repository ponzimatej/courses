function findUniqueIndexPairs(numbers, targetSum) {
  let finalArr = [];
  numbers.map((x, i) => {
    numbers.map((y, i2) => {
      if (i === i2) return; // if the two numbers are at the same index (the same number), break

      if (x + y === targetSum && finalArr.length === 0) {
        // if finalArr is empty and a pair is found inside the numbers array, push the pair indexes inside the finalArr and return
        finalArr.push([i, i2]);
        return;
      }

      for (idx of finalArr.flat()) {
        // take every idx of the finalArr
        if (idx === i || idx === i2) return; // if number is already used in finalArray, return
      }

      if (x + y === targetSum) finalArr.push([i, i2]); // if the two numbers sum up into targetSum, push them in the finalArr
    });
  });

  console.log(finalArr);
}

const numbers = [0, 0, 0, 0, 1, -1];
const targetSum = 0;
findUniqueIndexPairs(numbers, targetSum);
