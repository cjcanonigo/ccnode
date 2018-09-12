let stringLiteral = `
server14
Upload file from http to local storage (project folder).
`;
console.log(stringLiteral);

//Install the formidable package
//npm install formidable

let formidable = require('formidable');
let http = require('http');
let fs = require('fs');

//Build upload form
let pageData = (req, res) => {
    let file = './14html.html';
    if (req.url == '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            let oldpath = files.filetoupload.path;
            let newpath = './14' + files.filetoupload.name;
            fs.rename(oldpath, newpath, err => {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });

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