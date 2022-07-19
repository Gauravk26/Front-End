function callFunction(){
    var counter = 0;
    var nonClosureVariable =9;
    return function(){
        counter++;
        console.log("Closure Example",counter,nonClosureVariable)
    }
}

var call = callFunction()
console.log("call Closure",call)
call()
call()