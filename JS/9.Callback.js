//callback: function passed as an argument to another function
function helloThere1(callback){
    setTimeout(()=>{
        console.log("person1: hello")
        callback()
    },1500)
}

function helloThere2(callback){
    setTimeout(()=>{
        console.log("person2: hello")
        callback()
    },1500)
}

function helloThere3(callback){
    setTimeout(()=>{
        console.log("person3: hello")
        callback()
    },1500)
}


helloThere1(()=>{               
    helloThere2(()=>{                   // callback 인자값으로 helloThread2 를 실행시키는 함수 전달
        helloThere3(()=>{
            console.log("done")
        })
    })
})
