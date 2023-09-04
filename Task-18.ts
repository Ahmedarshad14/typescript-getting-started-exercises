
//1
let myPlaces: string[] = ["Switzerland", "Italy", "Netherlands", "France", "Spain"];
//2
console.log("Print your array in its original order.")
console.log(myPlaces);

console.log("Copy original array and sort it alphabetically.")

let myPlacesSorted: string[] = [...myPlaces].sort();

console.log("print sorted array.")
console.log(myPlacesSorted);

console.log("print original array to see that it has not been modified.")
console.log(myPlaces);

console.log("reverse alphbetical order.")
myPlacesSorted.reverse();

console.log("print reversed array.")
console.log(myPlacesSorted);

console.log("print original array again.")
console.log(myPlaces);

console.log("reverse the order again.")
myPlacesSorted.reverse();

console.log("print the array again (back to alphabetical order).")
console.log(myPlacesSorted);

console.log("sort original array in alphabetical order.")
myPlaces.sort();

console.log("print original array after sorting.")
console.log(myPlaces)

console.log("reverse the order of original array and print.")
console.log(myPlaces.reverse());