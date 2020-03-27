var os = require('os');

function sayHello(name, count) {
    console.log('Hello ' + name + ' : ' + count);
}

function sayHelloRepeater(name) {
    sayHello(name, count);
    count = count + 1;

    if(count < 2) {
        setTimeout(sayHelloRepeater, 1500, name);
    }
}

global.console.log('Running ...');
console.log('==============================================================');
console.log('');
console.log(os.cpus());
console.log('');
console.log('==============================================================');
console.log('');

let count = 0;
sayHelloRepeater('Generic message ...');
