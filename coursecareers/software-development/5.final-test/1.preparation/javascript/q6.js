function processText(text, operations, ranges) {
  ranges.sort((a, b) => a[0] - b[0]);

  let partsOfString = [];
  let start = 0;

  for (const idx in ranges) {
    let currentRange = ranges[idx];

    partsOfString.push(text.slice(start, currentRange[0])); // Add part before edit
    partsOfString.push(text.slice(currentRange[0], currentRange[1] + 1)); // Add part to edit

    if (idx == ranges.length - 1) {
      partsOfString.push(text.slice(currentRange[1] + 1, text.length));
    }

    start = currentRange[1] + 1;
  }

  for (const idx in partsOfString) {
    if (idx % 2 !== 0) {
      for (const operation of operations) {
        partsOfString[idx] = operation(partsOfString[idx]);
      }
    }
  }
  return partsOfString.join("");
}

let text = "JavaScript is awesome!";
let operations = [
  function (text) {
    return text.split(" ").join("");
  }, // remove all spaces
  function (text) {
    return (
      text.slice(0, text.length / 2) + text.slice(text.length / 2).toUpperCase()
    );
  }, // make the second half of the text uppercase
];
let ranges = [
  [0, 9],
  [14, 21],
];

console.log(processText(text, operations, ranges));
