function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[n];
}

const n = 12; 
console.log(`The ${n}-th Fibonacci number is: ${fibonacci(n)}`);
