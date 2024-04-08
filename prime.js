//A prime number is a positive integer greater than 1 
//that has exactly two factors: 1 and the number itself.

function checkPrime(num) {
    let res = true;
    if (num <= 1) {
        res = false;
    }
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            res = false;
            break;
        }
    }
    if (res) {
        console.log(num + " is a prime number.");
    } else {
        console.log(num + " is not a prime number.");
    }
}

checkPrime(401);  
checkPrime(5);  
