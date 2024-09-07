//Destructuring = extract value from Array or Object

//#1. Swap the Value
let a = 1
let b = 2
[a,b]=[b,a]     
// result: a=2, b=1

///////////////////////////////////////////////////////////////////////////////////////////

//#2. Swap two valueo in Array 
const colors = ["red", "blue", "orange", "black", "purple"]
[colors[0],[3]]=[colors[3],[0]]
// result: colors[0]="black", colors[3]="red"

///////////////////////////////////////////////////////////////////////////////////////////

//#3. Assign Array or Object elements to variable
const animals = ["bear", "dog", "cat"] 
const[animal1, animal2, animal3] = animals
// result: animal1="bear", animal2="dog"

///////////////////////////////////////////////////////////////////////////////////////////

//#4. Extract Value from Object
const person ={
    firstName: "Woong Kyeol",
    lastName: "Huh",
    school: "CU Boulder"
}

const{fName,lName, school} = person
//result: fName="Woong Kyeol", school="CU Boulder"

///////////////////////////////////////////////////////////////////////////////////////////

//#5. Destructure as Function Parameters
const product ={
    name: "iphone",
    price: "400"
}

function displayProduct({name, price}){
    console.log(`name: ${name}, price: ${price}`)
}

displayProduct(product)
//result: "name: iphone, price:400"
