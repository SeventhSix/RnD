'use strict';

// ==================================================================================================================================

function showMembers(obj) {
    for(let key in obj) console.log(key);
}

// ==================================================================================================================================

function showDivider() {
    console.log("======================================================================================================");    
}

// ==================================================================================================================================

function User(name) {
    this.name = name;

    this.sayHi = function(name) {
        let surname = name;
        console.log("My name is: " + this.name + " " + surname);
    };
}

// ==================================================================================================================================

function setPropertyFlag(obj, property, flag, value) {
    Object.defineProperty(obj, property, {
        flag: false
    });
}

// ==================================================================================================================================

showDivider();

let user = new User("Jack");
user.sayHi("Sparrow");

showDivider();

Object.defineProperty(user, "name", {
  writable: false
});

let desc = Object.getOwnPropertyDescriptor(user, 'name');
console.log("desc: " + desc);
console.log("desc (JSON): " + JSON.stringify(desc, null, 2));

// SS made this change

/*
showMembers(desc);

showDivider();

showMembers(user);

showDivider();

console.log(user.sayHi.name);

showDivider();

console.dir([1,2,3]);

showDivider();

*/