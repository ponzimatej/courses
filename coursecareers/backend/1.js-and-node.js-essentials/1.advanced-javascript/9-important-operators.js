// turnary operator (? :)
// <condition> ? <what to do if true> : <what to do if false>

const user = {
  name: "matej",
  birthdate: new Date(2000, 1),
};

const currentYear = new Date().getFullYear();
const birthYear = user.birthdate.getFullYear();
const userAge = currentYear - birthYear >= 18 ? "adult" : "minor";

console.log(userAge);
// ----------

// optional chaining (?)
// checks if something is undefined, if it is, it doesnt call any methods on it
var users = [{ name: "matej", birthdate: new Date(2000, 1) }, { name: "john" }];

users.map((user) => {
  console.log(user?.birthdate?.getFullYear());
  // this would crash the program if we removed "?" because would call .getFullYear() on undefined
  // with "?", if either user or birthdate are undefined we will just return undefined
});
// ----------

// null coalesing operator (??), or operator (\\)
// assign a default value to something if it's missing
users = [
  { name: "matej", age: 50 },
  { name: "john", age: 0 },
];

users.map((user) => {
  console.log(user.age ?? "no age");
  // print the age, if it's undefined, print 'no age'
  console.log(user.age || "no age");
  // print the age, if it's falsey (null, undefined, 0...), print 'no birthdate'
});
