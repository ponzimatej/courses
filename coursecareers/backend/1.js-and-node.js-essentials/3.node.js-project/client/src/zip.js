import { exec } from "child_process"; // executes commands
const path = require("path");
const fs = require("fs");

const currentPath = path.resolve();
const filesDir = path.resolve(currentPath, "files");
const zippedDir = path.resolve(currentPath, "zipped");

const zipFile = path.join(zippedDir, "text.zip");

if (!fs.existsSync(zippedDir)) {
  fs.mkdirSync(zippedDir);
}

let zipCommand;
if (process.platform === "win32") {
  // if we are on windows, this is the command:
  zipCommand = `powershell Compress-Archive -Path ${filesDir}${path.sep}* -DestinationPath ${zipFile}`;
} else {
  // if we are not on windows, this is the command:
  zipCommand = `zip ${zipFile} ${filesDir}${path.sep}*`;
}

exec(zipCommand, (error, stdout, stderr) => {
  // error is an error on node's end
  // stderr is an error on the command you're executing's end
  if (error) {
    console.log("error", error.message);
  }
  if (stderr) {
    console.log("stderr", stderr);
  }

  if (error || stderr) return;

  console.log(stdout);
});
