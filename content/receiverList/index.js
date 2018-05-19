import React, { Component } from "react";
import "./style.css";
import Receiver from "../receiver";
import Button from "../../button";
import ModalCreateReceiver from "../modalCreateReceiver";
const receiverList = [
    {
        id: 1,
        name: "Oleg",
        email: "afssgarh",
        phone: "3456654321",
        checked: true
    },
    {
        id: 2,
        name: "Oleg",
        email: "afssgarh",
        phone: "3456654321",
        checked: false
    },
    {
        id: 3,
        name: "Oleg",
        email: "afssgarh",
        phone: "3456654321",
        checked: true
    }
];
export default class ReceiverList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalCreateReceiver: null
        };
    }

    componentWillMount() {
        this.setState({
            receivers: JSON.parse(localStorage.getItem("receiverList"))
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.handlerOpenModal.bind(this)}>Create</Button>
                {this.state.modalCreateReceiver ? (
                    <ModalCreateReceiver closeModal={this.handleCloseModal.bind(this)} />
                ) : null}
                <table className="receivers-table">
                    <thead className="receivers-table__head">
                        <tr>
                            <th>
                                <input type="checkbox" />
                            </th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody className="receivers-table__body">
                        {this.state.receivers.map(receiver => {
                            return (
                                <Receiver
                                    key={receiver.id}
                                    id={receiver.id}
                                    name={receiver.name}
                                    email={receiver.email}
                                    phone={receiver.phone}
                                    checked={receiver.checked}
                                    checkedReceiver={this.checkedHandler.bind(this)}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    handlerOpenModal() {
        this.setState({ modalCreateReceiver: true });
    }

    handleCloseModal(e) {
        this.setState({ modalCreateReceiver: null });
    }

    checkedHandler(id) {
        this.setState(prevState => {
            const newReceivers = prevState.receivers.map(receiver => {
                if (receiver.id === id) {
                    receiver.checked = !receiver.checked;
                }
                return receiver;
            });
            localStorage.setItem("receiverList", JSON.stringify(newReceivers));
            return {
                receivers: newReceivers
            };
        });
    }
}
