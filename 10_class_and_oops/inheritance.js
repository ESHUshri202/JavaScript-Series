class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai = new Teacher("chai.", "am@gmail.com")

chai.addCourse()
const masalachai = new User('chai0','em@gmail.com')

masalachai.logMe()

console.log(chai instanceof User);
console.log(chai instanceof Teacher)

