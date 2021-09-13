//APP-1
const bLower = document.getElementById("lower")
const bCapi =  document.getElementById("capi")
const bUpper = document.getElementById("upper")
const format = document.getElementById("formateable")

bLower.addEventListener("click", function(event){
    format.value = format.value.toLowerCase()
})
bCapi.addEventListener("click", function(event){
    format.value = format.value.toLowerCase()
    format.value = format.value.replace(/\b\w/g, c => c.toUpperCase())
})
bUpper.addEventListener("click", function(event){
    format.value = format.value.toUpperCase()
})