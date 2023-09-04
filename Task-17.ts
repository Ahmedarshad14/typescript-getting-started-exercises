"use strict";
let guestsList = ["Tasawar Abbas", "Haris Khan", "Muhammad Ali"];
// Message iteration with a for loop.
let message = ", You're cordially invited to dinner at 7 pm tonight.";
for (let i = 0; i < guestsList.length; i++) {
    console.log(guestsList[i] + message);
}
//Console log the absent guests.
console.log(`${guestsList[1]} is unable to attend`);
//Add new guest in place of absent guests
guestsList[1] = "Salman Ahmed";
for (let i = 0; i < guestsList.length; i++) {
    console.log(guestsList[i] + message);
}
console.log(`\nWe have found a bigger table, so we can invite three more guests. Let's update our guests list.`);

// We will add one guest at start of our list, one guest in the middle of the list and one guest at the end of our guest list.

guestsList.unshift("John Doe");

guestsList.splice(3 ,0, "Jane Doe");

guestsList.push("Lorum Ipsum");

for( let i = 0; i < guestsList.length; i++) {
    console.log(guestsList[i] + message)
}
console.log("Due to space unavailability, we can only invite two people at the moment.");

const messageExcuse = ", We are very sorry that due to space unavailability at venue, we are cancelling the dinner.";

let guestRemoval1 = guestsList.pop();
console.log(guestRemoval1 + messageExcuse );
let guestRemoval2 = guestsList.pop();
console.log(guestRemoval2 + messageExcuse );
let guestRemoval3 = guestsList.pop();
console.log(guestRemoval3 + messageExcuse );
let guestRemoval4 = guestsList.pop();
console.log(guestRemoval4 + messageExcuse );

for ( let i = 0; i < guestsList.length; i++) {
    console.log( ` ${guestsList[i]} You're invited to dinner tonight.`)
}

guestsList = [];

console.log(guestsList)