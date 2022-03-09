/*
 How well you understand functions in javascript, bruh?
*/

// 1. create a function called "getMyName" that returns your name. It takes no arguments.
function getMyName(){
    return "My name is Nilson"
}
// 2. Create a function called "add". It takes 2 numbers as arguments and returns its sum.
function add(a,b){
    return a+b
}
// 3. Create a function called "subtractWithCheck". This time:
//  - It can expect any 2 arguments
//  - It should return the difference of the 2 arguments if they are numbers
//  - If one of the arguments is not a number, it should return "Yo dawg you can't subtract us!"
function subtractWithCheck(a,b){
    if (typeof (a)==="number"&&typeof (b)==="number"){
        return a-b
    }else {
        return "Yo dawg you cant subtract us!"
    }


}
// 4. now call the functions with some arguments of your choice.
subtractWithCheck(20,12)
add(33,22)
// 4.1 assign results to variables.
const subtraction = subtractWithCheck(20,15)
const adding = add(33,22)
// 4.2 print the results to the console.
console.log("results are:",subtraction,adding)
// 5. Create a function called getAge. It takes a person object as an argument.
//   - It should return the person's name and age as one single string, like "John is 26".
//   - The person's shape is { id: number, bornIn: number, name: string }
// 5.1 Call the function with a person argument of your choosing.
function getAge(person){
        return `${person.name} is ${person.age} and was born in ${person.birthYear}`
}

const person ={
    name:"nilson",
    age:"22",
    birthYear:1999
}

getAge(person)
// 6. Yo, this is a brain picker. Move on for now if you can't solve it ;P
// Create a function called "getGreet" that takes a boolean (you can call it `shouldCapitalise`) and:
//   - returns a function that greets the person with the given string.
//   - if `shouldCapitalise` is true, it should greet the person with a capitalised name.
// 6.1 Using this new function, say hello to yourself in uppercase, and console.log it
