var http = require("http");
var server = http.createServer(function(request, response) {
    let body = [];
    request.on('data', function(chunk) {
        body.push(chunk);
        console.log("Begin receiving data");
    }).on('end', function() {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
        console.log("Received data", body);
        
        response.on('error', function(err) {
            console.error(err);
        });
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("OK");
        response.end();

    }).on('error', function(err) {
        // This prints the error message and stack trace to `stderr`.
        console.error(err.stack);
    });
});

server.listen(1234);
console.log("Server is listening");
