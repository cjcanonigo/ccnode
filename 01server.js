//start a server

let http = require('http');


let pageData = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
};

http.createServer(pageData).listen(8080);
console.log('do you see me?');
