function memoizeFib() {
  let cache = {};
  //  Closure is used here.
  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

let fasterFib = memoizeFib();
console.log("Fibonacci..", fasterFib(10));
