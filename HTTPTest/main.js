/*

https://gist.github.com/creationix/707146
https://nodejs.org/api/net.html
https://gist.github.com/tedmiston/5935757

Command line parameters: parseInt(process.argv.slice(2)[0]));

*/

var net = require('net');
var util = require('util');
var sleep = require('system-sleep');

function GetTestSocket() {
	let client = new net.Socket();
	
	client.on('data', function(data) {
		console.log('# Received:\r\n' + data);
		//client.destroy();
	});

	client.on('close', function() {
		console.log('# Closed:');
		client.destroy();
	});

	return client;
}

// =================================================================================================
// Normal test
// =================================================================================================
function Test1(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\r\nConnection: close\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

// =================================================================================================
// Slow Request
// =================================================================================================
function Test2(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\r';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);

		sleep(3000);

		httpRequest = '\nConnection: close\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

// =================================================================================================
// Slow Headers
// =================================================================================================
function Test3(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\r\nConnection: close\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);

		sleep(3000);

		httpRequest = '\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

// =================================================================================================
// Big Request
// =================================================================================================
function Test4(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\r\n'
		
		for(var i = 0; i < 1000; i++) {
			httpRequest = httpRequest + 'X-Sneaky' + i + ': q\r\n';
		}
		
		httpRequest = httpRequest + 'Connection: close\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

// =================================================================================================
// Bad Request (Specification 1)
// =================================================================================================
function Test5(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/l.l\r\nHost: ' + hostHeader + '\r\nConnection: close\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

// =================================================================================================
// Bad Request (Specification 2)
// =================================================================================================
function Test6(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\r\nCorrection: close\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

// =================================================================================================
// Bad Request (Specification 3)
// =================================================================================================
function Test7(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\r\nConnection: close\r\nX-BadHeader: This is bad\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

// =================================================================================================
// Bad Request (Sneaky)
// =================================================================================================
function Test99(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\n\rConnection: close\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

/*
// =================================================================================================
// HTTP Reference Paramaters - Ensemble
// =================================================================================================
let ipAddress = '10.250.45.142';
let portNumber = 8181;
let requestPath = '/hawtio/login';
let hostHeader = 'cbblvfensqa01:8181';
*/


// =================================================================================================
// HTTP Paramaters - Daniel - http://10.255.8.14:3128/
// =================================================================================================
let ipAddress = '10.255.8.14';
let portNumber = 3128;
let requestPath = '/';
let hostHeader = '10.255.8.14:3128';


Test99(ipAddress, portNumber, requestPath, hostHeader);

sleep(1500);