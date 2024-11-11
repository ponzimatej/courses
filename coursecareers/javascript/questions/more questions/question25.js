function customSort(arr) {
  arr.sort((a, b) => a - b);
  const finalArr = [];
  const map = new Map();

  for (number of arr) {
    if (map.get(number)) {
      map.set(number, map.get(number) + 1);
    } else {
      map.set(number, 1);
    }
  }

  while (map.size > 0) {
    let max = ["", 0];
    for (const [key, value] of map) {
      if (value > max[1]) {
        max = [key, value];
      }
    }

    for (let i = 0; i < max[1]; i++) {
      finalArr.push(max[0]);
    }
    map.delete(max[0]);
  }

  console.log(finalArr);
}

customSort([40]);
