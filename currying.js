function sum(a, b, c) {
  return a + b + c;
}

var curryMaker = curry(sum);

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
