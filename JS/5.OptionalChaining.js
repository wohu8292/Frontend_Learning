//Optional Chaining = it allows you to access properties or method on potentially null or undefined object
// without crushing error

const user={
    name: "John",
    address: null
}

var city = user.address?.city
var home = user?.home

console.log(city)
//result: undefined (error 대신에)
console.log(home)
//result: undefined (error 대신에)
