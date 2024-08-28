// Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toDateString())
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString())
// console.log(typeof myDate)


let mycurrentDate = new Date("01-14-2024")
// console.log(mycurrentDate.toLocaleString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(mycurrentDate.getTime())
// console.log(Math.floor(Date.now()/3600)) // calculated from 1972 year

let newDate = new Date()
// console.log(newDate)

// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())


console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))