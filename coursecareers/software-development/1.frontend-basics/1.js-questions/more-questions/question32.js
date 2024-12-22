function canTraverseMaze(maze, directions) {
  let position = findStart(maze); // [(up, down), (left, right)]
  let currentLine = maze[position[0] - 1];
  //update(position, currentLine, "start");

  for (const direction of directions) {
    switch (direction) {
      case "N":
        if (position[0] > 1) {
          position[0] -= 1;
          currentLine = maze[position[0] - 1];
          //update(position, currentLine, "North");
        } else {
          end("North");
          return false;
        }
        break;

      case "S":
        if (position[0] < maze.length) {
          position[0] += 1;
          currentLine = maze[position[0] - 1];
          //update(position, currentLine, "South");
        } else {
          end("South");
          return false;
        }
        break;

      case "W":
        if (position[1] > 1) {
          position[1] -= 1;
          //update(position, currentLine, "West");
        } else {
          end("West");
          return false;
        }
        break;

      case "E":
        if (position[1] < currentLine.length) {
          position[1] += 1;
          //update(position, currentLine, "East");
        } else {
          end("East");
          return false;
        }
        break;
    }
    if (currentLine[position[1] - 1] === "#") {
      console.log("You hit a wall");
      console.log(false);
      return false;
    }
  }

  if (currentLine[position[1] - 1] === "F") {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

function findStart(maze) {
  for (const [idx, line] of maze.entries()) {
    for (const [i, char] of line.split("").entries()) {
      if (char === "S") {
        //console.log(`starting at [${idx + 1}, ${i + 1}]`);
        return [idx + 1, i + 1];
      }
    }
  }
}

function update(position, line, direction) {
  if (direction !== "start") console.log(`moved ${direction}`);
  console.log(`current position: [${position}]`);
  console.log(`current line : ${line}`);
  console.log("");
}

function end(direction) {
  console.log(false);
  console.log(`You got out of the maze in the ${direction}`);
}

const maze = ["-#---", "-S---", "####-", "-#---", "---F"];
const directions = "WNSEEEESSWWSWE";
canTraverseMaze(maze, directions);
