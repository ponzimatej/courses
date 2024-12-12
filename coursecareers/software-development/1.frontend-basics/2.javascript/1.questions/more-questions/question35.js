class LRUCache {
  constructor(capacity) {
    this.max = capacity;
    this.count = 0;
    this.cache = new Map();
  }

  get(key) {
    console.log(`getting ${key}`);
    if (!this.cache.has(key)) {
      console.log(-1);
      return;
    }

    const value = this.cache.get(key);
    console.log(value);
    this.cache.delete(key);
    this.cache.set(key, value);
    console.log(this.cache.entries());
  }

  set(key, value) {
    console.log(`setting: [${key}, ${value}]`);
    if (this.cache.has(key)) {
      this.cache.delete(key);
      this.cache.set(key, value);
      return;
    }
    if (this.count < this.max) {
      this.cache.set(key, value);
      this.count++;
    } else {
      const entriesArr = Array.from(this.cache.entries());
      entriesArr.shift();
      this.cache = new Map(entriesArr);
      this.cache.set(key, value);
    }
    console.log(this.cache.entries());
  }
}

const cache = new LRUCache(3);
cache.set(1, 1);
cache.set(2, 2);
cache.get(1);
cache.set(3, 3);
cache.get(2);
cache.set(4, 4);
cache.set(5, 5);
cache.get(3);
cache.get(4);
cache.get(2);
cache.set(5, 5);
cache.set(6, 6);
