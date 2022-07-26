console.log("Polyfill for Map .....");

Array.prototype.newmap1 = function (func) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i],i));
  }
  return result;
};

console.log([1,2,3,undefined].newmap1((iter,_index) => {
    return iter;
}))

