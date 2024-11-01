function helloThere1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const there1 = true
            if (there1) {
                resolve("person1: hello")
            } else {
                reject("person1: ...")
            }
        }, 1500)
    })
}

function helloThere2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const there2 = true
            if (there2) {
                resolve("person2: hello")
            } else {
                reject("person2: ...")
            }
        }, 1500)
    })
}

function helloThere3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const there3 = true
            if (there3) {
                resolve("person3: hello")
            } else {
                reject("person3: ...")
            }
        }, 1500)
    })
}


helloThere1()
    .then((value) => {
        console.log(value);
        return helloThere2()
    })
    .then((value) => {
        console.log(value);
        return helloThere3()
    })
    .then((value) => {
        console.log(value);
        console.log("you're done")
    })
    .catch((error)=>console.error(error))