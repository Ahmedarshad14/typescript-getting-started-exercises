// variable car = Honda so it returns true.
let car = 'Honda';
console.log("Is car == 'Honda'? I predict True.")

// variable car = Honda so it return false when we check it against subaru.
console.log(car == 'Honda')
console.log("Is car == 'subaru'? I predict False.")
console.log(car == 'subaru')

// True and True or False return true.
let a = true && true || false;
console.log("Is a == false? I predict true.")
console.log(a);

// Simple boolean value true returns true.
let b = true;
console.log("Is b == false? I predict true.")
console.log(b);

//Empty string's boolean value returns to false.
let c = "";
console.log("Is c === false? I predict false.")
console.log(Boolean(c))

//Comparing true and false returns false.
console.log("True & False Comparison. I predict false.")
console.log(true && false);

//Comparing true or false returrn true.
console.log("True or False Comparison. I predict true.")
console.log(false || false || true);

//Checking boolean value of zero.
let varZero = 0;
console.log("Boolean value of zero. I predict false.")
console.log(Boolean(varZero));

// Default value of NaN is false.
let notANumber = NaN;
console.log("Boolean value of Not A Number property. I predict false.")
console.log(Boolean(notANumber));

// comparing 55 to 55 returns true.
let g = 55;
console.log("is Variable g === 55. I predict true.")
console.log(g === 55)