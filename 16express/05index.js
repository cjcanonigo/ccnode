//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48
//HTTP Post Requests

/* To test post requests, use Chrome plugin called Postman 
explanation here (roughly): https://youtu.be/pKd0Rpw7O48?t=35m15s */


const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    { id: 1, name: 'course1' },
    { id: 2, name: 'course2' },
    { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
    res.send('Hello World!'); 
});

app.get('/api/courses', (req, res) => {
    res.send(courses); 
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1, // with database, the database will assign this
        name: req.body.name //this needs to be enabled. see app.use at the top
    };
    courses.push(course);
    //typically, you send this back to the client
    res.send(course);
});


app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.');//404
    res.send(course);
});


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));

// let tryUrls = [];
// tryUrls.push('http://localhost:5000/api/courses/123');
// tryUrls.push('http://localhost:5000/api/courses/1'); 
// tryUrls.forEach(element => {console.log('try: ' + element);});


