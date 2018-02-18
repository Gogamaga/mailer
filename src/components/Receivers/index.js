import React, { Component } from "react";
import receiverRequest from "../../requests/receiver";
import "./style.css";
import TableReceiver from "./TableReceiver";
import Button from "../button";
import Receiver from "./Receiver";

export default class Receivers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receivers: [],
            createReceiver: false,
            editReceiver_Id: null
        };
        this.handleCreateReceiver = this.handleCreateReceiver.bind(this);
        this.handleEditReceiver = this.handleEditReceiver.bind(this);
    }
    componentDidMount() {
        receiverRequest.getAllReceiver().then(({ data }) => {
            this.setState({ receivers: data });
        });
    }
    render() {
        const { receivers, createReceiver, editReceiver_Id } = this.state;
        return (
            <div className="receivers-wrap">
                <Button onClick={this.handleCreateReceiver}>
                    {!createReceiver ? "Create Receiver" : "Back to list"}
                </Button>
                {!createReceiver ? (
                    <TableReceiver receivers={receivers} onEdit={this.handleEditReceiver} />
                ) : (
                    <Receiver id={editReceiver_Id} />
                )}
            </div>
        );
    }

    handleCreateReceiver() {
        this.setState(({ createReceiver }) => {
            return { createReceiver: !createReceiver, editReceiver_Id: null };
        });
    }
    handleEditReceiver({ target }) {
        const id = target.closest("tr").dataset.id;
        this.setState({ createReceiver: true, editReceiver_Id: id });
    }
}
