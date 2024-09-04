// The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// state of promise (pending, fullfill and reject)

const promiseOne = new Promise((resolve, response)=>{
    // do an async task
    // DB calls, cryptography, network
    setTimeout(()=>{
        console.log("Async task is complete")

    },1000)
})

promiseOne.then(()=>{
    console.log("Promise consume")
})

new Promise((resolve, response)=>{
    setTimeout(()=>{
        console.log("Async Task 2")
        resolve()
    },1000)
}).then(()=>{
    console.log('Async to resolve');  
})


const PromiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username: 'chai', email: 'chai@example.com'})
    },1000)
})

PromiseThree.then((user)=>{
    console.log(user)
    console.log(user.username)
})

const PromiseFour = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"achintya",password:"123"})
        }
        else{
            reject("Error:SOmething went wrong")
        }
    },1000)
})
console.log(PromiseFour)
const username = PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).catch((error)=>{
    console.log("error found: ",error)
}).finally(()=>{
    console.log("Problem is resolved")
})
console.log(PromiseFour)

const promiseFive = new Promise(function(resolve,reject){
    
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"achintyafa",password:"12fa3"})
        }
        else{
            reject("Error:SOmethinffg went wrong")
        }
    },1000)
})

async function consumePromise(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
}

consumePromise()


async function getAll(){
    try {
        const response = await fetch("https://www.google.co.in")
        const data = response.json()
        console.log(data);
    
    } catch (error) {
        console.log(eror)    
    }
    
}