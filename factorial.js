function factorial(num) {
    if (num < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (num === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}

const number = 5; 
console.log(`The factorial of ${number} is: ${factorial(number)}`);
