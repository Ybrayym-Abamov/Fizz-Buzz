function fizzBuzz(maxValue) {
    let result = ""

    for (let i = 1; i <= maxValue; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            result += i + "FizzBuzz, "
        } else if (i % 2 == 0) { 
            result += i + "Fizz, "
        } else if (i % 3 ==0) {
            result += i + "Buzz, "
        }else {
            result += i + ", "
        }
    }

    console.log(result)
}
fizzBuzz(100);

function fizzBuzzPrime(maxValue) {
    let result = ""
    
    for (let i = 1; i<= maxValue; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            result += i + "FizzBuzz, "
        } else if (i % 2 == 0) { 
            result += i + "Fizz, "
        } else if (i % 3 ==0) {
            result += i + "Buzz, "
        } else if(isPrime(i)){
           result += i + "Prime, "
        } else {
            result += i + ", "
        }
    }

    console.log(result)
}

fizzBuzzPrime(100)

function isPrime (num){
    if (num===1) {
        return false    
    } else if (num===2) {
        return true 
    } else {
        for (let n = 2; n<num; n++){
            if (num % n == 0) {
                return false
            }
        }
        return true
    }
}