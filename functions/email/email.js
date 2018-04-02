const nodemailer = require('nodemailer');

let sendEmail = function(contact) {
    let subject = `
    Nova Mensagem de: ${contact.name} 
    `;

    let html = `
    <h4>Assunto: ${contact.subject}</h4>
    <p>Mensagem: ${contact.message} </p>
    <hr>
    <h4>Contato: ${contact.name} </h4>
    <h4>Email: ${contact.email} </h4>
    `;
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'mightyrafa@gmail.com',
            pass: 'Rnoel#339:'
        }
    });
    
    let mailOptions = {
        from: '"node" <mightyrafa@gmail.com>',
        to:'mightyrafa@yahoo.com.br',
        subject,
        html
    }

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
               throw(error);
            }
            console.log('Message sent: %s', info.messageId);
            return Promise.resolve();
        });
        
    } catch (error) {
        res.send(error);
        return Promise.reject(error);
    }
}

module.exports = {sendEmail}