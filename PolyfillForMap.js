console.log("Polyfill for Map .....");

Array.prototype.newmap1 = function (func) {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    result.push(func(this[i],i));
  }
  return result;
};

console.log([1,2,3,undefined].newmap1((iter,index) => {
    return iter;
}))

