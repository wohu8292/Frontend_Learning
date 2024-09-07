// map = apply callback function to each elements of array, than return a new array

function square(element){
    return Math.pow(element, 2)
}

const number=[1,2,3,4,5]
var squaredNum = number.map(square)
//result: [1,4,9,16,25]

////////////////////////////////////////////////////

function formatDates(element){
    const parts = element.split("-")
    return `${parts[1]}/ ${parts[2]}/ ${parts[0]}`
}

const dates =["24-9-05", "28-5-05"]
var formattedDates = dates.map(formatDates)
//result: [ '9/ 05/ 24', '5/ 05/ 28' ]

////////////////////////////////////////////////////

// Filter = create new idea by filtering out elements

let number1 = [1,2,3,4,5,6]
let evenNum = number1.filter(isEven)
//result: [2,4,6]

function isEven(element){
    return element%2===0
}

////////////////////////////////////////////////////

let ages = [16,18,24,32]
let adult = ages.filter(old)
//result: [24,32]

function old(element){
    return element>20
}