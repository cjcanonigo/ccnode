let stringLiteral = `
server13
Upload file from http to local storage (temp folder).
`;
console.log(stringLiteral);

//Install the formidible package
//npm install formidable

let formidable = require('formidable');
let http = require('http');
let fs = require('fs');

//Build upload form
let pageData = (req, res) => {
    let file = './13html.html';
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            res.write('File uploaded.');
            res.end();
        });
    } else {
        fs.readFile(file, (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
};

http.createServer(pageData).listen(8080);
