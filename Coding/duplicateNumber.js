//Duplicate Number

const arrayDuplicate = [1, 2, 3, 4, 5, 55, 5];

function findDuplicateNumber(arr) {
  let newMap = new Map();
  for (const element of arr) {
    if (newMap.has(element)) {
      return element;
    } else {
      newMap.set(element);
    }
  }
}

console.log("Duplicate",findDuplicateNumber([1, 2, 1, 3, 4, 5, 55, 5]));

//Multiple Duplicates.....
function findMultipleDuplicateNumber(arr) {
    let newMap = new Map();
    let result= []
    for (const element of arr) {
      if (newMap.has(element)) {
        result.push(element)
      } else {
        newMap.set(element);
      }
    }
    return result;
  }
  
  console.log("Multiple Duplicate",findMultipleDuplicateNumber([1, 2, 1, 3, 4, 5, 55, 5,6,6]));
