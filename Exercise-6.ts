let nameWithSpaces: string = "\t Muhammad\tAhmed\n\t\t\tArshad";

console.log(`Name with escape sequences / tabs & new lines: ${nameWithSpaces}`);

// let nameWithoutSpaces: string = nameWithSpaces.trim();

// console.log(`Name without escape sequences / tabs & new lines: ${nameWithoutSpaces}`);

const toTitleCase = (str: string): string =>
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)!
    .map(x => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');

console.log(toTitleCase(nameWithSpaces));   