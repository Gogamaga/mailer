import axios from "axios";
const url = {
    host: "http://localhost:3000/",
    letter: "letter",
    receiver: "receiver"
};

export default {
    getAllLetters() {
        return axios.get(`${url.host}${url.letter}`);
    },
    getOneLetter(id) {
        return axios.get(`${url.host}${url.letter}/${id}`);
    },
    saveLetter(letter) {
        return axios.post(`${url.host}${url.letter}`, letter);
    },
    updateLetter(id, letter) {
        return axios.put(`${url.host}${url.letter}/${id}`, letter);
    }
};
