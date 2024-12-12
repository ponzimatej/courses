function navigateMaze(maze, instructions) {
  let position = [0, 0]; // vertical, horizontal

  for (const instruction of instructions) {
    // take each instruction
    switch (instruction) {
      // change position according to the instruction
      case "up":
        // if "up", substract 1 from the vertical position
        position[0]--;
        break;
      case "down":
        // if "down", add 1 to the vertical position
        position[0]++;
        break;
      case "left":
        // if "left", substract 1 from the horizontal position
        position[1]--;
        break;
      case "right":
        // if "right", add 1 to the horizontal position
        position[1]++;
        break;
      default:
        // if the instruction doesn't match "up", "down", "left" or "right", return false
        console.log("wrong instruction");
        return false;
    }
    if (checkIfOk(maze, position) === false) {
      // call the checkIfOk function for the current position
      // if we hit a wall or got out of the maze, return false
      return false;
    }
  }

  if (checkIfOk(maze, position) === true) {
    // call the checkIfOk function for the final position
    // if the final position is "9", return true
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

  let numberInPosition = maze[position[0]][position[1]]; // get the number in the position (0, 1 or 9)

  if (numberInPosition === undefined) {
    // if the number is undefined (checking horizontal), return false
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

instructions = ["down", "right", "right", "down", "down", "right"];

console.log(navigateMaze(maze, instructions));

module.exports = navigateMaze;
