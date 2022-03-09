/**
 * Finally, we will test your wit and angineering mindset.
 */

// You have a bunch of bank accounts:
// Bank of America, with 500 EUR,
// Bank of Tirana, with 1000 EUR,
// Bank of England, with 69 EUR,
// HSBC with 100 EUR,
// Bank of Italy with 200 EUR.

// You want to keep track of your money. To do that:
// 1. Store all the information in the most appropriate JS data structure you can think of.
// Note: You may want to add a unique identifier to each account.
const accounts = [
    {
        id:1,
        bankName:"Bank of Tirana",
        amount:1000
    },
    {
        id:2,
        bankName:"Bank of America",
        amount:500
    },
    {
        id:3,
        bankName:"Bank of England",
        amount:69
    },
    {
        id:4,
        bankName:"Bank of HSBC",
        amount:100
    },
    {
        id:5,
        bankName:"Bank of Italy",
        amount:200
    }

]
// Now, without directly typing the data:
// 2. Find a way to find out how much money is in a selected account.
accounts[1].amount
// 3. Find a way to find out how much money you have in total.
let total = 0
for(const account of accounts){
    total += account.amount
}
// 4. Find a way to add money to a selected account.
// 4.1 And subtract too.
accounts[1].amount = accounts[1].amount +100
accounts[1].amount = accounts[1].amount -100

// 5. Each bank account has an account number. For this exercise, an account number is a 5 digit integer.
// Find a way to add that information into the existing shape.
for(const account of accounts){
    account.accountNumber = 11111
}
