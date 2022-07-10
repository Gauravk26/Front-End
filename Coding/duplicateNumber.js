//Duplicate Number

var arrayDuplicate = [1, 2, 3, 4, 5, 55, 5];

function findDuplicateNumber(arr) {
  var newMap = new Map();
  for (var i = 0; i < arr.length; i++) {
    if (newMap.has(arr[i])) {
      return arr[i];
    } else {
      newMap.set(arr[i]);
    }
  }
}

console.log("Duplicate",findDuplicateNumber([1, 2, 1, 3, 4, 5, 55, 5]));

//Multiple Duplicates
function findMultipleDuplicateNumber(arr) {
    var newMap = new Map();
    var result= []
    for (var i = 0; i < arr.length; i++) {
      if (newMap.has(arr[i])) {
        result.push(arr[i])
      } else {
        newMap.set(arr[i]);
      }
    }
    return result;
  }
  
  console.log("Multiple Duplicate",findMultipleDuplicateNumber([1, 2, 1, 3, 4, 5, 55, 5,6,6]));
