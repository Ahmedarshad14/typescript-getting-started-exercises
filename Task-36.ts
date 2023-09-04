let make_shirt = (size:string, message:string):string => {
    return `Make a ${size} sized shirt with the following message printed on it. "${message}"`
}

console.log(make_shirt('Medium', 'Just Go For It!'))