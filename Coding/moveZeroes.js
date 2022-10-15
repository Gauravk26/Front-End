// i/p-> [1,0,2,3,0,5,0]
// o/p-> [1,2,3,5,0,0,0]

//Move all the zeros at the end
let arr = [1, 0, 2, 3, 0, 5, 0];
function moveZeroes(newArr) {
  let count = 0;
  for (const element of newArr) {
    if (element !== 0) {
      newArr[count++] = element;
    }
  }
  for (let i = count; i < newArr.length; i++) {
    newArr[i] = 0;
  }
  return newArr;
}

console.log(moveZeroes(arr));
