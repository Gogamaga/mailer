import axios from "axios";
import constants from "../../constants";

const { host, receiver } = constants.url;

export default {
    getAllReceiver() {
        return axios.get(`${host}${receiver}`);
    },
    getOneLetter(id) {
        return axios.get(`${host}${receiver}/${id}`);
    },
    saveLetter(letter) {
        return axios.post(`${host}${receiver}}`, letter);
    },
    updateLetter(id, letter) {
        return axios.put(`${host}${receiver}}/${id}`, letter);
    },
    deleteLetter(id) {
        return axios.delete(`${host}${receiver}/${id}`);
    }
};
