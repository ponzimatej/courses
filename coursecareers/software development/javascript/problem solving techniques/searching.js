// Binary search
const arr = [1, 2, 3, 4, 8, 9, 11, 14, 16, 19, 21, 22, 23, 25, 27, 29, 30, 32];
let target = 30;

function binarySearch(arr, target, start = 0, end = arr.length - 1) {
  console.log(arr.slice(start, end + 1));
  if (end - start === 1) return false;
  let current = start + Math.floor((end - start) / 2);

  if (target === arr[current]) return true;
  if (target === arr[current + 1]) return true;
  if (target === arr[current - 1]) return true;

  if (target < arr[current]) return binarySearch(arr, target, start, current);
  if (target > arr[current]) return binarySearch(arr, target, current, end);
}

// maze

const maze = [
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", " ", " "],
  ["#", "#", "#", "#", " ", "#", " ", "#", "#", "#"],
  [" ", " ", " ", " ", " ", " ", " ", "#", " ", " "],
  [" ", "#", "#", "#", "#", "#", "#", "#", "#", " "],
  [" ", " ", " ", " ", " ", " ", " ", " ", " ", "#"],
  ["#", "#", "#", "#", " ", "#", "#", "#", " ", " "],
  [" ", " ", " ", " ", " ", "#", " ", " ", "#", "#"],
  [" ", "#", "#", "#", " ", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", "#", "#", "#", "#", "X"],
];

function getNeighbors(arr, x, y) {
  const neighbors = [];

  if (x >= 1 && arr[y][x - 1] !== "#") neighbors.push([y, x - 1]); // left
  if (x < arr[y].length - 1 && arr[y][x + 1] !== "#") {
    // right
    neighbors.push([y, x + 1]);
  }
  if (y >= 1 && arr[y - 1][x] !== "#") neighbors.push([y - 1, x]);
  if (y < arr[x].length - 1 && arr[y + 1][x] !== "#")
    neighbors.push([y + 1, x]);

  return neighbors;
}

function getStringPos(pos) {
  return pos.join(",");
}

function dfs(array) {
  const visited = new Set();
  const stack = [[0, 0]]; // y, x

  while (stack.length > 0) {
    const pos = stack.pop();
    const [y, x] = pos;

    if (array[y][x] === "X") break;

    strPos = getStringPos(pos);
    visited.add(strPos);

    const neighbors = getNeighbors(array, x, y);
    for (const neighbor of neighbors) {
      const strNeighbor = getStringPos(neighbor);
      if (visited.has(strNeighbor)) continue;
      stack.push(neighbor);
    }
  }

  return visited;
}

const path = dfs(maze);
console.log(path);

for (const pos of path) {
  const [y, x] = pos.split(",");
  maze[y][x] = "X";
}

console.log(maze);
