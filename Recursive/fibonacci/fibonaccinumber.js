function Fib(n) {
    if (n <= 1) {
      return n;
    } else {
      return Fib(n - 1) + Fib(n - 2);
    }
  }
   
  
  let n = 3;
  console.log(n + "th Fibonacci Number: " + Fib(n));