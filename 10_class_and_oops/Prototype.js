// let myName = 'achintya'

// need to create property to print true lenght

// console.log(myName.truelength);

let myHeros = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.hitesh = function(){
    console.log('hitesh is present')
}

// heroPower.hitesh()
Array.prototype.heyAchintya = function(){
    console.log('hey achintya')
}
heroPower.hitesh()
myHeros.hitesh()
myHeros.heyAchintya()
// heroPower.heyAchintya()


//inheritance
const User = {
    isAvailable: true
}

const Teacher ={
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = 'chaiaurcode    '

String.prototype.truelength = function(){
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.truelength()