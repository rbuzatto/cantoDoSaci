const nodemailer = require('nodemailer');

let sendEMail = function(contact) {
    let subject = `
    Nova Mensagem de: ${contact.name} 
    `;

    let html = `
    <h3>Assunto: ${contact.subject}<h3>
    <p>Mensagem: ${contact.message} </p>
    <br>
    <h4>Contato: ${contact.name} </h4>
    <h4>Email: ${contact.email} </h4>
    `;
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,
        secure: true,
        auth: {
            user: 'mightyrafa@yahoo.com.br',
            pass: 'Rnoel#228:'
        }
    });
    
    let mailOptions = {
        from: '"node" <mightyrafa@yahoo.com.br>',
        to:'mightyrafa@yahoo.com.br',
        subject,
        html
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}

module.exports = {sendEMail}