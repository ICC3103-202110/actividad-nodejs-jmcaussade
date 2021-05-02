
function Fibonacci(number){
    if (number<=1)
        return number;
    return Fibonacci(number-1) + Fibonacci(number-2);
}

var x=Fibonacci(3);
console.log("Fibonacci of " + 1 + " is " + x)