// Prompt the user for a password to validate

// Check if the user’s password meets the following constraint:

//     At least 10 characters long

// If the user’s password meets the constraint, show a success message to the user

// If the user’s password fails the constraint, show a failure message to the user

console.log("Welcome to the password validator tool.")

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("What is your password?", function(input){
    
    if(input.length < 10){
        console.log("Your password needs at least 10 characters.")
    }
    if (input.search(/[a-z]/) == -1) {
        console.log("Your password needs a lower case letter.")
    }
    if (input.search(/[A-Z]/) == -1) {
        console.log("Your password needs an upper case letter.")
    }
    if (input.search(/[0-9]/) == -1) {
        console.log("Your password needs a number.")
    }
    else{
        console.log('Your password is validated.' +
        '        _        _                   _              _             _           _           _        ' +
        '        / /\     /\_\               /\ \           /\ \           /\ \        / /\        / /\      ' +
        '       / /  \   / / /         _    /  \ \         /  \ \         /  \ \      / /  \      / /  \     ' +
        '      / / /\ \__\ \ \__      /\_\ / /\ \ \       / /\ \ \       / /\ \ \    / / /\ \__  / / /\ \__  ' +
        '     / / /\ \___\\ \___\    / / // / /\ \ \     / / /\ \ \     / / /\ \_\  / / /\ \___\/ / /\ \___\ ' +
        '     \ \ \ \/___/ \__  /   / / // / /  \ \_\   / / /  \ \_\   / /_/_ \/_/  \ \ \ \/___/\ \ \ \/___/ ' +
        '      \ \ \       / / /   / / // / /    \/_/  / / /    \/_/  / /____/\      \ \ \       \ \ \       ' +
        '  _    \ \ \     / / /   / / // / /          / / /          / /\____\/  _    \ \ \  _    \ \ \      ' +
        ' /_/\__/ / /    / / /___/ / // / /________  / / /________  / / /______ /_/\__/ / / /_/\__/ / /      ' +
        ' \ \/___/ /    / / /____\/ // / /_________\/ / /_________\/ / /_______\\ \/___/ /  \ \/___/ /       ' +
        '  \_____\/     \/_________/ \/____________/\/____________/\/__________/ \_____\/    \_____\/        '
)
    }

    reader.close()
})

