//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48
//Post Requests - input validation

// requires npm package joi
// npm i joi

const Joi = require('joi'); //note that this returns a class, hence the Pascal naming convention
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
    const { error } = validateCourse(req.body); //equivalent to result.error
    // if invalid, return 400 - bad request
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {//update specific record
    // look up course
    // if not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.');//404
    // validate
    // const result = validateCourse(req.body);
    //object desctructoring of above
    const { error } = validateCourse(req.body); //equivalent to result.error
    // if invalid, return 400 - bad request
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    // update course
    course.name = req.body.name;
    // Return the updated course
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
    if (!course) res.status(404).send('The course with the given ID was not found.');//404
    res.send(course);
});



const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));

