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

    async function sender(receivers) {
        for (let i = 0; i < receivers.length; i++) {
            const result = await send(receivers[i]);
            console.log(result, i);
        }
    }
    sender(receivers);

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
                return resolve(info.accepted);
            });
        });
    }
};

module.exports = sendMail;
