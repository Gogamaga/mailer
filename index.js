const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const receiverRouter = require("./router/receiver");
const letterRouter = require("./router/letter");
const cors = require("cors");
const app = express();
const db = require("./utils/database/index");

app.use(bodyParser.json());
app.use(cors({ origin: "http://localhost:8080" }));
app.use(express.static(__dirname + "/public", { index: false }));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});
// app.post("/receiver", receiverRouter.saveReceiver);

//SEND LETTER

app.post("/send/:id", letterRouter.sendLetter);

app.get("/receiver", receiverRouter.getAllReceiver);

app.get("/receiver/:id", receiverRouter.getOneReceiver);

app.post("/receiver", receiverRouter.saveReceiver);
app.post("/receiverlimit", receiverRouter.getLimitReceivers);
app.put("/receiver/:id", receiverRouter.updateReceiver);

app.delete("/receiver/:id", receiverRouter.deleteReceiver);

app.post("/letter", letterRouter.saveLetter);
app.get("/letter", letterRouter.getAllLetters);
app.get("/letter/:id", letterRouter.getOneLetter);
app.put("/letter/:id", letterRouter.updateLetter);
app.delete("/letter/:id", letterRouter.deleteLetter);
app.listen(3000, () => console.log("Server Start in 3000 port"));
