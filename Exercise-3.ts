let userName = "muhammad ahmed arshad"
//to upper case
let nameUpperCase: string = userName.toUpperCase();

// to lower case
let nameLowerCase: string = userName.toLowerCase();

//to title case
let words: string[] = userName.split(" ")
let titleCaseName: string = ""

for (let i = 0; i < words.length; i++) {
    titleCaseName +=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase()+" "
};

console.log(nameLowerCase);
console.log(nameUpperCase);
console.log(titleCaseName)
//console.log(nameTitleCase);