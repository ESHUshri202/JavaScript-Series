// object singleton

// const tinderUser = new Object()
const tined = {}

tined.id = "123cas"
tined.name = "sam"
tined.isLoggedIn = false

// console.log(tined);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            first_name: "achintya",
            last_name: "srivastava"
        }
    }
}

// console.log(regularUser);


const obj1  = {1:'a', 2:'b'}
const obj2  = {3: 'c', 4:'d'}

const obj3 = Object.assign({},obj1,obj2)

// console.log(obj3);
//spread operator (...)
const obj4 = {...obj1,...obj2}
// console.log(obj4);


const users = [
    {
        // ...
    },
    {
        // ...
    },
]

// console.log(Object.keys(tined))
// console.log(Object.values(tined));
// console.log(Object.entries(tined))
// console.log(tined.hasOwnProperty('isLoggedIn'));

// Object Destructing and JSON API

const course = {
    coursename : "js in hindi",
    price: "99",
    courseInstructor: "hitesh",
}

//course.courseInstructor

const {courseInstructor: itr} = course
//console.log(courseInstructor);
// console.log(itr);

// const course = ({itr}) = {

// }

// APIs (Application Programming Interface)
//It is a software interface that allows two or 
//more computer programs to communicate with each other.


