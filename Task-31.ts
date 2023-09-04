
const userNames = ['john', 'jane', 'Ahmed', 'Ali', 'admin'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
        console.log('Hello Admin! Would you like to see the status report?');
    }
    else {
        console.log(`Hello ${userNames[i]}! Thank you for logging in again.`);
    }
}

userNames.length = 0;

if (userNames.length === 0) {
    console.log("We need to add some users.")
}