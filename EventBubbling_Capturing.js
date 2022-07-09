document.getElementById("GrandParent").addEventListener("click",() => {
    console.log("GrandPraent Clicked")
},true)
document.getElementById("Parent").addEventListener("click",() => {
    console.log("Parent Clicked")
} ,true)
document.getElementById("Child").addEventListener("click",() => {
    console.log("Child Clicked")
},false)