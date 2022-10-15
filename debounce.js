function debounce(func,timeout){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
        func.apply(this,args)
    },timeout)
  }
}
function SayDebounce(){
    console.log("SayDebounce")
}
const debounceFunction = debounce(SayDebounce,2000);