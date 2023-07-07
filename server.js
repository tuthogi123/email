const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'evanskarani076@gmail.com',
        pass: 'iywhtqbvjtteavgv'
    }
});

let mailDetails = {
    from: 'evanskarani076@gmail.com',
    to: 'riqmuchui@gmail.com',
    subject: 'Test mail',
    text: 'Node.js testing mail'
};

mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
        console.log('Error Occurs', err);
    } else {
        console.log('Email sent successfully');
    }
});
