var arrayToTest = [2,3,4,5]

arrayToTest.push(99);

//[2,3,4,5,99] 

//Polyfill For push 

Array.prototype.push1 = function(num){
  let length = this.length;
  this[length] = num;
}
arrayToTest.push1(999);
console.log("PolyfillArray",arrayToTest)
