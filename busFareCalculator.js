/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const prompt = require("prompt-sync")();
let age = prompt("What is your age ?");
ticketFair = 800;

if (age <= 10) {
    console.log("Children's ticket are free");
} else if (age > 10 && age < 31) {
    let studentsFairDiscount = ticketFair * .5;
    let studentFair = ticketFair - studentsFairDiscount;
    console.log("student fair " + studentFair);
} else if (age >= 60) {
    let SeniorCitizensFairDiscount = ticketFair * 15 / 100;
    let SeniorCitizensFair = ticketFair - SeniorCitizensFairDiscount;
    console.log("Senior citizens fair " + SeniorCitizensFair);
} else {
    console.log("Regular fair 800 tk");
}