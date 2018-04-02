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

    sendEmail(contact).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
    });
});



exports.app = functions.https.onRequest(app);
