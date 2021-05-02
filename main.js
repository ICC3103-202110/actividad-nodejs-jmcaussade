//const ps = require("prompt-sync");
//const prompt = ps();

function Fibonacci(number){
    if (number<=1)
        return number;
    return Fibonacci(number-1) + Fibonacci(number-2);
}

var Number=10
var x=Fibonacci(Number);
console.log("Fibonacci of " + Number + " is " + x)

//let Number= prompt("Enter a number: ");