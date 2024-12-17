function navigateMaze(maze, instructions) {
  let position = [0, 0]; // [up/down, left/right]

  for (const instruction of instructions) {
    // go through the instructions

    switch (instruction) {
      // change position according to the current instruction
      case "up":
        position[0]--;
        break;
      case "down":
        position[0]++;
        break;
      case "left":
        position[1]--;
        break;
      case "right":
        position[1]++;
        break;
      default:
        // if the instruction doesn't match "up", "down", "left" or "right", return false
        console.log("Instruction doesn't exist.");
        return false;
    }

    // check the current position, if we hit a wall or got out of the maze, return false
    if (checkIfOk(maze, position) === false) {
      return false;
    }
  }

  // check the final position, if the final position is "9", return true
  if (checkIfOk(maze, position) === true) {
    console.log("You win.");
    return true;
  }

  // if the final position is not "9", return false
  console.log("You didn't reach the end.");
  return false;
}

function checkIfOk(maze, position) {
  if (position[0] < 0 || position[0] >= maze.length) {
    // if the vertical position is less than 0 or more than the maze length, return false
    console.log("You got out of the maze.");
    return false;
  }

  let numberInPosition = maze[position[0]][position[1]]; // get the number in the current position

  if (numberInPosition === undefined) {
    // if the number is undefined, we are out of the maze, return false
    console.log("You got out of the maze.");
    return false;
  }

  if (numberInPosition === 1) {
    // if the number is "1", we hit a wall, return false
    console.log("You hit a wall.");
    return false;
  }

  if (numberInPosition === 9) return true; // if the number is "9", we hit the finish, return true
}

maze = [
  [0, 1, 0, 0],
  [0, 0, 0, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 9],
];

instructions = ["down", "right", "right", "down", "down", "right", "left"];

console.log(navigateMaze(maze, instructions));

module.exports = navigateMaze;
