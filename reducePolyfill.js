const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

// console.log(sumWithInitial);
// expected output: 10

Array.prototype.reduceBeta = function (func, defaultValue) {
  let acc = defaultValue ? this[0] + defaultValue : 0;
  for (var i = 0; i < this.length - 1; i++) {
    acc = acc ? acc : this[0];
    acc = func(acc, this[i + 1]);
  }
  return acc;
};

console.log(
  array1.reduceBeta(
    (previousValue, currentValue) => previousValue + currentValue,
    10
  )
);

fsq3dUKaaVBGte7//u//XK/gcVUFYg+go3OBO03xYViJ0bY=