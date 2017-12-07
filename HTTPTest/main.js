/*

https://gist.github.com/creationix/707146
https://nodejs.org/api/net.html
https://gist.github.com/tedmiston/5935757

Command line parameters: parseInt(process.argv.slice(2)[0]));

*/

var net = require('net');

function BuildHTTPGETRequest(path, hostAndPort) {
    return 'GET ' + path + ' HTTP/1.1\r\nHost: ' + hostAndPort + '\r\nConnection: close\r\n\r\n';
}

var client = new net.Socket();

client.on('data', function(data) {
	console.log('Received:\r\n' + data);
	client.destroy();
});

client.on('close', function() {
	console.log('Connection closed');
});

client.connect(8181, '10.250.45.142', function() {
	console.log('Connected');
	client.write(BuildHTTPGETRequest('/hawtio/login', 'cbblvfensqa01:8181'));
});
