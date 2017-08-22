'use strict';

// ==================================================================================================================================

//      #########   DOCUMENTATION -> https://javascript.info/

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

// Classes provide "super" keyword:
//      super.method(...) to call a parent method.
//      super(...) to call a parent constructor (inside our constructor only).

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

// Class factory - to be used with new or for inheritance

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

// Extending JavaScript Native Classes / Objects

class PowerArray extends Array {
    containsStuff() {
        return this.length != 0;
    }
}

// ==================================================================================================================================

// Property getters and setters

class PropertyBagNOT  {
    constructor() {
        this.name = "Louis";
        this.surname = "Sparrow";
    }

    get Name() {
        return this.name;
    }
    
    get Surname() {
        return this.surname;
    }
    
    set Surname(value) {
        this.surname = value;
    }
}

// ==================================================================================================================================

// Adds a property to na object dynamically at runtime - mindblowing

class userClass {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

function AddPropertyDynamically(obj, propName) {
    Object.defineProperty(obj, propName, {
        get() {
            return `${this.name} ${this.surname}`;
        },

        set(value) {
            [this.name, this.surname] = value.split(" ");
        }
    });
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

// Get the intrinsic/internal properties of a member property, function, etc.

function getPropertyValue(obj, property) {
    return obj[property];
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

console.log("o4[name] = " + getPropertyValue(o4, "name"));
console.log("o4[Name] = " + getPropertyValue(o4, "Name"));

showDivider();

let po1 = new PropertyBagNOT();
console.log("po1.name [" + po1.name + "]");
console.log("po1.surname [" + po1.surname + "]");
console.log("po1.Name [" + po1.Name + "]");
console.log("po1.Surname [" + po1.Surname + "]");

// -----> FAILS - Setter Missing ----> po1.Name = "C-Louis";
po1.Surname = "C-Sparrow";
console.log("po1.Name [" + po1.Name + "]");
console.log("po1.Surname [" + po1.Surname + "]");

showDivider();

let arr = new PowerArray(1, 2, 3, 10, 11, 12, 50, 51, 52);
console.log("Extending JavaScript Natives is [" + arr.containsStuff() + "] fun!");

showDivider();

setPropertyWritableFlag(o1, "name", false);
let desc = getPropertyProperties(o1, 'name');
console.log("desc (JSON): " + JSON.stringify(desc, null, 2));

showDivider();

let user = new userClass("John", "Smith");
AddPropertyDynamically(user, 'fullName');
console.log(user.fullName);

showDivider();

let user1 = new userClass("John", "Smith");
console.log("user1 is of class 'userClass': " + user1 instanceof userClass);
console.log("user1 is of class 'PropertyBagNOT': " + user1 instanceof PropertyBagNOT);

showDivider();

let s = "Louis Steyn";
let s1 = s.substr(0, 5);
let s2 = s.substr(6, 5);
console.log(s);
console.log(s1);
console.log(s2);

showDivider();



showDivider();

