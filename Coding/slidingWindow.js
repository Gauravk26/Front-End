//find the max_sum of 3 consecutive numbers

let arr = [1, 2, 4, 3, 7, 1];
function MaxSumWindow(arr, window) {
  let max_sum = 0;
  let p = 0,
    j = window;
  for (let i = 0; i < window; i++) {
    max_sum = max_sum + arr[i];
  }

  for (let i = 1; i < arr.length - (window - 1); i++) {
    let sum = max_sum - arr[p] + arr[j];
    if (sum > max_sum) {
      max_sum = sum;
    }
    p = p + 1;
    j = j + 1;
  }
  return max_sum;
}

console.log(MaxSumWindow(arr, 4));
