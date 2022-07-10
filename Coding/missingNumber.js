//Missing Number
function MissingNumber(arr,N) {
  var total_sum = 0;
  var sum = ((N )* (N+ 1)) / 2;
  for (var i = 0; i < arr.length; i++) {
    total_sum += arr[i];
  }
  console.log(sum)
  var result = sum - total_sum;
  return result;
}

console.log(MissingNumber([1, 2, 4, 5, 6, 7, 8, 9, 10],10));
