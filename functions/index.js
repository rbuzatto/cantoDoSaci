const functions     = require('firebase-functions');
const express       = require('express');
const bodyParser    = require('body-parser');
const nodemailer    = require('nodemailer');

const {sendEmail}     = require('./email/email');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/contact', (req, res) => {
    
    let contact = req.body;
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
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'mightyrafa@gmail.com',
            pass: 'Rnoel#339:'
        },
        tls: {
            rejectUnauthorized: false
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
        });
        
    } catch (error) {
        res.send(error);
    }

});



exports.app = functions.https.onRequest(app);
