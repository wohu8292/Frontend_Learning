//module.exports 는 require
//export 는 import from

const lastName="Huh"

function name(){
    return console.log("woongKyeol")
}

function hello(){
    return console.log("helloWorld")
}

export default lastName;        // default value 는 import 할때 이름 상관없음
export {name,hello}             // default value 가 아니면 정확히 명시 // 
                                // import * as compo, compo.name() / compo.hello()