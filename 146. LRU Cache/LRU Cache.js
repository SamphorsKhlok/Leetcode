/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  //console.log('get: '+key);
  let value = this.map.get(key);
  console.log(value);
  if(value){
    this.map.delete(key);
    this.map.set(key,value);
    return value;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  //console.log('put: '+ key);

  //because the map will update it previous value and keep the location as it was
  //if it is deleted, then the new order will be added
  if(this.map.has(key)){
    this.map.delete(key);
  }

  this.map.set(key,value);

  //console.log([...this.map]);
  let iterator = this.map.keys();
  while(this.map.size > this.capacity){
    this.map.delete(iterator.next().value);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
