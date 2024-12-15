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

// both variables pointing to the same object
const data2 = data;
data2.name = "ondra";
console.log(data.name);

// created a new object data3 with the same properties as data
const data3 = { ...data }; // spread operator
data3.name = "ahoj";
console.log(data.name, data3.name);

const data4 = data;
console.log(data4 === data, data4.address === data.address);
// data4 and data are pointing to the same address in memory
// data4.address and data.address are pointing to the same address in memory

const data5 = { ...data };
console.log(data5 === data, data5.address === data.address);
// data5 and data are not pointing to the same address in memory
// data5.address and data.address are pointing to the same object in memory
data5.address.city = "Praha"; // this changes both data5.address and data.address
data5.name = "example"; // does not change the data.name
// ----------

// using the spread operator
// 1)
const user = {
  username: "matej",
  reputation: 90,
};

const notifications = { ...user, notifications: true };
console.log(notifications);

// 2)
const numbers = [1, 2, 3];
console.log([...numbers, 4, 5]);

// 3)
const algorithm = (f1, f2, f3) => {
  return (x) => {
    let result = f1(x);
    result = f2(result);
    result = f3(result);
    return result;
  };
};

const functions = {
  double: (x) => x * 2,
  sqr: (x) => x * x,
  half: (x) => x / 2,
};

const algo = algorithm(...Object.values(functions));
// Call the function algorithm with all three of the
// functions (object values) from the functions object.
// Object.values turns the object functions into an array of functions
console.log(algo(2));
