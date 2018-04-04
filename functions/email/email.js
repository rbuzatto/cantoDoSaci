const nodemailer = require('nodemailer');

let sendEmail = function(contact) {
    return new Promise((resolve, reject) => {
        let subject = `
        Canto do Saci (contato site): ${contact.name}
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
                user: 'cozinhacantodosaci@gmail.com',
                pass: 'corifeu1880'
            }
        });
        
        let mailOptions = {
            from: '"Contato:site" <cozinhacantodosaci@gmail.com>',
            to:'cozinhacantodosaci@gmail.com',
            subject,
            html
        }

        try {
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                throw(error);
                }
                resolve();
            });
            
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {sendEmail}