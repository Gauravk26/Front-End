//Missing Number
function MissingNumber(arr,N) {
  let total_sum = 0;
  let sum = ((N )* (N+ 1)) / 2;
  for (const element of arr) {
    total_sum += element;
  }
  console.log(sum)
  return sum - total_sum;
}

console.log("MissingNumber",MissingNumber([1, 2, 4, 5, 6, 7, 8, 9, 10],10));
