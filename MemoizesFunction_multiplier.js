function multiply(num1, num2) {
    for (let i = 0; i < 10000; i++) {}
    return num1 * num2;
  }
  function memoize(func) {
    let cache = [];
    return function (...args) {
      if (cache[args[0]] && cache[args[0]][args[1]]) {
        return cache[args[0]][args[1]];
      } else {
        let result = func(args[0], args[1]);
        cache[args[0]] = [];
        cache[args[0]][args[1]] = result;
        return result;
      }
    };
  }
  const memoizedMultiply = memoize(multiply);
  
  console.time("Started");
  console.log(memoizedMultiply(10, 20));
  console.timeEnd("Started");
  
  console.time("Started");
  console.log(memoizedMultiply(10, 20));
  console.timeEnd("Started");
  