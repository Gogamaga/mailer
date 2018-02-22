const moment = require("moment");
const dataBase = require("../utils/database/index");
const pug = require("pug");
const mailSender = require("../utils/mailSender/index.js");

module.exports = {
    saveLetter: (req, res) => {
        const letter = req.body;
        letter.dateCreate = moment().format("YYYY-MM-DD HH:mm:ss");
        dataBase.saveLetter(req.body).then(result => res.send(result));
    },
    getAllLetters: (req, res) => {
        dataBase.getAllLetters().then(result => res.send(result));
    },
    getOneLetter: (req, res) => {
        const id = req.params.id;
        dataBase.getOneLetter(id).then(result => {
            res.send(result);
        });
    },
    updateLetter: (req, res) => {
        const id = req.params.id;
        const letter = req.body;
        dataBase
            .updateLetter(id, letter)
            .then(result => res.send(result))
            .catch(result => console.log(result));
    },
    deleteLetter: (req, res) => {
        const id = req.params.id;
        dataBase
            .deleteLetter(id)
            .then(result => res.send(result))
            .catch(result => console.log(result));
    },
    sendLetter: (req, res) => {
        const id = req.params.id;
        dataBase.getOneLetter(id).then(result => {
            const fn = pug.compileFile("./mail.pug");
            const htmlLetter = fn({ letterItem: result.letterItem });
            mailSender(result, htmlLetter);
        });
    }
};
