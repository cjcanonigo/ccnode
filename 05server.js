//add to a text to an existing file
let stringLiteral = `
server05
File System manipulation: 
    -add a line of text to an existing file
    -add a line of text to a new file, using append
    -deletes the new file created
`;

console.log(stringLiteral);

let fs = require('fs');

const myFile = '05existingfile.txt';
const textToAppend = '\nLook, I added a new line.';
const newFile = '05newfile.txt';
const newFileText = 'I created a brand new file!';

let handleAppendError = err => {
    if(err) throw err;
    console.log('Data was saved!'); //if no error, print this
};

// Add to existing file
fs.appendFile(myFile, textToAppend, handleAppendError);

// Create new file
fs.appendFile(newFile, newFileText, handleAppendError);

