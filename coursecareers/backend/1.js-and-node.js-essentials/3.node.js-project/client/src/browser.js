import { exec } from "child_process";

let command;

switch (process.platform) {
  case "darwin": // mac
    command = 'open -a "Google Chrome" https://youtube.com';
    break;
  case "win32": // windows
    command = "start chrome https://youtube.com";
    break;
  case "linux": //linux
    command = "google-chrome https://youtube.com";
    break;
  default:
    console.log("Unsupported platform.");
}

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.log("error: ", error.message);
  }

  if (stderr) {
    console.log("stderr: ", stderr);
  }

  if (error || stderr) {
    return;
  }

  console.log(stdout);
});
