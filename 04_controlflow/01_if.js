// `If` Conditional Flow 
const isUserLoggedIn = true
// if(3 != 23) {
//     console.log("Executed")
// }
//Comparision Operator...
//<,>,<=,>=,,==,===,!=,

//if else
// if (condition) {
    
// } else {
    
// }

const score = 200

// if (score > 100) {
//     const power = 'lf'
//     console.log(`Usr${power}`);       
// }

//greater than three number.
// let a= 2
// let b= 3
// let c= 1
// if(a<b){
//     if(b<c){
//         if(c<a){

//         }
//     }
// }

const userLoggedIn = true
const debitcard = true
const userLoggedInUseGoogle = false
const userLoggedWithEmail = true
if(userLoggedIn && debitcard){
    console.log("allow");
}

if(userLoggedInUseGoogle || userLoggedWithEmail){
    console.log("exceuted")
}