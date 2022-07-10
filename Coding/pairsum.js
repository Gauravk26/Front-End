function findPair(arr,sum) {
  var newMap = new Map();
  for (var i = 0; i < arr.length; i++) {
    if(newMap.has(sum-arr[i])){
        return `${arr[i]} ${sum-arr[i]}`
    } else {
        newMap.set(arr[i])
    }
  }
}
var arr = [1, 3, 5, 7,8,11];
console.log("pairs",findPair(arr,12));
