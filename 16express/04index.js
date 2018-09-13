//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48


const express = require('express');
const app = express();
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

app.get('/api/courses/:id', (req, res) => {
    //We want to get information related to a specific course id
    // we can find the ID in the courses array with .find
    // .find's parameter is a function that should result in a bool
    // since the id in courses array is an int, 
    // and req.params.id resolves to a string, 
    //we need to parse the params.id to int.
    const course = courses.find(c => c.id === parseInt(req.params.id));
    // if resource isn't found, show 404
    if (!course) res.status(404).send('The course with the given ID was not found.');//404
    res.send(course);
});


const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));

let tryUrls = [];
tryUrls.push('http://localhost:5000/api/courses/123'); //will be 404
tryUrls.push('http://localhost:5000/api/courses/1'); 
tryUrls.forEach(element => {console.log('try: ' + element);});
