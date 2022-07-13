const str = "{}"
function isValidString(str){ 
  const map = new Map();
  map.set('{','}')
  const arr = [];
  for(let i =0;i<str.length;i++){
    if(map.has(str[i])){
        arr.push(str[i])
    } else {
     let pop  = arr.pop();
     if(map.get(pop) !== str[i]){
      return false
     }
    }
  }
  if(arr.length === 0){
  return true
  } else {
   return false
  }
}
 
console.log("isValidString",isValidString(str))
