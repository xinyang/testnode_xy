var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
	var postData = "";
	var pathname = url.parse(request.url).pathname;
	console.log("Request for " + pathname + " received.");
	request.setEncoding("utf8");
	request.addListener("data", function(postDataChunk){
	    postData += postDataChunk;
	    console.log("Received POST data chunk" + postDataChunk);
	});

	request.addListener("end", function(){
	    route(handle, pathname, response, postData);
	});
	
    }

    var httpServer = http.createServer(onRequest);
    httpServer.listen(80);
    console.log("Server started.");
}

exports.start = start;