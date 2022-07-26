//bind returns you the function 


let obj = {
    name:"Gaurav",
    nameFormer : function(verb) {
        console.log(this.name + " " + this.surname + " " + verb)
    }
}
let obj1 = {
    name: "IronMan",
    surname:"Kumar"
}
Function.prototype.PolyFilledBind = function(...args){
     let func = this;
     let params = args.slice(1);
    return function(...args2){
        func.apply(args[0],[...params,...args2])
    }
}

let real_binded = obj.nameFormer.bind(obj1);
real_binded("Legend")

let poly_filled  = obj.nameFormer.PolyFilledBind(obj1,"Legend");
poly_filled()