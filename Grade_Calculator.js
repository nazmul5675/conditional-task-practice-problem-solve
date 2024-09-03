/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const prompt = require("prompt-sync")();
let score = prompt("what is your score?");

if (score >= 90) {
    console.log("You Got A");
} else if (score >= 80) {
    console.log("You Got B");
} else if (score >= 70) {
    console.log("You Got C");
} else if (score >= 60) {
    console.log("You Got D");
}
else {
    console.log("You Got F");
}
