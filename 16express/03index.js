//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!'); 
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]); 
});

//show the value of a parameter passed in the url
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params.id);
});

//get value from query parameter
app.get('/api/posts/:year/:month', (req, res) => {
    res.send(req.query);
});

const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));

let tryUrls = [];
tryUrls.push('http://localhost:5000/api/courses/123');
tryUrls.push('http://localhost:5000/api/posts/2018/09?sortBy=Name');
tryUrls.forEach(element => {console.log('try: ' + element);});
