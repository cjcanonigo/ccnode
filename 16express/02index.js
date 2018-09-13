//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!'); 
});

app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]); 
});

// Edit the port so it's dynamic
// Pull environment value, or default to 3000
const port = process.env.PORT || 3000; 
app.listen(port, () => console.log(`Listening on port ${port}...`));