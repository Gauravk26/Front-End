function newFunctionClarity(){
  console.log("sdsd",this)
}
var constructor = new newFunctionClarity()
console.log("constructor",constructor);