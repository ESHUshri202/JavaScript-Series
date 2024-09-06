// Object Literals
const user = {
    username: 'achintya',
    loginCOunt: 8,
    isLoggedIn: true,
    getUserDetail: function(){
        console.log(this.username);
    }
}


// console.log(user.username);
// console.log(user.getUserDetail());

// console.log(this);


// Construction Function
// new and this are the construction function
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn =  isLoggedIn

    this.greeting = () =>{
        console.log(`Welcome ${this.username}`);
    }
    return this
}
// new keyword used to create new object or argument.
const userOne = new User('achintya',9,true)
const userTwo = new User('palli',7,false)
// value can be overwrite...
// constructor property is the reference of itself.
console.log(userOne.constructor);
// console.log(userTwo);



//instanceof 
// search above context on mdn

//prototype behaviour


