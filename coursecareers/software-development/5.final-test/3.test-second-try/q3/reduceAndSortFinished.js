function reduceAndSortByFrequency(objects) {
  var finalObjects = [];

  for (const currentObject of objects) {
    // track if the object is already in finalObjects array and make its value lowercase
    let alreadyIncluded = false;
    currentObject.value = currentObject.value.toLowerCase();

    for (const includedObject of finalObjects) {
      if (currentObject.value === includedObject.value) {
        // if the currentObject is already included in the finalObjects array, add to the count and stop looping through finalObjects
        includedObject.count += currentObject.count;
        alreadyIncluded = true;
      }
    }

    if (alreadyIncluded === false) {
      // if the currentObject is not yet included in the finalObjects array, add it
      finalObjects.push({
        value: currentObject.value,
        count: currentObject.count,
      });
    }
  }

  finalObjects.sort((a, b) => {
    // sort alphabetically
    if (a.value < b.value) return -1;
    if (a.value > b.value) return 1;
    return 0;
  });

  finalObjects.sort((a, b) => b.count - a.count); // sort by count

  return finalObjects;
}

objects = [
  { value: "Apple", count: 1 },
  { value: "banana", count: 2 },
  { value: "apple", count: 2 },
  { value: "Apple", count: 1 },
  { value: "orange", count: 1 },
  { value: "Banana", count: 1 },
  { value: "ORANGE", count: 1 },
  { value: "apple", count: 1 },
  { value: "Banana", count: 1 },
  { value: "BANANA", count: 1 },
  { value: "orange", count: 1 },
];

console.log(reduceAndSortByFrequency(objects));

module.exports = reduceAndSortByFrequency;
