// memoization - storing calculated values in a cache.
// in this example - storing hashed values -> if I already hashed a value,
// I dont have to do it again, I just grab it from the cache.
const crypto = require("crypto");

function sha256(data) {
  if (!sha256.cache) {
    // if theres no cache, create it
    console.log("initializing cache");
    sha256.cache = {};
  }

  if (!sha256.cache[data]) {
    // if the data is not in the cache, add it
    const hash = crypto.createHash("sha256");
    hash.update(data);
    sha256.cache[data] = hash.digest("hex");
  } else {
    console.log("cache hit!");
  }

  return sha256.cache[data];
}

console.log(sha256("123456ahoj"));
console.log(sha256("1234ahoj"));
console.log(sha256("123456ahoj"));
console.log(sha256);
