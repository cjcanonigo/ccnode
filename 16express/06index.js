//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48
//Post Requests - input validation

/* To test post requests, use Chrome plugin called Postman 
explanation here (roughly): https://youtu.be/pKd0Rpw7O48?t=36m21s */


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
    if (!req.body.name || req.body.name.length < 3){
        //400 Bad Request
        res.status(400).send('Name is required and should be minimum 3 characters.');
        return; 
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
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

