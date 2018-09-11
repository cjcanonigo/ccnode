//Make your own module
let http = require('http');
let mod = require('./02mod');

let pageData = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(mod.myDateTime());
    res.end();
};

http.createServer(pageData).listen(8080);
console.log('Page loaded using exported module.');