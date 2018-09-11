//Edit the file system - read a file
let http = require('http');
let fs = require('fs');
let htmlFile = '04html.html';

let pageData = (req, res) => {
    fs.readFile(htmlFile, (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data);
        res.end();
    });
};

http.createServer(pageData).listen(8080);

let stringLiteral = `
server04
File System manipulation - read a file.
`;

console.log(stringLiteral);