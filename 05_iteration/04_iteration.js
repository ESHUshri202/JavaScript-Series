// for

for (let index = 0; index < 10; index++) {
    const element = index;
    // console.log(element)
}

for (let index = 0; index < 10; index++) {
    for (let index1 = 0; index1 < index; index1++) {
        // console.log(index1); 
    }  
}

let myArray = ['flash', 'seo', 'len']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element)
}

// break and continue 

// for (let index = 0; index < 10; index++) {
//     for (let index1 = 0; index1 < index; index1++) {
//         console.log(index1); 
//         break;
//     }  
// }
// for (let index = 0; index < 10; index++) {
//     for (let index1 = 0; index1 < index; index1++) {
//         console.log(index1); 
//         continue;
//     }  
// }

// while, do-while 
// while (condition) {
    // increment/decrement
// }
// do {
     // increment/decrement
// } while (condition);


// higher order array loops 

// foreach, for in , for of 

// ["",""]
// [{},{}]

const arr = [1,2,3,4,5]
//for-of
// for(const num of arr){
//     console.log(num);
    
// }

for (const key in arr) {
    console.log(arr[key])
}

//maps
const map = new Map()
map.set('IN',"India")
map.set('us',"USE")
map.set('UN',"UK")
map.set('JN',"Japan")
for(const {key,value} of arr){
    // console.log(num);
    
}
// console.log(map)

const myobj = {
    'game': 'NFS',
    'game2': 'Spiderman'
}

// for (const {key,value} of myobj) {
//     //not working 
// }

