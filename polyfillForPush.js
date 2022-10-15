let arrayToTest = [2,3,4,5]

arrayToTest.push(99,2);

//[2,3,4,5,99] 

//Polyfill For push 

Array.prototype.push1 = function(...args){
let length = this.length;
  args.map(iter => {
    this[length] = iter;
    length = length + 1
  })
}
arrayToTest.push1(999,22,33);
console.log("PolyfillArray",arrayToTest);
