function route(handle, pathname, response, postData) {
    if (typeof handle[pathname] === 'function') {
	handle[pathname](response, postData);
    }
    else {
	response.writeHead(404);
	console.log("Could not find a handle for " + pathname);
	response.write('404 not found');
	response.end();
    }
}

exports.route = route;

 