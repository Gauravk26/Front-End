//find the max_sum of 3 consecutive numbers

let item_arr = [1, 2, 3, 4, 5];
function MaxSumWindow(items, window) {
  let max_sum = 0;
  let p = 0,
    j = window;
  for (let i = 0; i < window; i++) {
    max_sum = max_sum + items[i];
  }

  for (let i = 1; i < items.length - (window - 1); i++) {
    let sum = max_sum - items[p] + items[j];
    if (sum > max_sum) {
      max_sum = sum;
    }
    p = p + 1;
    j = j + 1;
  }
  return max_sum;
}

console.log("MaxSumWindow", MaxSumWindow(item_arr, 4));
