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
// - var letterItem = [ {id: 1,itemName: "Гаманці жіночі",hrefItem: "http://munhen-stock.com.ua/sklad-zaminnik-italiia-1",imageItem: "http://munhen-stock.com.ua/uploads/media/category/0001/26/thumb_25723_category_default.jpeg", brandName: "Guess",imageBrand: "http://munhen-stock.com.ua/uploads/media/brand/0001/22/thumb_21547_brand_default.jpeg",price: "12",count: "10", units: "кг" },{id: 1,itemName: "Гаманці жіночі",hrefItem: "http://munhen-stock.com.ua/sklad-zaminnik-italiia-1",imageItem: "http://munhen-stock.com.ua/uploads/media/category/0001/26/thumb_25723_category_default.jpeg", brandName:"Mustang",imageBrand: "http://munhen-stock.com.ua/uploads/media/brand/0001/22/thumb_21547_brand_default.jpeg",price: "12",count: "10", units: "кг" }]
app.post("/receiver", receiverRouter.saveReceiver);
var fn = pug.compileFile("./mail.pug", { pretty: true });

// var html = fn((letterItem = [{ name: "oleg" }]));
var html = fn({
    letterItem: [
        {
            id: 1,
            itemName: "Гаманці жіночі",
            hrefItem: "http://munhen-stock.com.ua/sklad-zaminnik-italiia-1",
            imageItem:
                "http://munhen-stock.com.ua/uploads/media/category/0001/26/thumb_25723_category_default.jpeg",
            brandName: "Guess",
            imageBrand:
                "http://munhen-stock.com.ua/uploads/media/brand/0001/22/thumb_21547_brand_default.jpeg",
            price: "12",
            count: "10",
            units: "кг"
        },
        {
            id: 1,
            itemName: "Гаманці жіночі",
            hrefItem: "http://munhen-stock.com.ua/sklad-zaminnik-italiia-1",
            imageItem:
                "http://munhen-stock.com.ua/uploads/media/category/0001/26/thumb_25723_category_default.jpeg",
            brandName: "Mustang",
            imageBrand:
                "http://munhen-stock.com.ua/uploads/media/brand/0001/22/thumb_21547_brand_default.jpeg",
            price: "12",
            count: "10",
            units: "кг"
        }
    ]
});
console.log(html);

// console.log(html);
sendMail(["jextailor@gmail.com"], html);
// console.log('send')

app.get("/receiver", receiverRouter.getAllReceiver);

app.get("/receiver/:id", receiverRouter.getOneReceiver);

app.post("/receiver", receiverRouter.saveReceiver);
app.put("/receiver/:id", receiverRouter.updateReceiver);

app.delete("/receiver/:id", receiverRouter.deleteReceiver);

app.post("/letter", letterRouter.saveLetter);
app.get("/letter", letterRouter.getAllLetters);
app.get("/letter/:id", letterRouter.getOneLetter);
app.put("/letter/:id", letterRouter.updateLetter);
app.delete("/letter/:id", letterRouter.deleteLetter);
app.listen(3000, () => console.log("Server Start in 3000 port"));
