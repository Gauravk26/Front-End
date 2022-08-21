//Currying type 1
function sum(a, b, c) {
  return a + b + c;
}

let curryMaker = curry(sum);

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

console.log("Curry1", curryMaker(1, 2, 3));
console.log("Curry2", curryMaker(1)(2, 3));
//Currying type 2
function sumCurryingtype2(a){
  return function(b){
      if(b){
        return sum(a+b)
      } else {
        return a 
      }
  }
}
console.log("Currying type 2",sumCurryingtype2(1)(1)(1)(1)(1)()); 