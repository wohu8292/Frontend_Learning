alert('hello')

const ele = document.querySelector('.js-button')
ele.innerText
ele.classList.add("is-subscribed")
ele.innerHTML="subscribed"

//'$'+20.95+7.99 = '$20.957.99'

'I\'m learning javascript'

alert('some\ntext')     //new line character

`some
text`

Math.random()

// ________________________________________________________

const product2={
    delivery:'shirt', 
    ['delivery-time']:'1day',
    func: ()=>{console.log("helllo")}
}

product2['delivery-time']           // - considered minus in dot notation
product2.delivery
product2.func() 

console.log(typeof console)         //object
console.log(typeof console.log)     //function
                                    //function in object => method

//{"json: "shirt"}                  
    //json doesn't support single quote
    //json doesn't support function

const jsonString = JSON.stringify(product2)            
    //object->JSON 
    // func will be excluded 
    // type of = string

JSON.parse(jsonString)                
    //JSON->object

// ________________________________________________________

localStorage.setItem('score', JSON.stringify(score))
    //(dataName, string), localStorage only support string
const saveScore = JSON.parse(localStorage.getItem('score')) || {wins:0, loses:0, ties:0}
localStorage.removeItem('score')
    //return null property
    //so, set default value. (if score==null){score={wins:0, losse:0, ties:0}} 
    //falsy value: false, 0, '', undefined, null / if(score===null) = if(!score)

// ________________________________________________________

const object1 = {message: 'hello'}
const object2 = object1
object1.message='good job'
console.log(object2) 
    // const2 will have same object as object1, because variable is just referencing (having address)

