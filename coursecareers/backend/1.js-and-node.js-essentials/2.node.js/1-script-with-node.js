const fs = require("fs");

let debugMode = false;

function debug(message) {
  if (debugMode) {
    console.log("DEBUG:", message);
  }
}

// read a file
const data = fs.readFileSync("1.1-config.txt", "utf8");
debugMode = data.slice(-1) === "1";
// get the last character from debug=<val>
// if debug = 1, set debugMode to true

debug("debugging");
