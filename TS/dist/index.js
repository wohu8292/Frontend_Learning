"use strict";
let hey = "woong";
let numbers = [1, 2, 3];
let user = [1, 'woong'];
user[0].toExponential;
let mySize = 2;
function calculateTax(income, taxYear) {
    return 15;
}
let employee = {
    id: 1,
    name: 'woong',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof (weight) === 'number') {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2;
    }
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function greet(name) {
    if (name) {
        console.log(name.toUpperCase());
    }
    else {
        console.log('Hola!');
    }
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday.getFullYear);
//# sourceMappingURL=index.js.map