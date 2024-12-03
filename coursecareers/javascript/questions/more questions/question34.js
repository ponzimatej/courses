function findIslands(map) {
  let islands = 0;
  let islandsArr = []; //this is where all the different islands larger than one piece will be stored
  for (let [row, arr] of map.entries()) {
    for (let [column, num] of arr.entries()) {
      if (num !== 1) continue; // continue if its not a 0
      let position = `${row}|${column}`;
      map[row][column] = -1; // update the current place to -1 (visited)

      let [north, south, west, east] = getAround(map, position);
      if (north === 0 && south === 0 && west === 0 && east === 0) {
        //if theres water everywhere around the land, add it to islands
        islands++;
      } else if (north !== -1 && south !== -1 && west !== -1 && east !== -1) {
        // if theres land anyehere around the land, find all of it
        islandsArr.push(findFullIsland(map, position));
      }
    }
  }
  islands += islandsArr.length;
  console.log(islands);
}

function findFullIsland(map, position) {
  let parts = [position]; // this is where all the positions of the island will be stored
  let newParts = [];
  let i = true;

  let arr = addToParts(map, parts).split(" ");
  newParts = [];
  arr.map((x) => newParts.push(x));
  parts.push(...newParts);

  while (i === true) {
    arr = addToParts(map, newParts).split(" ");
    newParts = [];
    arr.map((x) => {
      if (x === "") {
        i = false;
      } else {
        newParts.push(x);
      }
    });
    parts.push(...newParts);
  }

  //console.log(parts);
  return parts;
}

function addToParts(map, includedParts) {
  //console.log(`add to parts for ${includedParts}`);
  let parts = "";
  for (let position of includedParts) {
    let xy = position.split("|");
    let row = Number(xy[0]);
    let column = Number(xy[1]);
    let around = getAround(map, position);
    around.map((x, idx) => {
      if (x === 1) {
        switch (idx) {
          case 0:
            //console.log(`for ${position} adding ${row - 1}|${column}`);
            parts += `${row - 1}|${column}`;
            parts += " ";
            map[row - 1][column] = -1;
            break;

          case 1:
            //console.log(`for ${position} adding ${row + 1}|${column}`);
            parts += `${row + 1}|${column}`;
            parts += " ";
            map[row + 1][column] = -1;
            break;

          case 2:
            //console.log(`for ${position} adding ${row}|${column - 1}`);
            parts += `${row}|${column - 1}`;
            parts += " ";
            map[row][column - 1] = -1;
            break;

          case 3:
            //console.log(`for ${position} adding ${row}|${column + 1}`);
            parts += `${row}|${column + 1}`;
            parts += " ";
            map[row][column + 1] = -1;
            break;
        }
      }
    });
  }
  //console.log(`new parts: ${parts.trimEnd().toString()}`);
  return parts.trimEnd().toString();
}

function getAround(map, position) {
  let xy = position.split("|");
  let row = Number(xy[0]);
  let column = Number(xy[1]);
  let north = 0;
  if (map[row - 1]) north = map[row - 1][column];

  let south = 0;
  if (map[row + 1]) south = map[row + 1][column];

  let west = 0;
  if (map[row][column - 1]) west = map[row][column - 1];

  let east = 0;
  if (map[row][column + 1]) east = map[row][column + 1];

  return [north, south, west, east];
}

const map = [
  [1, 0, 1, 1, 0],
  [1, 1, 1, 0, 1],
  [1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1],
];
findIslands(map);
