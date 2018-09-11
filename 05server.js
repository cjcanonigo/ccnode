//add to a text to an existing file

let fs = require('fs');

const myFile = '05existingfile.txt';
const textToAppend = '\nLook, I added a new line.';

let handleError = err => {
    if(err) throw err;
    console.log('Data was saved!'); //if no error, print this
};

fs.appendFile(myFile, textToAppend, handleError);
let stringLiteral = `
server05
File System manipulation - add a line to an existing file.
`;

console.log(stringLiteral);