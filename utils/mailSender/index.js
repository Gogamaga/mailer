const nodemailer = require("nodemailer");
const configSendMail = require("../../config/index");
const fs = require("fs");

const { service, user, pass } = configSendMail.mailSender;

const sendMail = (receiversList, htmlText) => {
    let transporter = nodemailer.createTransport({
        service,
        auth: {
            user,
            pass
        }
    });

    receiversList.forEach(element => {
        let mailOptions = {
            from: "bj", // sender address
            to: element, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: htmlText // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log("Message sent: %s", info);
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        });
    });
};

module.exports = sendMail;
