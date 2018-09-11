//add to a text to an existing file
let stringLiteral = `
server06
File System manipulation: deletes existing file
`;
console.log(stringLiteral);

let fs = require('fs');

let fileToDelete = '06deleteme.txt';

let handleDeleteError = err => {
    if (err) throw err;
    console.log('File deleted!');
};

fs.unlink(fileToDelete, handleDeleteError);
