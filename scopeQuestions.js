//What will be output 
function x(){
   setTimeout(function(){
     console.log("Global",p)
   },1000)
   let p = 4; 
   return; 
}
let p = 4
x()