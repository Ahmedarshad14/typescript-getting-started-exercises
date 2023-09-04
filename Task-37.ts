let make_shirt = (size="large", message="I Love TypeScript"):string => {
    return `Make a ${size} sized shirt with the following message printed on it. "${message}"`
}

console.log(make_shirt())
console.log(make_shirt("medium"))
console.log(make_shirt('small', "TypeScript is Funny"))