let prod = {
    name: "Watch",
    price: 20,
    color: "Black",
}

console.log(prod.name)
console.log(prod.price)
console.log(prod.color)

console.log("----------------")

for(let key in prod){
    console.log(prod[key])
}