const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const sendMail = require("./utils/mailSender");
const fs = require("fs");
const pug = require("pug");
const receiverRouter = require("./router/receiver");
const letterRouter = require("./router/letter");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:8080" }));
app.use(express.static(__dirname + "/public", { index: false }));

const mailClient = ["jextailor@gmail.aa.com", "jextailor@gmail.com", "jextailor@gmail.com"];

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.post("/receiver", receiverRouter.saveReceiver);
// var fn = pug.compileFile('./mail.pug', {pretty : true})
// console.log('read')
// var html = fn({name: 'oleg'});
// console.log('compile')
// sendMail(['jextailor@gmail.com'], html)
// console.log('send')

app.get("/receiver", receiverRouter.getAllReceiver);

app.delete("/receiver", receiverRouter.deleteReceiver);

app.post("/letter", letterRouter.saveLetter);
app.get("/letter", letterRouter.getAllLetters);
app.get("/letter/:id", letterRouter.getOneLetter);
app.put("/letter/:id", letterRouter.updateLetter);
app.delete("/letter/:id", letterRouter.deleteLetter);
app.listen(3000, () => console.log("Server Start in 3000 port"));
