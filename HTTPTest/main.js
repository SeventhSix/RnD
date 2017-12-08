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

function Test1(ipAddress, portNumber, requestPath, hostHeader) {
	let client = GetTestSocket();

	client.connect(portNumber, ipAddress, function() {
		console.log('# Connected:');

		let httpRequest = 'GET ' + requestPath + ' HTTP/1.1\r\nHost: ' + hostHeader + '\r\nConnection: close\r\n\r\n';
		client.write(httpRequest);
		console.log('# Sent:\r\n' + httpRequest);
	});
}

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


let ipAddress = '10.250.45.142';
let portNumber = 8181;
let requestPath = '/hawtio/login';
let hostHeader = 'cbblvfensqa01:8181';

Test3(ipAddress, portNumber, requestPath, hostHeader);

sleep(1500);