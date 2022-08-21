// I made one simple example in html , you can run this repo and check .
// You can change usecapture flag that you can see in second argument for addEventListener.
// You can see results in the console


document.getElementById("GrandParent").addEventListener("click",() => {
    console.log("GrandPraent Clicked")
},true)
document.getElementById("Parent").addEventListener("click",() => {
    console.log("Parent Clicked")
} ,true)
document.getElementById("Child").addEventListener("click",() => {
    console.log("Child Clicked")
},false)