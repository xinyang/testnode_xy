var http = require('http');
var httpServer = http.createServer(function(req, res) {
    res.writeHead('200');
    res.end('Hello World!');
});

httpServer.listen(80);

/*
var nowjs = require('now');
var everyone = nowjs.initialize(httpServer);

everyone.now.logStuff = function(msg){
    console.log(msg);
};
*/