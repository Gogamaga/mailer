const nodemailer = require("nodemailer");
const configSendMail = require("../../config/index");

const { service, user, pass } = configSendMail.mailSender;

const sendMail = ({ receivers, name, subject }, htmlText) => {
    const transporter = nodemailer.createTransport({
        service,
        auth: {
            user,
            pass
        }
    });
    receivers.forEach((rec, ind) => {
        send(rec, ind)
            .then(info => {
                console.log(info, "index: " + ind);
            })
            .catch(err => console.log(err, "index: " + ind));
    });
    function send(receiver, index) {
        return new Promise((resolve, reject) => {
            let mailOptions = {
                from: "Мюнхен <munhen.stock.ua@gmail.com>", // sender address
                to: receiver, // list of receivers
                subject: subject, // Subject line
                text: name, // plain text body
                html: htmlText // html body
            };

            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return reject(err);
                }
                return resolve(info);
            });
        });
    }
};

module.exports = sendMail;
