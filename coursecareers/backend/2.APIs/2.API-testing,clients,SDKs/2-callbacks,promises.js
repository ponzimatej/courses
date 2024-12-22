const getData = () => {
  return new Promise(() => {
    setTimeout(() => {
      resolve("timeout complete.");
    }, 2000);
  });
};

getData().then((data) => {
  console.log(data);
});

// Higher order function => a function designed to take another function as argument
setTimeout(() => {
  console.log("timeout complete...");
}, 2000);
