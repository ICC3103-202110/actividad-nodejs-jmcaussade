const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function Fibonacci(number){
    if (number<=1)
        return number;
    return Fibonacci(number-1) + Fibonacci(number-2);
}

readline.question("Enter a number:\n" , Number=> { 
    console.log("Fibonacci of " + Number + " is " + Fibonacci(Number))
    readline.close()
})

