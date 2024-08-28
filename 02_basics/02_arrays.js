const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ['superman', 'flash', 'batman']

// marvel_heros.push(dc_heros)
const allheros = [...marvel_heros,...dc_heros]
// console.log(allheros)

const another_array = [1,2,3,[1,2,3,[1,1,2,3]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array.sort());

// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting




let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));