//SpreadOperator = ... allows array or string to be expanded into seperate elements


let numbers = [5,2,6,7,4]
let maximum = Math.max(...numbers)
// result: 7 
// ... 없을때: Not a number

//////////////////////////////////////////////////

let username = "Bro Code"
let letters = [...username].join("-")
// result: [ 'Bro Code' ]
// join 전: ['B', 'r', 'o',' ', 'C', 'o','d', 'e'] 
// ... 없을때: B-r-o- -C-o-d-e

//////////////////////////////////////////////////

// combine two array
let fruits1 = ["apple", "orange"]
let fruits2 = ["banana", "pear"]
let newFruits = [...fruits1, ...fruits2]
//result: ['apple', 'orange', 'banana', 'pear']