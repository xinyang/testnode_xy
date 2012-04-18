var fs = require('fs');
var querystring = require('querystring');
var minimal = require('minimal');

function start(response, postData) {
    console.log("Request handler 'start' was called.");
    var htmlText = fs.readFileSync('start.html', 'utf-8');
    response.writeHead(200);
    response.write(htmlText);
    response.end();
}

function boink(response, postData) {
    console.log("Request handler 'boink' was called.");
    response.writeHead(200);
    response.write('<html><body><h1>Boink! Good to see you!'
		   + querystring.parse(postData).text
		   + '</h1></body></html>');
    response.end();
}

exports.start = start;
exports.boink = boink;