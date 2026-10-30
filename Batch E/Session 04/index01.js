let chkPrime = function(){
    let num = 12
    let i = 2
    let isPrime = true

    while(i<num){
        if(num%i === 0){
            isPrime = false
            break
        }
        i++
    }//while

    if(isPrime === true){
        console.log(`${num} is a prime number`)
    }else{
        console.log(`${num} is not a prime number`)
    }
}

chkPrime()


// 2 => 7/2
// 3 => 7/3
// 4 => 7/4
// 5 => 7/5
// 6 => 7/6