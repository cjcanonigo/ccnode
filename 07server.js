let stringLiteral = `
server07
File System manipulation: open a file or create one.
If the file doesn't already exist, it will create one.
`;

console.log(stringLiteral);

let fs = require('fs');

const newFile = '07newFile.txt';

let handleOpenError = (err) => {
    if (err) throw err;
    console.log('Data saved via open!');
};

fs.open(newFile, 'w', handleOpenError); //'w' is for write
