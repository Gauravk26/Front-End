function callFunction(){
    let counter = 0;
    let nonClosureVariable = 9;
    return function(){
        counter++;
        console.log("Closure Example",counter,nonClosureVariable)
    }
}

let call = callFunction()
console.log("call Closure",call)
call()
call()