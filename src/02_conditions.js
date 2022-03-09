/*
 Aight, logic gate time!
*/

// function called "getShorterString" takes 2 strings as arguments. It returns the string that is shorter in length.
// - If the strings are the same length, return "They're the same length!"
// 1. Build the function.
// 1.1 Call the function with "Bob" and "Steven" as arguments.
// 1.2. Call the function with "Henrica" and "Mark" as arguments.
// 1.3. Call the function with any arguments we like to test the remaining use case.

function getShorterString(name1,name2){
    const length1 =name1.length
    const length2 =name2.length
    if (typeof (name1)==='string'&&typeof (name2)==='string'){
        if (length1>length2){
            return `Shorter in length is: ${name2}`

        }else if(length2>length1){
            return `Shorter in length is: ${name1}`
        }else {
            console.log("Errorrrrrrr")
        }
    }
}
console.log(getShorterString("nilson","dyrmishi"))
// 2. for this exercise, nasty birds are pigeon, seagull and bin chicken. All other birds are clean.
// Write a function called checkDirtyBirds which takes an array of bird species as an argument.
// The function should:
// - return "Eww" if the array contains one of the nasty birds
// - return "Oh god" if the array contains 2 of the nasty birds
// - return "Where the hell am I?" if the array contains 3 or more of the nasty birds
// - return "Birds are cute!" if all the birds are clean

// 2.1 Test all the scenarios by calling the function with different arguments.
