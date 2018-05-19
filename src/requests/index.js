import axios from "axios";
const url = {
    host: "http://localhost:3000/",
    letter: "letter",
    receiver: "receiver",
    send: "send"
};
const CancelToken = axios.CancelToken;
let cancel = null;
const requestLetter = {
    cancel: cancel,
    getAllLetters() {
        return axios.get(`${url.host}${url.letter}`, {
            cancelToken: new CancelToken(function executor(c) {
                requestLetter.cancel = c;
            })
        });
    },
    getOneLetter(id) {
        return axios.get(`${url.host}${url.letter}/${id}`);
    },
    saveLetter(letter) {
        return axios.post(`${url.host}${url.letter}`, letter);
    },
    updateLetter(id, letter) {
        return axios.put(`${url.host}${url.letter}/${id}`, letter);
    },
    deleteLetter(id) {
        return axios.delete(`${url.host}${url.letter}/${id}`);
    },
    sendLetter(id) {
        return axios.post(`${url.host}${url.send}/${id}`);
    }
};
export default requestLetter;
