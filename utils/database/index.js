const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;
const { dataBase } = require("../../config/index");

function connectDB() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(dataBase.url, (err, client) => {
            if (err) reject(err);
            else {
                resolve(client.db(dataBase.dataBaseName));
            }
        });
    });
}

const { receivers, letters } = dataBase.collection;
module.exports = {
    saveReceiver: function(receiver) {
        return connectDB().then(db => {
            return db.collection(receivers).insertOne(receiver);
        });
    },
    getAllReceivers: () => {
        return connectDB().then(db => {
            return db
                .collection(receivers)
                .find()
                .toArray();
        });
    },
    getOneReceiver: id => {
        return connectDB().then(db => {
            return db.collection(receivers).findOne({ _id: ObjectId(id) }, { fields: { _id: 0 } });
        });
    },
    deleteReceiver: id => {
        return connectDB().then(db => {
            return db.collection(receivers).deleteOne({ _id: ObjectId(id) });
        });
    },
    updateReceiver: (id, receiver) => {
        return connectDB().then(db => {
            return db.collection(receivers).update({ _id: ObjectId(id) }, receiver);
        });
    },

    // LETTER METHODS
    saveLetter: letter => {
        return connectDB().then(db => {
            return db.collection(letters).insertOne(letter);
        });
    },
    getAllLetters: () => {
        return connectDB().then(db => {
            return db
                .collection(letters)
                .find()
                .project({ letterItem: false, receivers: false })
                .toArray();
        });
    },
    getOneLetter: id => {
        return connectDB().then(db => {
            return db.collection(letters).findOne({ _id: ObjectId(id) }, { fields: { _id: 0 } });
        });
    },
    updateLetter: (id, letter) => {
        return connectDB().then(db => {
            return db.collection(letters).update({ _id: ObjectId(id) }, letter);
        });
    },
    deleteLetter: id => {
        return connectDB().then(db => {
            return db.collection(letters).deleteOne({ _id: ObjectId(id) });
        });
    }
};
