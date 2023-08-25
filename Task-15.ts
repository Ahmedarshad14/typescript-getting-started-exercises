let guestsList: string[] = ["Tasawar Abbas", "Haris Khan", "Muhammad Ali"];

// Message iteration with a for loop.

let message = ", You're cordially invited to dinner at 7 pm tonight."
for ( let i =0; i < guestsList.length; i++) {
    console.log(guestsList[i] + message)
}
//Console log the absent guests.
console.log(`${guestsList[1]} is unable to attend` );
//Add new guest in place of absent guests
guestsList[1] = "Salman Ahmed";

for (let i = 0; i< guestsList.length; i++) {
    console.log(guestsList[i] + message)
}