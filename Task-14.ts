let guestsList: string[] = ["Tasawar Abbas", "Haris Khan", "Muhammad Ali"];

// messages with console.log

// console.log(`${guestsList[0]}, You're cordially invited to dinner at 7 pm tonight.`);
// console.log(`${guestsList[1]}, You're cordially invited to dinner at 7 pm tonight.`);
// console.log(`${guestsList[2]}, You're cordially invited to dinner at 7 pm tonight.`);

// Message iteration with a for loop.
let message = ", You're cordially invited to dinner at 7 pm tonight."
for ( let i =0; i < guestsList.length; i++) {
    console.log(guestsList[i] + message)
}
