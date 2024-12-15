// Go to run and debug.
// Click create a launch.json file, the file is going to get created in a .vscode dir,
// which means, it won't be visible in the repo.
// Choose on option, in this case Node.js.

// Create your breakpoints, go to run and debug and click 'Run and Debug'
// You can also set watch expressions in the run and debug tab, e.g. user.age > 40

const users = [
  { name: "matej", age: 50 },
  { name: "john", age: 0 },
];

users.map((user) => {
  console.log(user.age || "no age");
});
