// Anonymous Function (hoisting X, memory saving)

// name1()     // error
let name1 = function(){
    console.log("hello, World1")
}
name1()     // work

//////////////////////////////////////////////

// Named Function

name2()     // work
function name2(){
    console.log("hello, World2")
}
name2()     // work

//////////////////////////////////////////////

// Arrow Function

// name3()     // error
var name3 = ()=>{
    console.log("hello, World3")
}
name3()     // work

//////////////////////////////////////////////

const objectName = [
    {id:1, bookName:"wonderland"},
    {id:2, bookName:"tree"}
]

// {} 대신 () 가 들어가면 direct return
objectName.map((object, index)=>(
    <div key={object.id}></div>
))