//core modules
var http = require('http');
var server = http.createServer(function (req, res) {
    //code here
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.sendDate('Hello World\n');
});

server.listen(5000);

//local modules
var myLogModule = require('./externel.js');
myLogModule.level1(' Local Module Example');


