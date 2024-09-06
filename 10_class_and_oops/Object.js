function multiplyBy(num){
    return num*5
}
// function array string can be related to object.
multiplyBy.power = 2

console.log(multiplyBy(5))
console.log(multiplyBy.power)
console.log(multiplyBy.prototype)


function createUser(username, score){
 this.username = username
 this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = new createUser('chai', 25)
const tea = new createUser('tea', 205)


chai.printMe()
tea.printMe()