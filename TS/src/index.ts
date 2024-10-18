//detect type based on value
// let sales: number = 123_456_789
let sales = 123_456_789
let course = 'TypeScript'
let is_published = true
let level

//____________________________________________________________________

//applying implicit "any" to document variable (fix in tsconfig file)
function render(document){
    console.log(document)
}

//____________________________________________________________________

//array
let numbers: number[] = []
//numbers[0]='hello'        //error because type of array is number

//____________________________________________________________________

//tuple: fixed length array, 2 value is practice
let user: [number, string] = [1, 'mosh']

//____________________________________________________________________

//enum
const enum Size {Small=1, Medium, Large}      //Medium becomes 2, Large becomes 3 // 's' 는 explicit 지정
let mySize: Size = Size.Medium
console.log(mySize)

//____________________________________________________________________

//function
//tsconfig: noUnusedParameter, noImplicitReturns, noUnusedLocals
function calculateTax(income:number, taxYear=2022): number{
    //should properly annotate return type // if no return, type is void
    //taxYear=2022 is default value, if parameter is given, value will be overwritten
    if(taxYear<2022){
        return income*1.2
    }else{
        return income*1.3
    }
    return 0
}

calculateTax(10_000, 2023)

//____________________________________________________________________

//object
type Employee={
    readonly id:number, 
    name?:string,
    retire:(date: Date)=> void,
}

let employee: Employee= {
    id:1,
    name:'mosh',
    retire:(date: Date)=>{console.log(date)},
    }

employee.name='mosh'

//____________________________________________________________________

//union types
function kgToLbs(weight: number | string){
    //narrowing
    if(typeof weight === "number"){
        return weight*2.2
    }else{
        return parseInt(weight)*2.2
    }
}

//____________________________________________________________________

//intersection type
type Draggable={drag: ()=>void}
type Resizable={resize: ()=>void}
type UIWidget=Draggable & Resizable

let textBox: UIWidget={
    drag: ()=>{},
    resize: ()=>{}
}

//____________________________________________________________________

//literal types (exact, specific)
type Quantity = 50 | 100
let quantity: Quantity=100

//____________________________________________________________________

//nullable types

function greet(name: string | null){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log('holla!')
    }

// 또는 strictNullChecks
greet(null)

//____________________________________________________________________

//optional chaining
type Customer={
    birthday?: Date
}

function getCustomer(id: number): Customer | null{
    return id === 0 ? null: {birthday: new Date()}
}

let customer = getCustomer(0)
//execute when value is not null and undeined
console.log(customer?.birthday?.getFullYear())

//optional element access operator for array
//customers?.[0]

//optional call
let log: any = null
log?.('a')