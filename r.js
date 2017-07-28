'use strict';

function User(name) {
    this.name = name;

    this.sayHi = function(name) {
        let surname = name;
        console.log("My name is: " + this.name + " " + surname);
    };
}

// ==================================================================================================================================

function showMembers(obj) {
    for(let key in obj) console.log(key);
}

// ==================================================================================================================================

function showDivider() {
    console.log("======================================================================================================");    
}

// ==================================================================================================================================

function setPropertyWritableFlag(obj, property, value) {
    Object.defineProperty(obj, property, {
        writable: value
    });
}

// ==================================================================================================================================

function getPropertyProperties(obj, property) {
    let propertyDescriptor = Object.getOwnPropertyDescriptor(obj, property);
    return propertyDescriptor;
}

// ==================================================================================================================================

showDivider();

let user = new User("Jack");
user.sayHi("Sparrow");

showDivider();

setPropertyWritableFlag(user, "name", false);
let desc = getPropertyProperties(user, 'name');
console.log("desc (JSON): " + JSON.stringify(desc, null, 2));

showDivider();

showMembers(user);

showDivider();
