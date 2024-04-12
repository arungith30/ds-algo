function fibonacci(n) {

    let prev=0;
    let current=1;

    for (let i = 2; i <= n; i++) {
      current=prev+current;
       prev=current-prev;

    }
    return current;
}

const n = 1; 
console.log(`The ${n}-th Fibonacci number is: ${fibonacci(n)}`);
