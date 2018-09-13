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
    /* With more complex objects, the below comment isn't sustaintable 
    better to use npm package joi.*/
    // if (!req.body.name || req.body.name.length < 3){
    //     //400 Bad Request
    //     res.status(400).send('Name is required and should be minimum 3 characters.');
    //     return; 
    // }

    //with Joi, we need to define a schema.
    const schema = { //the shape of our course object
        name: Joi.string().min(3).required()
    };
    // Joi will do the validation
    const result = Joi.validate(req.body, schema);
    // Try using postman to post a valid json and an invalid one. 
    console.log(result);
    // The original code can be simplified to below
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
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


