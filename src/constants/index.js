import shortId from "short-id";

export default {
    newItem: {
        id: shortId.generate(),
        itemName: "",
        hrefItem: "",
        imageItem: "",
        brandName: "",
        imageBrand: "",
        price: "",
        count: ""
    },
    newLetter: {
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
                units: "од"
            }
        ],
        receivers: []
    }
};
