function x(){
   setTimeout(function(){
     console.log("Global",p)
   },1000)
   var p = 3
}

x()