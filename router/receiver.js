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
                return (limitReceivers = result.filter(
                    (receiver, index) => (index >= from && index < to ? true : false)
                ));
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
    }
    // saveR(arr) {
    //     const newArr = arr.map(receiver => {
    //         delete receiver.id;
    //         delete receiver.active;

    //         delete receiver.createdAt;
    //         delete receiver.updatedAt;
    //         receiver.dateCreate = moment().format("YYYY-MM-DD HH:mm:ss");
    //         receiver.email = receiver.mail;
    //         delete receiver.mail;
    //         return receiver;
    //     });
    //     newArr.forEach(receiver => {
    //         dataBase.saveReceiver(receiver).then(result => console.log(result.ops));
    //     });
    // }
};
