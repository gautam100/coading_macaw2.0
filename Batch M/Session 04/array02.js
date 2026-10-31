function sumArray() {
  let ar = [
    5,
    10,
    2,
    100,
    "John",
    function () {
      return "JS";
    },
  ];
  for (let temp of ar) {
    if (typeof temp === "function") {
      console.log(temp());
    } else {
      console.log(temp);
    }
  }

  let sum = 0
  for(let temp of ar){
    if(typeof temp === "number"){
        sum = sum + temp
    }
  }
  console.log("Addition is:",sum)
}

sumArray();
