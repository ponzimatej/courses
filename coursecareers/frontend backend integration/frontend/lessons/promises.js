const p = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => resolve("it worked!"), 2000);
  } else {
    setTimeout(() => reject("it falied"), 2000);
  }
});

p.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});

console.log("waiting");
