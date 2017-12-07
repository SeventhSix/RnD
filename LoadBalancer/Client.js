var util = require('util');
var Client = require('node-rest-client').Client;

var resourceUrl = util.format('http://localhost:%d/', parseInt(process.argv.slice(2)[0]));
var client = new Client();

// direct way 
console.log(util.format('GETting: [%s]', resourceUrl));
client.get(resourceUrl, function (data, response) {
   // parsed response body as js object 
   // console.log(data);
   // raw response 
   console.log(data.toString());
});