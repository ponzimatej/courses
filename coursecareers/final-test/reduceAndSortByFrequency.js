function reduceAndSortByFrequency(objects) {
  var finalObjects = [];

  for (const currentObject of objects) {
    // loop through all of the objects
    let included = false; // status - checks if the currentObject is already included in the finalObjects array

    currentObject.value = currentObject.value.toLowerCase(); // make the currentObject value lowercase

    for (const finalObject of finalObjects) {
      // check all the objects that are already included in the finalArray
      if (currentObject.value === finalObject.value) {
        // if the currentObject is already included in the finalObjects array, add to the count
        // and stop looping through finalObjects
        finalObject.count += currentObject.count;
        included = true; // change the status so we know the currentObject is already included
      }
    }

    if (included === false) {
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
  { value: "orange", count: 3 },
  { value: "banana", count: 2 },
  { value: "Apple", count: 1 },
  { value: "apple", count: 2 },
  { value: "Apple", count: 1 },
  { value: "orange", count: 1 },
  { value: "ORANGE", count: 1 },
  { value: "apple", count: 1 },
];

console.log(reduceAndSortByFrequency(objects));

module.exports = reduceAndSortByFrequency;
