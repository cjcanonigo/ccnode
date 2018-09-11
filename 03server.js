//check the url string
let http = require('http');
let url = require('url');

let pageData = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.write('<br />');
    let q = url.parse(req.url, true).query;
    let txt = q.year + ' ' + q.month;
    res.write(txt);
    res.end();
};

http.createServer(pageData).listen(8080);

let stringLiteral = `
server03
Go to this url:
http://localhost:8080/summer?year=2018&month=July
`;

console.log(stringLiteral);