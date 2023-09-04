// Comparing equality in strings.
let myName = "Ahmed"
console.log("Is 'Ahmed' !== 'AHMED'? I predict True.")
console.log(myName !== "AHMED")

//Tests using the lower case function
let fullName = "MuhammaD AhmeD"
fullName = fullName.toLowerCase()
console.log("Applying .toLowerCase to a string with title case converts it to all lower case.")
console.log(fullName  === "muhammad ahmed")

// Numerical tests involving equals, not equal, less than, greater than, greater/less than or equal to.
let a = 10;
let b = 5;
// Equality
console.log(a === b); 

// Inequality
console.log(a !== b);
// Greater than
console.log(a > b);

// Less than
console.log(a < b);

// Greater than or equal to
console.log(a >= b);
// Less than or equal to
console.log(a <= b);

let x = 5;
let y = 10;
let z = 15;

// Logical AND (&&)
console.log(x < y && y < z); // true (both conditions are true)
console.log(x > y && y < z); // false (first condition is false)

// Logical OR (||)
console.log(x < y || y < z); // true (at least one condition is true)
console.log(x > y || y > z); // false (both conditions are false)

// Combining logical operators
console.log((x < y && y < z) || (x > y && y > z)); // true (first condition is true)
console.log((x < y && y > z) || (x > y && y < z)); // false (both conditions are false)

// Test whether an item is in a array
const myArray = ["Ahmed", 654, "Islamabad"]

console.log(myArray.includes(654))

console.log(myArray.includes("Python"))
