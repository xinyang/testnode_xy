var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handle= {};
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/boink'] = requestHandler.boink;

server.start(router.route, handle);