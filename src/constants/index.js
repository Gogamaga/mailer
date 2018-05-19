import shortId from "short-id";

export default {
    newItem() {
        return {
            id: shortId.generate(),
            itemName: "",
            hrefItem: "",
            imageItem: "",
            brandName: "",
            imageBrand: "",
            price: "",
            count: ""
        };
    },
    newLetter() {
        return {
            name: "",
            subject: "",
            letterItem: [
                {
                    id: shortId.generate(),
                    itemName: "",
                    hrefItem: "",
                    imageItem: "",
                    brandName: "",
                    imageBrand: "",
                    price: "",
                    count: "",
                    units: ""
                }
            ],
            receivers: []
        };
    },
    newReceiver() {
        return {
            name: "",
            email: "",
            phone: ""
        };
    },
    url: {
        host: "http://localhost:3000/",
        letter: "letter",
        receiver: "receiver",
        receiverLimit: "receiverlimit",
        validate: 'validate',
        search : 'search'
    }
};
