//basic
let hey:string = "woong"

//array
let numbers:number[] = [1,2,3]

//tuple
let user:[number, string] = [1, 'woong']
user[0].toExponential

//enum
const enum Size {small=1, medium=2, large=3}
let mySize:Size=Size.medium

//function
function calculateTax(income:number, taxYear?:number): number{
    return 15
}

//type Aliases (you can use interface as well)
type Employee={
    readonly id:number, 
    name:string
    retire:(date:Date)=>void
}

//object
let employee:Employee={
        id:1, 
        name:'woong', 
        retire:(date:Date)=>{
            console.log(date)}}

//union types
function kgToLbs(weight:number|string):number{
    if(typeof(weight)==='number'){
        return weight*2.2
    }else{
        return parseInt(weight)*2.2
    }}

//intersection types
type Draggable={
    drag:()=>void
}

type Resizable={
    resize:()=>void
}

type UIWidget=Draggable&Resizable

let textBox:UIWidget={
    drag:()=>{},
    resize:()=>{}
}

//literal types(exact, specific value)
type Quantity=50 | 100
let quantity:Quantity=100

//nullable types
function greet(name:string | null){
    if(name){
        console.log(name.toUpperCase())
    }else{
        console.log('Hola!')
    }
}
greet(null)

//optional chaining
 type Customer={
    birthday:Date
 }

 function getCustomer(id:number): Customer|null|undefined{
    return id===0?null: {birthday: new Date()}
 }

 let customer = getCustomer(1)
 console.log(customer?.birthday.getFullYear)        //execute when it's not null or undefined
