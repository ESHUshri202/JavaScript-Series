const name = "achintya"
const repoCount = 50

// console.log(name + repoCount + " Value")

// console.log(`Hello my name is ${name} and my repo count is ${repoCount} `)

//new method of declaration of string 
const gameName = new String('achintya-hc-com')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// __proto__ is generally displays the protype of the keywork or datatypes.

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2)) // value at index '2'
// console.log(gameName.indexOf('t')) // position of charater 't'

const newString = gameName.substring(0,4)
// console.log(newString)

const anotherString = gameName.slice(0,4)
// console.log(anotherString);

const newStringOne = '   hitesh   '
// console.log(newStringOne)
// console.log(newStringOne.trim());

const url = "https://ach.com/achi%2sriv"

console.log(url.replace('%2','-'))
console.log(url.includes('hmt'))
console.log(gameName.split('-'))
