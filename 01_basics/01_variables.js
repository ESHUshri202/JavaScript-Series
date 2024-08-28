// Their are three variable declaration keywords 
// let , const , var 
// talking about the scope of these keywords 
// value in 'let' keyword is accessible throughout the block of function and can be edited.
// value in 'const' keyword cannot be editing once declared and defined
// value in 'var' keyword can be edited and accessible gloably.

const accountId = 145612
let accountEmail = "achin@gmail.com"
var accountPassword = "1234567"


accountCity = "Jaipur"

let accountState;

// accountId = 1 // not allowed once created as const variable.

accountEmail= "ac@gmail.com"
accountPassword= "123"
accountCity= "up"

console.log(accountId);

/*
    Prefer not to use var 
    bcoz of issue in block scope and functional scope.
*/

console.table([accountEmail,accountId,accountPassword,accountState,accountCity])


// Javascript is dynamically typed language..
// console.table([]) is used to print the values in the form of tabular format.
// "use strict" indent treats all the Js Code as newer version of code
// use documentation "ts39.es"  