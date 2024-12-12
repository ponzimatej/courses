function convertToFarnheit(celsius) {
  farnheit = (celsius * 9) / 5 + 32;
  return Math.round(farnheit * 10) / 10;
}

farnheit = convertToFarnheit(-40);
console.log(farnheit);
