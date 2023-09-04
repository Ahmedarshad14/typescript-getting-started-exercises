const current_users:string[] = ["John", "Tim", "Lee", "Fred", "Ken"]

const new_users:string[] = ["JOHN", "Ashley", "Lee", "Simon", "Joe"]

let crntUsrLowrCase:string[] = current_users.map(user => user.toLowerCase())

for (let i =0; i < new_users.length; i++) {
    let newUser = new_users[i]
    let newUserLowerCase = newUser.toLowerCase()

    if (crntUsrLowrCase.includes(newUserLowerCase)) {
        console.log(`Sorry! The username ${new_users[i]} is not available, please try a different username.`)
    } else {
        console.log(`Congrats! The username ${new_users[i]} is available.`)
    }
}