// Arrow Functions

const user = {
    username: "achintya",
    price : 999,
    isLoggedIn: true,

    welcomeMsg: function(){
        console.log(`Welcome to website, ${this.username}.`)
        console.log(this)
    }

}


// user.welcomeMsg()
// user.username = "acm"
// user.welcomeMsg()

// function chai(){
//     let username = "hitesh"
//     console.log(this.username)
// }

// chai()

const chai = () => {
    let username = "hitesh"
    console.log(this)
}

// chai()

// arrow function
// Explicit Return
const addTwo = (num1,num2) => {
    return num1+num2
}

// console.log(addTwo(1,2));


//implicit return 
const addone = (num1,num2) => (num1+num2)

// console.log(addone(1,2))

//to return object using arrow function.

const obj = () => ({username:"achintya"})
// console.log(obj());



