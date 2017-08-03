'use strict';

// ==================================================================================================================================

// Object definition - to be used with new

function SayObject(name) {
    this.name = name;

    this.sayHi = function(name) {
        let surname = name;
        console.log("My name is: " + this.name + " " + surname);
    };
}

// ==================================================================================================================================

// Class definition - to be used with new or for inheritance

class SayClass {
    constructor(name) {
        this.name = name;
    }

    sayHi(name) {
        let surname = name;
        console.log("My name is: " + this.name + " " + surname);
    };
}

// ==================================================================================================================================

// Class factory - inheritance

function SayClassFactory (p1) {
    if (p1.startsWith("o")) {
        return class {
            constructor(name) {
                this.name = name;
            }

            sayHi(name) {
                let surname = name;
                console.log("My name is: " + this.name + " " + surname + " - [One]");
            };
        }
    }
    else {
        return class {
            constructor(name) {
                this.name = name;
            }

            sayHi(name) {
                let surname = name;
                console.log("My name is: " + this.name + " " + surname + " - [Two]");
            };
        }
    }
}

class ManufacturedSayClassOne extends SayClassFactory("one") {
}

class ManufacturedSayClassTwo extends SayClassFactory("two") {
}

// ==================================================================================================================================

// Enumerates the members of an object - hint can be used on sustem objects as well ;)

function showMembers(obj) {
    for(let key in obj) console.log(key);
}

// ==================================================================================================================================

function showDivider() {
    console.log("======================================================================================================");    
}

// ==================================================================================================================================

// Change the Read-Only status of a property - to enable getteer and setter or just getter

function setPropertyWritableFlag(obj, property, value) {
    Object.defineProperty(obj, property, {
        writable: value
    });
}

// ==================================================================================================================================

// Get the intrinsic/internal properties of a member property, function, etc.

function getPropertyProperties(obj, property) {
    let propertyDescriptor = Object.getOwnPropertyDescriptor(obj, property);
    return propertyDescriptor;
}

// ==================================================================================================================================

showDivider();

let o1 = new SayObject("Object");
o1.sayHi("Sparrow");
showMembers(o1);

showDivider();

let o2 = new SayClass("Class");
o2.sayHi("Sparrow");
showMembers(o2);

showDivider();

let o3 = new ManufacturedSayClassOne("ClassFactory");
o3.sayHi("Sparrow");
showMembers(o3);

let o4 = new ManufacturedSayClassTwo("ClassFactory");
o4.sayHi("Sparrow");
showMembers(o4);

showDivider();

setPropertyWritableFlag(o1, "name", false);
let desc = getPropertyProperties(o1, 'name');
console.log("desc (JSON): " + JSON.stringify(desc, null, 2));

showDivider();
