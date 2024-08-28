// singleton object
// Object.create

//object literals

const mySym = Symbol('key1')

const JsUser ={
    name: 'Achintya',
    "full name": "Achintya Shrivastava",
    [mySym]: 'mykey1',
    age:10,
    email: 'achintya@gmail.com',
    location: 'gkp',
    isLoggedin: false,
    lastlogindays: ['Monday','Sunday']

}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh"
// Object.freeze(JsUser)
// JsUser.email= 'haioudioa'
// console.log(JsUser["email"])

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());