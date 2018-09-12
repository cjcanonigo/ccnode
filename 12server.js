let stringLiteral = `
server12
Events Handling
`;

console.log(stringLiteral);

let fs = require('fs');
let file = './12demofile.txt';
let rs = fs.createReadStream(file);

rs.on('open', () => {
    console.log('Who opened this file?!');
});

let events = require('events');
let eventEmitter = new events.EventEmitter();

//create event handler
let handleEvent = () => {
    console.log('Dog poked.');
};

//assign event handler to event
eventEmitter.addListener('pokeDog', handleEvent);

//Fire the event
eventEmitter.emit('pokeDog');


