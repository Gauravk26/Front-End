function x(){
   setTimeout(function(){
     console.log("Global",p)
   },1000)
   let p = 3
}

x()