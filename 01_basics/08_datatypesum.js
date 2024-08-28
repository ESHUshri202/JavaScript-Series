// Their are two types of datatypes 
// 1. Primitve Datatype
// 2. Non-Primitive | Reference Datatype

// Primitive DataType
const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123') //symbols are unique 
const anotherid = Symbol('123')

// console.log(id)
// console.log(anotherid);

// console.log(id  === anotherid);

const bigNumber = 35464684979789745n

//Reference DataType

// Array, Objects, Functions

const heros = ['shakiman', 'naagraj', 'ds']
let myObj = {
    name: "ach",
    age: 22,
}

const myFunction = function() {
    console.log("helloworld")
}

console.log(typeof myFunction)

console.log(typeof anotherid)