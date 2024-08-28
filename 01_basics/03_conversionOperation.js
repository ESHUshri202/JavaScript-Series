// conversion of datatype 

let score = "achintya"

// console.log(typeof score)
// console.log(typeof(score))

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN (Not a Number)
// true => 1 ; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn);


/* 
    1 => true || 0 => false 
    "" => false empty value
    "hitesh" => true having some value
*/

let someNumber = 1223

let stringNumber  = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


//==================Operations========================

let value = 3
let netvalue = -value
// console.log(netvalue)

// Basic Arithmetic Math Operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**2);
// console.log(2%2);

let str1 = "hello"
let str2 = "achintya"

let str3 = str1 + str2
// console.log(str3);


// console.log("1" + 2); // output => 12
// console.log(1 + "2"); // output => 12
// console.log("1" + 2 + 2); // output => 122
// console.log(1 + 2 + "2"); // output => 32


// console.log((3+4)*5%3)


// console.log(+true) // output => 1

let num1, num2, num3;
num1=num2=num3 = 2+2
// console.log(num1,num2,num3)


let gameCounter = 100
++gameCounter;
// console.log(gameCounter)


// link 
// documentation
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


