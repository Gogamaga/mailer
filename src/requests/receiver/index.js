import axios from "axios";
import constants from "../../constants";

const { host, receiver } = constants.url;

export default {
    getAllReceiver() {
        return axios.get(`${host}${receiver}`);
    },
    getOneReceiver(id) {
        return axios.get(`${host}${receiver}/${id}`);
    },
    saveReceiver(newReceiver) {
        return axios.post(`${host}${receiver}`, newReceiver);
    },
    updateReceiver(id, receiverEdit) {
        return axios.put(`${host}${receiver}/${id}`, receiverEdit);
    },
    deleteReceiver(id) {
        return axios.delete(`${host}${receiver}/${id}`);
    }
};
