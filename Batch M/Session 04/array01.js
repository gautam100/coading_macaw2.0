/*
Array: store multiple data of multiple types
*/

let ar = [5, "john", true, "This is Java script",100, 200]

console.log(ar[0])//5
console.log(ar[1])//john
console.log(ar[2])//true
console.log(ar[3])//This is Java script
console.log("--------------")
for(let temp of ar){
    console.log(temp)
}
console.log("--------------")
for(let i=0; i<ar.length; i++){
    console.log(ar[i])
}