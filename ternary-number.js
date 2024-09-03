/***
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.
write a simple if-else. 
also, write it using ternary operator.
 */
const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("num1= "));
let num2 = parseInt(prompt("num2= "));
let doubleOFNum1 = num1 * 2;
let sumOFNum = num1 + num2;
if (num1 > num2) {

    console.log(doubleOFNum1);
} else if (num1 < num2) {

    console.log(sumOFNum);
} else {

}


num1 > num2 ? console.log(doubleOFNum1) : console.log(sumOFNum);
