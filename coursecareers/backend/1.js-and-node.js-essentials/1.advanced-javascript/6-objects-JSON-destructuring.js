const data = {
  username: "matej",
  reputation: 90,
  birthdate: new Date(),
  address: {
    street: "Main Street",
    city: "New York",
    zip: "12345",
  },
  hobbies: ["sleeping", "cooking", "swimming"],
  verified: true,
  name: null, // not providing a value - usually used by the programmer
  email: undefined, // unitialized - usually used by javascript
  speak: () => {
    console.log("hello world");
  },
};
console.log(data);

// grabbing variables from an object
const {
  birthdate: bday, // grab the birthdate and rename it to bday
  address: { city }, // grab the city from address
  hobbies: { [2]: hobby }, // grab the hobby from 2nd index and call it hobby
} = data;
console.log(bday, city, hobby);

// convert to JSON: (JSON.Stringify) and make it nice: (, null, 4)
console.log(JSON.stringify(data, null, 4));
// when converting to JSON, undefined and methods are removed,
// and date is converted to time stamp

// to check if a JSON is valid, save it to a .json file
// or copy it to http://www.jsonlint.com
