const dataBase = require("../utils/database/index");

module.exports = {
    saveReceiver: (req, res) => {
        dataBase.saveReceiver(req.body).then(result => res.send(result));
    },
    getAllReceiver: (req, res) => {
        dataBase.getAllReceivers().then(result => res.send(result));
    },
    deleteReceiver: (req, res) => {
        dataBase.deleteReceiver(req.body.id);
    }
};
