console.log("Memoized Function......");

function memoize(func) {
  // cache here
  let cache = {};
  // Closure used 
  return function (...args) {
    console.log("Arguments...",args)
    var n = args[0];
    if (n in cache) {
      console.log("Returning from cached value...");
      return cache[n];
    } else {
      let result = func(n);
      cache[n] = result;
      return result;
    }
  };
}
const factorial = memoize((x) => {
  if (x === 0) {
    return 1;
  } else {
    return (x * factorial(x - 1));
  }
});

console.log("factorial",factorial(6));
console.log("factorial",factorial(7));

