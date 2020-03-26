function sayHello(name, count) {
    console.log('Hello ' + name + ' : ' + count);
}

function sayHelloRepeater(name) {
    sayHello(name, count);
    count = count + 1;

    if(count < 10) {
        setTimeout(sayHelloRepeater, 1500, name);
    }
}

global.console.log('Running ...');
let count = 0;
sayHelloRepeater('Generic message ...');
