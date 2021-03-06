import axios from "axios";
import constants from "../../constants";

const { host, receiver, receiverLimit, validate,search} = constants.url;

export default {
    getAllReceiver() {
        return axios.get(`${host}${receiver}`);
    },
    getOneReceiver(id) {
        return axios.get(`${host}${receiver}/${id}`);
    },
    getLimitReceivers(obj) {
        return axios.post(`${host}${receiverLimit}`, obj);
    },
    saveReceiver(newReceiver) {
        return axios.post(`${host}${receiver}`, newReceiver);
    },
    updateReceiver(id, receiverEdit) {
        return axios.put(`${host}${receiver}/${id}`, receiverEdit);
    },
    deleteReceiver(id) {
        return axios.delete(`${host}${receiver}/${id}`);
    },
    validateOnIndentity(target){
        return axios.post(`${host}${receiver}/${validate}`, target);
    },
    searchReceiver(searchingReceiver, limit){
        return axios.post(`${host}${receiver}/${search}`, {...searchingReceiver, ...limit})
    }
};
