let stringLiteral = `
server15
Send an email. With attachment.
`;
console.log(stringLiteral);

//Install the nodemailer package
//npm install nodemailer
//https://community.nodemailer.com/using-attachments/

let nodemailer = require('nodemailer');

//Load these with real values. I made a new gmail account,
//Populated the below, and sent emails to my regular gmail account.
let sender = ''; //email to send from
let senderSecret = ''; //email pw for above
let recipient = ''; //recipient of email
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
    text: "Too bad! Here's a graph instead.",
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