//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48

// requires npm package joi
// npm i joi

const Joi = require('joi'); 
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
    const { error } = validateCourse(req.body); 
    // simplified below to a single line
    if (error) return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //Fixed error - added return so the code exits
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    const { error } = validateCourse(req.body); 

    // simplify below
    if (error) return res.status(400).send(error.details[0].message);

    course.name = req.body.name;
    res.send(course);
}); 

app.delete('/api/courses/:id', (req, res) => {
    //Look up the course
    //Not existing - return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //There was an error in the below line - without the return, the rest of 
    // the code block would execute.
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    //Delete
    // find index of course in our course array
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    //Return the same course
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    //updated bug -- added return
    if (!course) return res.status(404).send('The course with the given ID was not found.');
    res.send(course);
});



const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));

