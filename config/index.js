module.exports = {
    mailSender: {
        service: "gmail",
        user: "munhen.stock.ua@gmail.com",
        pass: "chatty0000"
    },
    dataBase: {
        url: "mongodb://munhen-stock:chatty35@ds215208.mlab.com:15208/mail-viber-sender",
        dataBaseName: "mail-viber-sender",
        collection: {
            receivers: "receivers",
            letters: "letters"
        }
    }
};
