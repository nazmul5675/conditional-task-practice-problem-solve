/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const prompt = require("prompt-sync")();
let score = prompt("what is your score?");
friendsScore = prompt("what is your Friends score?");

if (score >= 80) {
    console.log("You Got A");
    if (friendsScore > 80) {
        console.log("go for a lunch");
    }
    else if (friendsScore >= 60) {
        console.log("good luck next time");
    }
    else if (friendsScore >= 40) {
        console.log("keep your friend's message unseen");
    }
    else {
        console.log("block your friend");
    }
} else if (score < 80) {
    console.log("go to home and sleep and act sad");
} else {

}
