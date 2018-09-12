let stringLiteral = `
server15
Send an email. With attachment.
`;
console.log(stringLiteral);

//Install the nodemailer package
//npm install nodemailer
//https://community.nodemailer.com/using-attachments/

let nodemailer = require('nodemailer');
//Note that the below file is excluded from git since it contains emails/pws.
let creds = require('./15creds.json');
/* The above json file is formatted this way:
{
    "sender": "senderemail@gmail.com",
    "senderSecret": "senderemailpassword",
    "recipient": "recipientemail@gmail.com"
}
*/

let sender = creds.sender;
let senderSecret = creds.senderSecret;
let recipient = creds.recipient;
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: sender,
        pass: senderSecret
    }
});

let mailOptions = {
    from: sender,
    to: recipient,
    //syntax for multiple recipients:
    //to: 'myfriend@yahoo.com, myotherfriend@yahoo.com',
    subject: 'Want some node?',
    text: "Too bad! Here's a graph instead :)",
    //to send html instead:
    //html: '<h1>Welcome</h1><p>That was easy!</p>'
    attachments: [
        {
            filename: 'coolChart.png',
            path: './15chart.png'
        }
    ]
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) throw error;
    console.log('Sent the email. Response: ' + info.response);
});