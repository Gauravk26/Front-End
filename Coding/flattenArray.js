const arr = [[1,3,5],1,[1,[3,5]],1]
const finalArray = []

//flatten the array 

function flattenArray(arrArg){
  arrArg.map((iter) => {
   if(Array.isArray(iter)){
     flattenArray(iter)
   } else{
     finalArray.push(iter)
   }
 })
}

flattenArray(arr)
console.log("flatten the array",finalArray)

