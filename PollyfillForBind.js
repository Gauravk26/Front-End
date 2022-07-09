//bind returns you the function 


var obj = {
    name:"Gaurav",
    nameFormer : function(verb) {
        console.log(this.name + " " + this.surname + " " + verb)
    }
}
var obj1 = {
    name: "IronMan",
    surname:"Kumar"
}
Function.prototype.PolyFilledBind = function(...args){
     var func = this;
     var params = args.slice(1);
    return function(...args2){
        func.apply(args[0],[...params,...args2])
    }
}

var real_binded = obj.nameFormer.bind(obj1);
real_binded("Legend")

var poly_filled  = obj.nameFormer.PolyFilledBind(obj1,"Legend");
poly_filled()