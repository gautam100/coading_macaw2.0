function myArray() {
  let ar = [
    5,
    10,
    3,
    8,
    "John",
    "Smith",
    function () {
      return 100;
    },
  ];
  for(let i=0;i<ar.length; i++){
    if(typeof ar[i] === "function"){
        console.log(ar[i]())
    }else{
        console.log(ar[i])
    }
  }
//   for (let temp of ar) {
//     if (typeof temp === "function") {
//       console.log(temp());
//     } else {
//       console.log(temp);
//     }
//   }//for 0f
}

myArray();
