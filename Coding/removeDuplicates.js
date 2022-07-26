function removeDuplicate(arr) {
  let newMap = new Map();
  let newArray = [...arr];
  for (let i = 0; i < newArray.length; i++) {
    if (newMap.has(arr[i])) {
      arr.splice(i, 1);
    } else {
      newMap.set(arr[i]);
    }
  }
  return arr;
}

console.log(
  "removed duplicates",
  removeDuplicate([1, 2, 1, 3, 4, 5, 55, 5, 6, 6])
);
