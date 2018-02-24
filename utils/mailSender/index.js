const nodemailer = require("nodemailer");
const configSendMail = require("../../config/index");

const { service, user, pass } = configSendMail.mailSender;

const sendMail = ({ receivers, name, subject }, htmlText, callback) => {
    let transporter = nodemailer.createTransport({
        service,
        auth: {
            user,
            pass
        }
    });

    receivers.forEach((receiver, index) => {
        let mailOptions = {
            from: "Мюнхен <munhen.stock.ua@gmail.com>", // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            text: name, // plain text body
            html: htmlText // html body
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log("errorrr", receiver, index);
            }
            console.log("Message sent: %s", info.messageId, receiver, index);
        });
    });
    setTimeout(callback, 0);
};

module.exports = sendMail;
