function saymyname(){
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");   
}

// saymyname()
// parameters passing 
// function addTwoNumber(number1,number2){
//     console.log(number1 + number2)
// }
function addTwoNumber(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumber(2,3) // arguments passing 

// console.log("Result :" , result)

function loginuserMessage(username){
    if(!username){
        console.log("Enter a username")
        return "enter......"
    }
    return `${username} just logged in`
}

const log = loginuserMessage()

// console.log(log);

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,210,400))

const user = {
    username : "achintya",
    prices: 1554
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject(user)

