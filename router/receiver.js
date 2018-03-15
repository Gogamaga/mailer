const dataBase = require("../utils/database/index");
const moment = require("moment");

module.exports = {
    saveReceiver: (req, res) => {
        const receiver = req.body;
        receiver.dateCreate = moment().format("YYYY-MM-DD HH:mm:ss");
        dataBase.saveReceiver(receiver).then(result => res.send(result));
    },
    getAllReceiver: (req, res) => {
        dataBase.getAllReceivers().then(result => res.send(result));
    },
    getLimitReceivers(req, res) {
        const { from, to } = req.body;
        dataBase
            .getAllReceivers()
            .then(result => {
                const limitReceivers = result.filter(
                    (receiver, index) => (index >= from && index < to ? true : false)
                );
                return { limitReceivers, receiverCount: result.length };
            })
            .then(result => res.send(result));
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
        const id = req.params.id;
        dataBase.deleteReceiver(id).then(result => {
            res.send(result);
        });
    },
    validateOnIndentity(req, res) {
        const target = req.body;
        dataBase.validateOnIndentity(target).then(result => res.send(!!result));
    },
    searchReceiver(req, res) {
        const { field, searchValue, from, to } = req.body;
        dataBase
            .searchingRecever(field, searchValue)
            .then(result => {
                const limitReceivers = result.filter(
                    (receiver, index) => (index >= from && index < to ? true : false)
                );
                return { limitReceivers, receiverCount: result.length };
            })
            .then(result => res.send(result))
            .catch(e => console.log(e));
    }
};
