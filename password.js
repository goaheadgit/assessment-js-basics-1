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
    if(input.length >= 10){
        console.log("Your password is validated.")
    }
    else{
        console.log("Your password is not valid.")
    }

    reader.close()
})

