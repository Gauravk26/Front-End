function findPair(arr1,sum) {
  let newMap = new Map();
  for (const element of arr1) {
    if(newMap.has(sum-element)){
        return `${element} ${sum-element}`
    } else {
        newMap.set(element)
    }
  }
}
let arr = [1, 3, 5, 7,8,11];
console.log("pairs",findPair(arr,12));
