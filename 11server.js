let stringLiteral = `
server11
Connect http to file system.
try going to: http://localhost:8080/summer.html
or try: http://localhost:8080/winter.html
anything else will have 404 error.
`;

console.log(stringLiteral);

let http = require('http');
let fs = require('fs');
let url = require('url');

let pageData = (req, res) => {
    let q = url.parse(req.url, true);
    let htmlFile = '.' + q.pathname.replace('/','/11'); //example files start w/ 11
    fs.readFile(htmlFile, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
};

http.createServer(pageData).listen(8080);
