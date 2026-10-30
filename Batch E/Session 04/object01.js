let prod = {
    name: "Sport Shoe",
    price: 20,
    isDiscount: false,
    description: "This is bla bla..."
}

console.log(prod.name)//Sport Shoe
console.log(prod.price)//20
console.log(prod.isDiscount)//false
console.log(prod.description) //This is...

for(let key in prod){
    console.log(prod[key])
}