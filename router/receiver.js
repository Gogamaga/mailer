const dataBase = require("../utils/database/index");

module.exports = {
    saveReceiver: (req, res) => {
        dataBase.saveReceiver(req.body).then(result => res.send(result));
    },
    getAllReceiver: (req, res) => {
        dataBase.getAllReceivers().then(result => res.send(result));
    },
    getOneReceiver: (req, res) => {
        const id = req.params.id;
        dataBase.getOneReceiver(id).then(result => {
            res.send(result);
        });
    },
    updateReceiver: (req, res) => {
        const id = req.params.id;
        const receiver = req.body;
        dataBase.updateReceiver(id, receiver).then(result => {
            res.send(result);
        });
    },
    deleteReceiver: (req, res) => {
        dataBase.deleteReceiver(req.body.id);
    }
};
