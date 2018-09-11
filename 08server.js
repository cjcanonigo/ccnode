let stringLiteral = `
server08
File System manipulation: open a file and write to it.
Note that this will overwrite any data.
`;

console.log(stringLiteral);

let fs = require('fs');

let fileToWrite = '08newFile.txt';
let fileText = 'This is new text. Newer than new.';

let handleWriteError = (err) => {
    if (err) throw err;
    console.log('File written to!');
};

fs.writeFile(fileToWrite, fileText, handleWriteError);