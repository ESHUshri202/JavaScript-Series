
// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums
//                 .map((num) => {return num +10})
//                 .map((num) => num + 1)
//                 .filter((num) => num >= 15)
// console.log(newNums)


// reduce method 

// const myNums = [1,2,3]

// const newNums = myNums.reduce((acc,curr)=> {return acc + curr}, 0)

// console.log(newNums);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);