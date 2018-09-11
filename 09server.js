let stringLiteral = `
server09
File System manipulation: rename a file.
`;

console.log(stringLiteral);

let fs = require('fs');

let fileToRename = '09renameMe.txt';
let renameText = '09IHaveBeenRenamed.txt';

let handleRenameError = (err) => {
    if (err) throw err;
    console.log('File Renamed!');
};

fs.rename(fileToRename, renameText, handleRenameError);