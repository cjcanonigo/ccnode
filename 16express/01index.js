//follow along here: https://www.youtube.com/watch?v=pKd0Rpw7O48
// this goes up to 15min.
// Also, check out some of the Express documentation here:
// http://expressjs.com/en/4x/api.html#req

const express = require('express');
const app = express();

//Root of website
app.get('/', (req, res) => { //route handler
    res.send('Hello World!'); 
    console.log('hiya');
});

//Define a new route
app.get('/api/courses', (req, res) => {
    res.send([1, 2, 3]); //in the future, we can replace this with actual course numbers
});

//As our app grows, we can move these routes around.

app.listen(3000, () => console.log('Listening on port 3000...'));