class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // This map will hold the key-value pairs.
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1;
    }
    // Move the key to the end to show that it was recently used.
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value) {
    // If the key is already present, delete it so that we can set it as the most recently used by adding it last.
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size === this.capacity) {
      // If the cache is at capacity, remove the least recently used (first) entry.
      // keys().next().value returns the first item's key.
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    this.cache.set(key, value);
  }
}

// Usage Example
const cache = new LRUCache(2);
cache.set(1, 1); // Cache is {1=1}
cache.set(2, 2); // Cache is {1=1, 2=2}
console.log(cache.get(1)); // returns 1
cache.set(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
console.log(cache.get(2)); // returns -1 (not found)
cache.set(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
console.log(cache.get(1)); // returns -1 (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
