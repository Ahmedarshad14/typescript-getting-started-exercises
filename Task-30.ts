const userNames:string[] = ['john', 'jane', 'Ahmed', 'admin', 'Ali' ]

for (let i = 0; i < userNames.length; i++) {

    if ( userNames[i] === 'admin') {
        console.log('Hello Admin! Would you like to see the status report?')
    } else {
        console.log(`Hello ${userNames[i]}! Thank you for logging in again.`)
    }
}
