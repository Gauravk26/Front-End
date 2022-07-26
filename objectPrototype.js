function newFunctionClarity(){
  console.log("sdsd",this)
}
let constructor = new newFunctionClarity()
console.log("constructor",constructor);